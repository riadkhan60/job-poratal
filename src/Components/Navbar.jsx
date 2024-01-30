import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { SiSecurityscorecard } from 'react-icons/si';
import { HiMiniArrowRightOnRectangle } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import useAuth from '../context/authValues';

function Navbar() {
  const {logout} = useAuth()
  return (
    <div>
      <AppBar sx={{ boxShadow: 'none' }}>
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="main"
              aria-label="logo"
            >
              <Box color={'white'}>
                <SiSecurityscorecard />
              </Box>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TechForing
            </Typography>
            <Stack spacing={2} direction={'row'}>
              <Button>
                <NavLink style={{ color: 'white' }} to={'/home'}>
                  Home
                </NavLink>{' '}
              </Button>
              <Button>
                <NavLink style={{ color: 'white' }} to={'createjobs'}>
                  Add New Job
                </NavLink>{' '}
              </Button>
              <Button
                endIcon={<HiMiniArrowRightOnRectangle />}
                onClick={() => logout()}
                sx={{ color: 'white' }}
              >
                {' '}
                Log out
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
