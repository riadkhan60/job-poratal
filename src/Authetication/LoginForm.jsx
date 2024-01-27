import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Inputfields from '../Components/Inputfields';
import FormHeader from '../Components/FormHeader';
import GridColumn from '../Components/GridColumn';
import frormStyle from './FormStyle';
import UiButton from '../Components/UiButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  function success(data) {
    console.log(data);
  }
  return (
    <div>
      <GridColumn height={'100vh'}>
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

export default LoginForm;
