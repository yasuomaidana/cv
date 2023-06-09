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
import { md } from "../../utils/breakpoints";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const [selectedPortfolio, setselectedPortfolio] =
    useState<PortFolioItem | null>(null);

  const sortByThumbnailPriority = (a:PortFolioItem, b:PortFolioItem) => {
    // Check if 'thumbnail' is a string for both objects
    const isStringA = typeof a.thumbnail === "string";
    const isStringB = typeof b.thumbnail === "string";
  
    // Sort by priority: string value comes first
    if (isStringA && !isStringB) {
      return -1;
    } else if (!isStringA && isStringB) {
      return 1;
    } else {
      return 0; // Maintain the original order if both are strings or elements
    }
  };
  const handleProjectDialogToggle = () => {
    setProjectDialogOpen((prevOpen) => !prevOpen);
  };

  const handleSelectedPortfolio = (portfolio: PortFolioItem) => {
    setselectedPortfolio(portfolio);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(screenWidth <= md); // Adjust the screen size threshold as needed
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
  const renderItem = (item: PortFolioItem, key: number) => (
    <PortfolioItemComponent
      item={item}
      key={key}
      handleToggle={handleProjectDialogToggle}
      handlePortfolioSelection={handleSelectedPortfolio}
    />
  );
  const renderAll = () => {

    return portfolioItems.sort(sortByThumbnailPriority).map((item, key) => renderItem(item, key));
  };

  const renderByTag = (tag: string) => {
    return portfolioItems
    .sort(sortByThumbnailPriority)
      .filter((item, index) =>
        item.tags
          .map((tagi) => tagi.valueOf().toLowerCase())
          .includes(tag.toLowerCase())
      )
      .map((item, key) => renderItem(item, key));
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
          {tabValue.toString() === "All"
            ? renderAll()
            : renderByTag(tabValue.toString())}
        </Grid>
      </Grid>
      {selectedPortfolio && (
        <ProjectDialog
          open={projectDialogOpen}
          item={selectedPortfolio}
          handle_toggle={handleProjectDialogToggle}
        />
      )}
    </>
  );

  return (
    <BoxWithTitle title="Portfolio" content={portfolioContainer(tabValue)} />
  );
};

export default Portfolio;
