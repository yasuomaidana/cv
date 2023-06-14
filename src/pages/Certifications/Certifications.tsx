import React from 'react'
import BoxWithTitle from '../../components/BoxWithTitle/BoxWithTitle'
import { Grid } from '@mui/material'
import CertificationItem from './CertificationItem/CertificationItem'
import { certifications } from '../../utils/certifications'
const Certifications = () => {
  const certifications_container = () =>
  <Grid container spacing={2}>
    
    {certifications.map((certificate,key)=><CertificationItem certificate={certificate} key={key}/>)}
    
  </Grid>
  return (
    <BoxWithTitle title={'Certifications'} content={certifications_container()} ></BoxWithTitle>
  )
}

export default Certifications