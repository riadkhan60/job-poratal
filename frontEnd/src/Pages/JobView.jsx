import {
  Box,
  Button,
  ButtonGroup,
  CardMedia,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import JobRequirementList from '../Components/JobRequirementList';
import { MdDeleteOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { deleteJob, getJob } from '../Services/JobListApi';
import useAuth from '../context/authValues';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

function JobView() {
  const [isDelete, setIsDelete] = useState(false)
  const data = useLoaderData();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const navigateTo = useNavigate();

  const { mutate,  } = useMutation({
    mutationFn: onhandleDelete,
    onSuccess: queryClient.invalidateQueries({
      queryKey: ['jobList'],
    }),
  });
  

  useEffect(() => {
    if (isDelete) {
      navigateTo('/')
    }
  },[isDelete, navigateTo])

  async function onhandleDelete() {
    const res = await deleteJob(user, data.id);
    setIsDelete(true)
    return true
 }

 function handleDelete() {
   mutate();

  }

  return (
    <div>
      <Container sx={{ marginTop: '12rem' }}>
        <Typography variant="h3">{data.jobTitle}</Typography>
        <Stack
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{ marginTop: '3rem' }}
          direction={{ lg: 'row' }}
        >
          <Typography sx={{ maxWidth: '800px' }} variant="body1">
            {data.jobDescription}
          </Typography>
          <Box>
            <CardMedia
              component="img"
              height="140"
              width="400px"
              image={data.imageLink}
              alt="random image"
              sx={{ marginBottom: '2rem' }}
            />
            <JobRequirementList skills={data.requiredSkills} />
          </Box>
        </Stack>
        <ButtonGroup sx={{ marginTop: '3rem' }} variant="outlined">
          <Button onClick={handleDelete} startIcon={<MdDeleteOutline />}>
            Delete
          </Button>
          <Button startIcon={<CiEdit />}>Edit</Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}

export async function loader({ params }) {
  const jobID = params.jobId;
  const token = localStorage.getItem('access_token');
  const data = await getJob(token, jobID);

  return data;
}

export default JobView;
