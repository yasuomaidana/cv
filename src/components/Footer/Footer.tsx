import { Typography } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import "./Footer.scss"
import {contact} from "../../utils/contact"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='left'>
        <Typography className='footer_name'>
          {contact.shortest_name}
          <br/>
          <a className='mail' href={"mailto:"+contact.email}>{contact.email}</a>
        </Typography>
      </div>
      <div className='right'>
        <Typography className='footer_copyright'>
          Designed and Developed by <a href='/'>Y.M.</a>
          <br/>
          Source code<a href='https://github.com/yasuomaidana/cv' target="_blank" rel="noopener noreferrer"><CodeIcon/>.</a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer