import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Inputfields from '../Components/Inputfields';
import FormHeader from '../Components/FormHeader';
import GridColumn from '../Components/GridColumn';
import frormStyle from './FormStyle';
import UiButton from '../Components/UiButton';
import Typography from '@mui/material/Typography';
import { Link, redirect, useActionData, useNavigation, useSubmit } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createUser } from '../Services/AuthenticationApis';

function AccountRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { state } = useNavigation()

  const submit = useSubmit();
  const actionData = useActionData();

  console.log(actionData);
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
            <FormHeader text={'Create new account'} />
            <Box sx={frormStyle.inputContainer}>
              <form onSubmit={handleSubmit(success)}>
                <Grid container sx={{ gap: '1rem' }} direction={'column'}>
                  <Inputfields
                    register={register}
                    type={'text'}
                    label={'User Name'}
                    error={errors?.username}
                    state={state}
                  />
                  <Inputfields
                    register={register}
                    type={'email'}
                    label={'Email'}
                    error={errors?.email}
                    emailExist={actionData == 'Error'}
                    state={state}
                  />
                  <Inputfields
                    register={register}
                    type={'password'}
                    label={'password'}
                    error={errors?.password}
                    getValues={getValues}
                    state={state}
                  />
                  <Inputfields
                    register={register}
                    type={'confirmPassword'}
                    label={'Confirm password'}
                    error={errors?.confirmPassword}
                    getValues={getValues}
                    state={state}
                  />
                  <UiButton state={state}>Sign up</UiButton>
                  <Typography variant="caption">
                    Already Have a Account ?<Link to={'/login'}> Login</Link>
                  </Typography>
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
    name: convertedData.username,
    email: convertedData.email,
    password: convertedData.password,
  };
  try {
    const response = await createUser(user);
    console.log(response);
  } catch (err) {
    return err.message;
  }

  return redirect('/login');
}

export default AccountRegistrationForm;
