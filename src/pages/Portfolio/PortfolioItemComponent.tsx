import { Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Typography } from '@mui/material'
import React from 'react'
import { PortFolioItem } from '../../utils/portfolio'
import { Code, SvgIconComponent } from '@mui/icons-material'

interface PortfolioItemComponentProps{
  item:PortFolioItem;
  handleToggle: () => void;
  handlePortfolioSelection: (selectedPortfolio:PortFolioItem) => void;

}



const renderMedia = (media_item: string | React.ReactElement<SvgIconComponent>, title:string = "") => 
typeof(media_item) === "string"? 
  <CardMedia className='portfolio_card_image' component={"img"} image={media_item} sx={{ height: 140}}/>:
  <CardMedia component={Code} sx={{ height: 140 , margin: 'auto', fontSize: '5rem'}} />
const PortfolioItemComponent:React.FC<PortfolioItemComponentProps> = (props,  key) => {
  const item = props.item;
  const handleClick = (props:PortfolioItemComponentProps) => {
    props.handleToggle();
    props.handlePortfolioSelection(item);
  }
  return (
      <Grid item key={key} md={4}>
        <Grow in timeout={1000}>
        <Card onClick={()=> handleClick(props)}>
          <CardActionArea>
            {renderMedia(item.thumbnail)}
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