import React from 'react'
import { Social } from '../../../utils/socials'

interface SocialComponentProp{
    social:Social;
    handler:()=>void;
}

export const SocialComponent:React.FC<SocialComponentProp> = (props) => {
    const social = props.social;
  return (
    <a href={social.link} target="_blank" rel="noopener noreferrer" onClick={props.handler}>{social.icon}</a>
  )
}
