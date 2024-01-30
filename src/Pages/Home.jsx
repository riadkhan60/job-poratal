
import { Typography } from '@mui/material';
import JobsLists from '../Components/JobsLists';
import useJobsListValues from '../context/Jobslistvalues';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../context/authValues';
import {  getJobs } from '../Services/JobListApi';
import { useNavigation } from 'react-router-dom';

function Home() {
  const { setJobList, jobList } = useJobsListValues();
  const { user } = useAuth();
  const { state } = useNavigation();

  const {data} = useQuery({
    queryKey: ['jobList'],
    queryFn: () => getJobs(user)
  })

  useEffect(() => {
    if (data?.jobs) setJobList(data?.jobs);
    
  }, [data, setJobList])
  

  return (
    <div>
      <Typography
        gutterBottom
        sx={{ marginTop: '6rem' }}
        textAlign={'center'}
        variant="h2"
      >
        Your jobs
      </Typography>

      {state === 'loading' ? (
        <div className="classic-2"></div>
      ) : (
        <JobsLists jobList={jobList} />
      )}
    </div>
  );
}

export default Home;
