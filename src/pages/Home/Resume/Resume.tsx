import { Grid } from '@mui/material'
import React from 'react'
import TimeLine from '../../../components/TimeLine/TimeLine'
import { School, Work } from '@mui/icons-material'
import { experiences } from '../../../utils/resume_info'
import ExperienceTimeLineItem from './ExperienceTimeLine/ExperienceTimeLineItem'
import "./Resume.scss";
const Resume = () => {
  const workExperiences = experiences.workExperience.map((exp,i) => <ExperienceTimeLineItem  experience={exp} key={i}/>)
  const educationExperiences = experiences.schoolExperience.map((exp,i) => <ExperienceTimeLineItem  experience={exp} key={i}/>)
  return (
    <Grid container>
      <Grid item sm={12} md={6} className="resume_experience">
        <TimeLine title='Professional Experience' icon={<Work/>} children={workExperiences}></TimeLine>
      </Grid>
      <Grid item sm={12} md={6}>
      <TimeLine title='Academic Background' icon={<School/>} children={educationExperiences}></TimeLine>
      </Grid>
    </Grid>
  )
}

export default Resume