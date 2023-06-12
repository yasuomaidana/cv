import { Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Typography } from '@mui/material'
import React from 'react'
import { PortFolioItem } from '../../utils/portfolio'

interface PortfolioItemComponentProps{
  item:PortFolioItem
}

const PortfolioItemComponent:React.FC<PortfolioItemComponentProps> = (props, key) => {
  const item = props.item;
  return (
    <Grid item key={key} md={4}>
        <Grow in timeout={1000}>
        <Card onClick={()=>console.log(key)}>
          <CardActionArea>
            <CardMedia className='portfolio_card_image' image={item.portfolio_image} title={item.title}/>
            <CardContent>
              <Typography className='portfolio_title'>{item.title}</Typography>
              <Typography variant="body2" className='portfolio_description'>{item.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Grow>
    </Grid>
  )
}

export default PortfolioItemComponent