import React from "react";
import { publications } from "../../../utils/publications";

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
  return <>{sortedPublications.map((key, publication)=> <>{publication}</>)}</>;
};

export default PublicationsComponent;
