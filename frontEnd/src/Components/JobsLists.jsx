import { Box, Grid } from '@mui/material';
import JobItem from './JobItem';
import JobItemDemo from './JobItemDemo';

function JobsLists({ jobList }) {
  return (
    <Box marginTop={'5rem'}>
      {/* <GridColumn>
        <Button variant="contained"><Link style={{color:'white'}} to={'createjobs'}>Create Job</Link></Button>
      </GridColumn> */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item>
          <JobItemDemo />
        </Grid>
        <Grid item>
          <JobItemDemo />
        </Grid>
        <Grid item>
          <JobItemDemo />
        </Grid>
        {jobList.map((job, index) => {
          return (
            <Grid item key={'key'+job.id + index}>
              <JobItem jobitem={job} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default JobsLists;
