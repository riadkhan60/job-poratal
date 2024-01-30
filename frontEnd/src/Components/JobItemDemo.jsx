import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { CiViewBoard } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { Link } from 'react-router-dom';

function JobItemDemo() {
  return (
    <div>
      <Box maxWidth="400px">
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="http://source.unsplash.com/random"
            alt="random image"
          />
          <CardContent>
            <Typography height={'6rem'} gutterBottom variant="h5" component="div">
              Have Your dream job as a front end web developer
            </Typography>
            <Typography
              width={'350px'}
              height={'110px'}
              variant="body2"
              color="text.secondary"
            >
              <strong style={{ fontSize: '18px' }}> Demo Card </strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde harum cumque libero voluptatibus eos, ab enim debitis ad laborum at quas vel velit temporibus aut nemo odit repellat sunt dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem aliquam doloremque voluptate, consequuntur, 
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: '2rem 1rem' }}>
            <ButtonGroup variant="outlined">
              <Button startIcon={<CiViewBoard />}>
                <Link to={`/job/demo`} style={{ color: 'inherit' }}>
                  view
                </Link>
              </Button>
              <Button startIcon={<MdDeleteOutline />}>Delete</Button>
              <Button disabled={true} startIcon={<CiEdit />}>Edit</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default JobItemDemo;
