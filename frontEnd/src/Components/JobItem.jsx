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
import { deleteJob } from '../Services/JobListApi';
import useAuth from '../context/authValues';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function JobItem({ jobitem }) {
  const { user } = useAuth();
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: () => deleteJob(user, jobitem.id),
    onSuccess: queryClient.invalidateQueries({
      queryKey: ['jobList'],
    }),
  });

  

  function handleDelete() {
    mutate()
  }

  return (
    <div>
      <Box maxWidth="400px">
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={jobitem.imageLink}
            alt="random image"
          />
          <CardContent>
            <Typography
              height={'6rem'}
              gutterBottom
              variant="h5"
              component="div"
            >
              {jobitem.jobTitle}
            </Typography>
            <Typography
              width={'350px'}
              height={'110px'}
              variant="body2"
              color="text.secondary"
            >
              {jobitem.jobDescription.slice(0, 300)}
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: '2rem 1rem' }}>
            <ButtonGroup variant="outlined">
              <Button startIcon={<CiViewBoard />}>
                <Link to={`/job/${jobitem.id}`} style={{ color: 'inherit' }}>
                  view
                </Link>
              </Button>
              <Button onClick={handleDelete} startIcon={<MdDeleteOutline />}>
                Delete
              </Button>
              <Button disabled={true} startIcon={<CiEdit />}>Edit</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default JobItem;
