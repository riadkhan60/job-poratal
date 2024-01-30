import Button from '@mui/material/Button';


function UiButton({ type = 'primary', children,state }) {
  console.log(state)
  const disabled = state === 'submitting'
  return (
    type === 'primary' && (
      <Button disabled={disabled}  type="submit" sx={{ marginTop: '20px' }} variant="contained">
        <span>{children}</span>
      </Button>
    )
  );
}

export default UiButton;
