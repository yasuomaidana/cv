import React from 'react'
interface ProfileInfoProps{
    title:string;
    content:string;
}
const ProfileInfo:React.FC<ProfileInfoProps> = (ProfileInfoProps) => {
  return (
    <><b>{ProfileInfoProps.title}</b>: {ProfileInfoProps.content}</>
  )
}

export default ProfileInfo