import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'
import { Achievement } from '../../../utils/achievements';
import "./AchievementComponent.scss"
interface AcvhieveComponentProps {
    achieve: Achievement;
}

const image_builder = (achive:Achievement) => {
    const width = 60;
    const height = 60;
    if (typeof achive.achievement_image === 'string'){
        return(<Avatar sx={{ width: width, height: height }} src={achive.achievement_image} className="achievement_image"/>)
    }
    return <Avatar sx={{ width: width, height: height }} className="achievement_image">{achive.achievement_image}</Avatar>
}

const AchievementComponent:React.FC<AcvhieveComponentProps> = (prompts,key) => {
    const achieve = prompts.achieve
    return (

        <Grid key={key} item xs={12} md = {4} alignItems={'center'} className='achievement'>
            {image_builder(achieve)}
            <Typography className='achievemnt_title' variant='body2'>{achieve.title}</Typography>
            <Typography className='achievemnt_institution' variant='body2'>{achieve.institution}</Typography>
            <Typography className='achievemnt_date' variant='body2'>{achieve.date}</Typography>
        </Grid>
      )
}

export default AchievementComponent