import { Typography } from "@mui/material"

import CreateJobForm from "../CreateJob/CreateJobForm"

function CreateJob() {
  return (
    <div>
      <Typography gutterBottom sx={{ marginTop: '6rem' }} textAlign={'center'} variant="h2">Create Job</Typography>
      <CreateJobForm/>
    </div>
  )
}

export default CreateJob
