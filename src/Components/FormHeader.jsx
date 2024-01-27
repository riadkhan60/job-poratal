import { FcKey } from 'react-icons/fc';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function FormHeader({text}) {
  return (
    <>
      <Avatar
        sx={{
          background: '#c6d9fc',
          padding: '1rem',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <FcKey fontSize={'50px'} />
      </Avatar>
      <Typography typography={'h5'}>{text}</Typography>
    </>
  );
}

export default FormHeader;
