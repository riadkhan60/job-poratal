import TextField from '@mui/material/TextField';

function Inputfields({
  label,
  register,
  type,
  required,
  error,
  getValues = undefined,
  emailExist = false,
}) {
  const data = type === 'text' ? 'username' : type;
  return (
    <div key={type}>
      <TextField
        id={type}
        label={label}
        variant="standard"
        fullWidth
        required={required || error?.message === 'Required'}
        error={
          emailExist
            ? true
            : error?.message
            ? true
            : false
        }
        helperText={ emailExist
            ? 'already a account registred with this email':error?.message !== 'Required' ? error?.message : ''}
        type={type === 'confirmPassword' ? 'password' : type}
        {...register(data, {
          required: 'Required',
          validate: (value) => {
            if (data === 'confirmPassword') {
              console.log(value);
              console.log(getValues().password);
              return getValues().password != value
                ? 'password did not match'
                : true;
            }
          },
        })}
      />
    </div>
  );
}

export default Inputfields;
