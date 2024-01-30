import { Stack, Typography } from '@mui/material';


function JobRequirementList({skills}) {
  return (
    <>
      <Typography textAlign={'end'} variant="h5" gutterBottom>
        Required Skills
      </Typography>
      <Stack textAlign={'end'}>
        {skills.map(skill => {
          return <Typography key={skill}>{skill}</Typography>;
        })}
      </Stack>
    </>
  );
}

export default JobRequirementList;
