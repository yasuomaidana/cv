import { Grid, Typography } from '@mui/material';
import React from 'react';
import { CoreSkill } from '../../../../utils/skills';
import "./SkillComponent.scss"

interface SkillComponentProps {
    coreSkill: CoreSkill;
}
const SkillComponent:React.FC<SkillComponentProps> = (coreSkill,key) => {
    const skill = coreSkill.coreSkill
  return (
    
    <Grid key={key} item xs={12} md = {4} justifyItems={'space-around'}>
        <div className='skill'>
            {skill.icon}
            <Typography className='skill_title' variant='h6'>{skill.title}</Typography>
            <Typography className='skill_description' variant='body2'>
            <ul>
                {Object.entries(skill.subSkills).map(([key,subSkill]) => <li>{subSkill.title}</li>)}
            </ul>
            </Typography>
        </div>
    </Grid>
  )
}

export default SkillComponent