import { Grid, Typography } from '@mui/material'
import React from 'react'

interface BoxWithTitleProps{
    title:string;
    content: JSX.Element
}
const BoxWithTitle:React.FC<BoxWithTitleProps> = (props) => {
    const title = props.title;
  return (
    <Grid container className="section">
        <div className=" mb_30">
          <Grid item className="section_title">
            <span></span>
            <Typography variant="h6" className="text">
              {title}
            </Typography>
          </Grid>
        </div>
        <Grid item xs={12}>
          <Typography variant="body2" component={"div"} className={"about_me_text"}>
           {props.content}
          </Typography>
        </Grid>
      </Grid>
  )
}

export default BoxWithTitle