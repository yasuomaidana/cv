import { Grid } from '@mui/material'
import React from 'react'
import TimeLine from '../../../components/TimeLine/TimeLine'
import { School, Work } from '@mui/icons-material'
const Resume = () => {
  return (
    <Grid container>
      <Grid item sm={12} md={6}>
        <TimeLine title='Professional Experience' icon={<Work/>} children={[]}></TimeLine>
      </Grid>
      <Grid item sm={12} md={6}>
      <TimeLine title='Academic Background' icon={<School/>} children={[]}></TimeLine>
      </Grid>
    </Grid>
  )
}

export default Resume