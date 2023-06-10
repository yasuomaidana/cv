import { Grid, Icon, Typography } from '@mui/material';
import React from 'react';
import { CoreSkill } from '../../../../utils/skills';


interface SkillComponentProps {
    coreSkill: CoreSkill;
}
const SkillComponent:React.FC<SkillComponentProps> = (coreSkill,key) => {
    const skill = coreSkill.coreSkill
  return (
    
    <Grid key={key} item xs={12} md = {4}>
        <div className='skill'>
            <Icon className='skill_icon'>{skill.icon}</Icon>
            <Typography variant='h6'>{skill.title}</Typography>
            <Typography variant='body2'>
            <ul>
                {Object.entries(skill.subSkills).map(([key,subSkill]) => <li>{subSkill.title}</li>)}
            </ul>
            </Typography>
        </div>
    </Grid>
  )
}

export default SkillComponent