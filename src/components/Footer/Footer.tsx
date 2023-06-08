import { Typography } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='left'>
        <Typography className='footer_name'>Yasuo Maidana</Typography>
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