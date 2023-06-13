import React, { useEffect, useState } from "react";
// import CV from "../../CV";
import BoxWithTitle from "../../components/BoxWithTitle/BoxWithTitle";
import { Grid, Tab, Tabs } from "@mui/material";
import {
  PortFolioItem,
  PortfolioTag,
  portfolioItems,
} from "../../utils/portfolio";
import PortfolioItemComponent from "./Item/PortfolioItemComponent";
import "./Portfolio.scss";
import ProjectDialog from "./ProjectDialog/ProjectDialog";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const [selectedPortfolio, setselectedPortfolio] = useState<PortFolioItem|null>(null);

  const handleProjectDialogToggle = () => {
    setProjectDialogOpen((prevOpen) => !prevOpen);
  };


  const handleSelectedPortfolio = (portfolio:PortFolioItem) =>{
    setselectedPortfolio(portfolio);
  }

  
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= 991); // Adjust the screen size threshold as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  

  const renderTagFromTab = (tab: string, key: number) => (
    <Tab
      key={key}
      label={tab}
      value={tab}
      className={tabValue === tab ? "custom_item active" : "custom_item"}
    />
  );

  const renderAll = () => {
    return portfolioItems.map((item, key) => (
      <PortfolioItemComponent item={item} key={key} handleToggle={handleProjectDialogToggle} handlePortfolioSelection={handleSelectedPortfolio}/>
    ))
  };
  const portfolioContainer = (selectedTab: string = "All") => (
    <>
      <Grid item xs={12} mb={3}>
        <Tabs
          value={selectedTab}
          indicatorColor="secondary"
          {...(isSmallScreen ? { variant: "scrollable" } : { centered: true })}
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "custom_item active" : "custom_item"
            }
          />
          {Object.values(PortfolioTag).map((tag, index) =>
            renderTagFromTab(tag, index)
          )}
        </Tabs>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {tabValue.toString() === "All" && renderAll()}
        </Grid>
      </Grid>
      {selectedPortfolio && <ProjectDialog open={projectDialogOpen} item={selectedPortfolio} handle_toggle={handleProjectDialogToggle}/>}
    </>
  );

  return (
    <BoxWithTitle title="Portfolio" content={portfolioContainer(tabValue)} />
  );
};

export default Portfolio;
