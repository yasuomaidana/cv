import React from 'react'
import { Social } from '../../../utils/socials'

interface SocialComponentProp{
    social:Social;
    
}

export const SocialComponent:React.FC<SocialComponentProp> = (props) => {
    const social = props.social;
  return (
    <a href={social.link} target="_blank" rel="noopener noreferrer">{social.icon}</a>
  )
}
