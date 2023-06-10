import { Grid } from '@mui/material'
import React from 'react'
import { skills } from '../../../utils/skills'
import SkillComponent from './Skill/SkillComponent'

const Skills = () => {
  return (
    <Grid container>
      {Object.entries(skills).map(([key, skill]) => <SkillComponent coreSkill={skill} key={key}/>)}
    </Grid>
  )
}

export default Skills