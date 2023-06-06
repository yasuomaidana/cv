import React from 'react'
import { Typography } from '@mui/material';
import TimeLine from '../TimeLine/TimeLine';
import './profile.scss'

const Profile = () => {
  return (
    <div className='profile container_shadow'>
        <div className='profile_name'>
          <Typography className='name'>Maidana Perez Yasuo Ignacio</Typography>
          <Typography className='title'>Master of Engineering (M1)</Typography>
        </div>
        <figure className='profile_image'>
          <img src="./assets/images/profile picture.jpg" alt="Profile"/>
        </figure>

        <div className='profile_information'>
          Insert <TimeLine></TimeLine>

        </div>
    </div>
  )
}

export default Profile