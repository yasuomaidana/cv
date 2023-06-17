import React from 'react'
import BoxWithTitle from '../../components/BoxWithTitle/BoxWithTitle'
import { Grid } from '@mui/material'
import CertificationItem from './CertificationItem/CertificationItem'
import { certifications } from '../../utils/certifications'
const Certifications = () => {
  const certifications_container = () =>
  <Grid container spacing={2}>
    
    {certifications.sort((a, b) => {
  // Place MainCertifications with child_certifications first
  if (a.child_certifications && !b.child_certifications) {
    return -1;
  } else if (!a.child_certifications && b.child_certifications) {
    return 1;
  }

  // Sort by date in descending order
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}).map((certificate,key)=><CertificationItem certificate={certificate} key={key}/>)}
    
  </Grid>
  return (
    <BoxWithTitle title={'Certifications'} content={certifications_container()} ></BoxWithTitle>
  )
}

export default Certifications