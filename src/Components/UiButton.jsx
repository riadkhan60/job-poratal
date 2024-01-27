import Button from '@mui/material/Button';

function UiButton({ type ='primary', children }) {
  return (
    type === 'primary' && (
      <Button type='submit' sx={{ marginTop: '20px'}} variant="contained">
        {children}
      </Button>
    )
  );
}

export default UiButton;
