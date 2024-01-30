import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { Form, redirect, useActionData } from 'react-router-dom';
import GridColumn from '../Components/GridColumn';
import { createJob } from '../Services/JobListApi';

function CreateJobForm() {
  const actionData = useActionData();

  return (
    <Form method="POST">
      <GridColumn>
        <Paper
          elevation={6}
          sx={{ width: {lg:'600px'}, padding: '2rem', marginTop: '3rem' }}
        >
          <Stack
            spacing={4}
            justifyItems={'center'}
            alignItems={'center'}
            direction={'column'}
          >
            <TextField
              fullWidth
              id="jobTitle"
              label="Job Title"
              variant="filled"
              name="jobTitle"
            />
            <TextField
              fullWidth
              multiline
              id="jobDescription"
              label="Job Description"
              name="jobDescription"
              variant="filled"
            />
            <TextField
              fullWidth
              multiline
              id="requiredSkills"
              label="Required Skills"
              variant="filled"
              name="requiredSkills"
              helperText="use spaces between skills"
            />
            <TextField
              fullWidth
              id="imageLink"
              label="Image Link"
              variant="filled"
              name="imageLink"
              defaultValue={'http://source.unsplash.com/random'}
            />
          </Stack>
          <GridColumn>
            <Button
              type="submit"
              sx={{ marginTop: '2rem' }}
              variant="contained"
            >
              Add New Job
            </Button>
          </GridColumn>
          {actionData ? <Typography sx={{marginTop:'1rem', color:'red'}}>{actionData}</Typography> : ''}
        </Paper>
      </GridColumn>
    </Form>
  );
}

export default CreateJobForm;

export async function action({ request }) {
  const data = await request.formData();
  const convertedData = Object.fromEntries(data);
  if (!convertedData.jobDescription || !convertedData.jobTitle)
    return 'Please select a job description and a job title';
  const token = localStorage.getItem('access_token');
  await createJob(token, {
    ...convertedData,
    requiredSkills: convertedData.requiredSkills.split(' '),
  });
  return redirect('/home');
}
