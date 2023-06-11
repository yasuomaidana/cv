import { Grid } from '@mui/material';
import React from 'react';
import { achievements } from '../../../../utils/achievements';
import AchievementComponent from './AchievementComponent';

const AchievementsComponent = () => {
  return (
    <Grid container>
      {Object.entries(achievements).map(([key, skill]) => <AchievementComponent achieve={skill} key={key}/>)}
    </Grid>
  )
}

export default AchievementsComponent