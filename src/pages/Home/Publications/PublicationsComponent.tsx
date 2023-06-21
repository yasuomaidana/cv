import React from "react";
import { publications } from "../../../utils/publications";
import { Typography } from "@mui/material";

const PublicationsComponent = () => {
  const sortedPublications = Object.entries(publications).sort(
    ([, achieveA], [, achieveB]) => {
      
      const dateA = achieveA.date;
      const dateB = achieveB.date;

      const dateObjectA = new Date(dateA.toLowerCase().toString()).getTime();
      const dateObjectB = new Date(dateB.toLowerCase().toString()).getTime();
      
      return dateObjectB - dateObjectA;
    }
  );
  return <>{sortedPublications.map(([key, publication])=> 
  
    <Typography variant="subtitle1" key={key}>
        {publication.title}&nbsp;
        <Typography variant="subtitle2" component="span">
            <strong>{publication.journal}</strong>
            </Typography>&nbsp;
            <Typography component="span">{publication.date}</Typography>&nbsp;
            {publication.url && <a href={publication.url}>[Read]</a>}
    </Typography>
  )}</>;
};

export default PublicationsComponent;
