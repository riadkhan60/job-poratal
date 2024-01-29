import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Inputfields from '../Components/Inputfields';
import FormHeader from '../Components/FormHeader';
import GridColumn from '../Components/GridColumn';
import frormStyle from './FormStyle';
import UiButton from '../Components/UiButton';
import Typography from '@mui/material/Typography';
import { Link, useActionData, useNavigate, useSearchParams, useSubmit } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginUser } from '../Services/AuthenticationApis';
import { useEffect, useState } from 'react';
import useAuth from '../context/authValues';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const submit = useSubmit();
  const data = useActionData();
  const { login, user } = useAuth();
  const [error, setError] = useState(false);
  const navigateto = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams)

  useEffect(() => {
    if (user) {
      navigateto(`/`);
    }
  },[user, navigateto, setSearchParams])

  useEffect(() => {
    if (data?.accessToken) {
      localStorage.setItem('access_token', data.accessToken);
      login(data.accessToken);
    } else if (data === 'error') { 
      setError(true)
    }
  }, [data, login]);

  async function success(data) {
    submit(data, { method: 'post' });
  }

  return (
    <div>
      <GridColumn height={'90vh'}>
        <Paper elevation={1} style={frormStyle.stylePaper}>
          <GridColumn>
            <FormHeader text={'Login to your account'} />
            <div style={frormStyle.inputContainer}>
              <form onSubmit={handleSubmit(success)}>
                <Grid container sx={{ gap: '1rem' }} direction={'column'}>
                  <Inputfields
                    register={register}
                    type={'email'}
                    label={'Email'}
                    error={errors?.email}
                  />
                  <Inputfields
                    register={register}
                    type={'password'}
                    label={'password'}
                    error={errors?.password}
                    getValues={getValues}
                  />
                  <UiButton>Log in</UiButton>
                  {error && (
                    <Typography variant="caption">couldn't fina a account</Typography>
                  )}
                  <Typography variant="caption">Forget Password ?</Typography>
                  <Typography variant="caption">
                    {`Don't`} Have a Account ?{' '}
                    <Link to={'/signup'}>Signup</Link>
                  </Typography>
                </Grid>
              </form>
            </div>
          </GridColumn>
        </Paper>
      </GridColumn>
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const covertedData = Object.fromEntries(data);
  const user = {
    email: covertedData.email,
    password: covertedData.password,
  };
  try {
    const response = await loginUser(user);
    return response;
  } catch (err) {
    return 'error';
  }
}

export default LoginForm;
