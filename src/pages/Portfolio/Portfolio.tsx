import React, { useState } from 'react'
import CV from '../../CV'
import BoxWithTitle from '../../components/BoxWithTitle/BoxWithTitle'
import { Grid, Tab, Tabs } from '@mui/material';
import { PortFolioItem, PortfolioTag, portfolioItems } from '../../utils/portfolio';
import PortfolioItemComponent from './PortfolioItemComponent';
import "./Portfolio.scss"



const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");

  const renderTagFromTab = (tab:string, key:number) => <Tab key={key} label = {tab} value  = {tab} className={tabValue === tab ? 'custom_item active': "custom_item"}/>
  
  const renderAll = (items:PortFolioItem[]) =>{
    
  }
  const portfolioContainer = (selectedTab:string = "All") => 
  <Grid item>
    <Tabs value={selectedTab} indicatorColor='secondary' 
    className='custom_tabs' onChange={(event,newValue)=> setTabValue(newValue)} centered>
      <Tab label = 'All' value  = "All" className={tabValue === 'All' ? 'custom_item active': "custom_item"}/>
      { Object.values(PortfolioTag).map((tag, index) => renderTagFromTab(tag, index))}
    </Tabs>
    <PortfolioItemComponent/>
  </Grid>;   
  
  return (
    <BoxWithTitle title='Portfolio' content={portfolioContainer(tabValue)}/>
  )
}

export default Portfolio