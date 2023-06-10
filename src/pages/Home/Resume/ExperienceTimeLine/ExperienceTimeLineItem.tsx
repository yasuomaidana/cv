import React from 'react'
import { Experience } from '../../../../utils/resume_info'
import { TimelineContent } from '@mui/lab';
import { Typography } from '@mui/material';
import "./ExperienceTimeLineItem.scss"
interface ExperienceTimeLineItemProps{
  experience:Experience,
}
const ExperienceTimeLineItem:React.FC<ExperienceTimeLineItemProps> = (props, key) => {
  const item = props.experience
  const duration = item.duration.start +"-"+item.duration.end;
  const place = item.place
  const experienceTitle = item.title
  const description = item.description
  return (
    <TimelineContent key={key}>
      <Typography className="experience_item_title">{experienceTitle} - {place}</Typography>
      <Typography variant='caption' className='experience_item_date'>{duration}</Typography>
      <Typography variant='body2' className="experience_item_description">{description}</Typography>
    </TimelineContent>
  )
}

export default ExperienceTimeLineItem