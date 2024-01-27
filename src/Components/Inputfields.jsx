import TextField from '@mui/material/TextField';

function Inputfields({
  label,
  register,
  type,
  required,
  error,
  getValues = undefined,
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
        error={error?.message ? true : false}
        helperText={error?.message !== 'Required' ? error?.message : ''}
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
