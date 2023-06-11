import { Grid } from "@mui/material";
import React from "react";
import { achievements } from "../../../../utils/achievements";
import AchievementComponent from "./AchievementComponent";

const AchievementsComponent = () => {
  return (
    <Grid container>
      {Object.entries(achievements)
        .sort(([, achieveA], [, achieveB]) => {
          // Extract the date strings from the achievements
          const dateA = achieveA.date;
          const dateB = achieveB.date;

          // Convert the date strings to Date objects
          const dateObjectA = new Date(
            dateA.toLowerCase().toString()
          ).getTime();
          const dateObjectB = new Date(
            dateB.toLowerCase().toString()
          ).getTime();

          // Compare the date objects
          return dateObjectB - dateObjectA;
        })
        .map(([key, skill]) => (
          <AchievementComponent achieve={skill} key={key} />
        ))}
    </Grid>
  );
};

export default AchievementsComponent;
