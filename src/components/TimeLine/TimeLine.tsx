import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import "./TimeLine.scss";

interface ItemProps {
  content: React.ReactElement;
}
interface TimeLineProps {
  title: string;
  icon: React.ReactElement<SvgIconComponent>;
  children: JSX.Element[];
}
const TimeLine: React.FC<TimeLineProps> = (TimeLineProps) => {
  return (
    <Timeline className="timeline">
      {/*  */}
      <TimelineItem className="first">
        <TimelineSeparator>
          <TimelineDot className="dot_header">{TimeLineProps.icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header">
            {TimeLineProps.title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {/*  */}
      {TimeLineProps.children.map((kid, index)=>(<Kid content={kid} key={index}></Kid>))}
      
    </Timeline>
  );
};

export const CustomTimeLineSeparator = () => {
  return (
    <TimelineSeparator className="separator_padding">
      <TimelineDot className="dot_item" />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export const Kid: React.FC<ItemProps> = (ItemProps) => {
  return (
    <TimelineItem>
      <CustomTimeLineSeparator />
      <TimelineContent>{ItemProps.content}</TimelineContent>
    </TimelineItem>
  );
};

export default TimeLine;
