import {
  Link,
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Inputfields from '../Components/Inputfields';
import FormHeader from '../Components/FormHeader';
import GridColumn from '../Components/GridColumn';
import UiButton from '../Components/UiButton';
import { useForm } from 'react-hook-form';
import { loginUser } from '../Services/AuthenticationApis';
import useAuth from '../context/authValues';
import { Box } from '@mui/material';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const data = useActionData();
  const submit = useSubmit();
  const navigateto = useNavigate();
  const [error, setError] = useState(false);

  const { login, user } = useAuth();

  const { state } = useNavigation();

  console.log(state);
  useEffect(() => {
    if (user) {
      navigateto(`/`);
    }
  }, [user, navigateto]);

  useEffect(() => {
    if (data?.accessToken) {
      localStorage.setItem('access_token', data.accessToken);
      login(data.accessToken);
    } else if (data === 'error') {
      setError(true);
    }
  }, [data, login]);

  async function success(data) {
    submit(data, { method: 'post' });
  }

  return (
    <div>
      <GridColumn height={'90vh'}>
        <Paper
          elevation={1}
          sx={{
            padding: '3rem 4rem',
            width: {
              lg: '400px',
            },
          }}
        >
          <GridColumn>
            <FormHeader text={'Login to your account'} />
            <Box sx={{ width: '100%', marginTop: '10px' }}>
              <form onSubmit={handleSubmit(success)}>
                <Grid container sx={{ gap: '1rem' }} direction={'column'}>
                  <Inputfields
                    register={register}
                    type={'email'}
                    label={'Email'}
                    error={errors?.email}
                    state={state}
                  />
                  <Inputfields
                    register={register}
                    state={state}
                    type={'password'}
                    label={'password'}
                    error={errors?.password}
                    getValues={getValues}
                  />
                  <UiButton state={state}>Login</UiButton>
                  <Stack>
                    {error && (
                      <Typography sx={{ color: 'red' }} variant="caption">
                        Couldn't find a account
                      </Typography>
                    )}
                    <Typography
                      sx={{
                        color: 'blue',
                        cursor: 'pointer',
                        ':hover': { color: 'skyblue' },
                      }}
                      variant="caption"
                    >
                      Forget Password ?
                    </Typography>
                    <Typography variant="caption">
                      {`Don't`} Have a Account ?{' '}
                      <Link to={'/signup'}>Signup</Link>
                    </Typography>
                  </Stack>
                </Grid>
              </form>
            </Box>
          </GridColumn>
        </Paper>
      </GridColumn>
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const convertedData = Object.fromEntries(data);
  const user = {
    email: convertedData.email,
    password: convertedData.password,
  };
  try {
    const response = await loginUser(user);
    return response;
  } catch (err) {
    return 'error';
  }
}

export default LoginForm;
