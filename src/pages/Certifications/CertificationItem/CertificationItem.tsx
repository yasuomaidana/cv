import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  Grow,
  IconButton,
  IconButtonProps,
  Typography,
  styled,
} from "@mui/material";

import { MainCertification } from "../../../utils/certifications";
import { useState } from "react";
import Timeline from "@mui/lab/Timeline/Timeline";
import TimelineItem from "@mui/lab/TimelineItem/TimelineItem";
import TimelineDot from "@mui/lab/TimelineDot/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator/TimelineSeparator";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./CertificationItem.scss"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent/TimelineOppositeContent";

interface CertificationItemProps {
  certificate: MainCertification;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginRight: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CertificationItem: React.FC<CertificationItemProps> = (props, key) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderCertificate = (
    certificate: MainCertification,
    content: JSX.Element
  ) => (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            alt={certificate.title}
            src={certificate.icon}
            sx={{ width: 80, height: 80 }}
          />
        }
        title={
          <Typography variant="h6" fontStyle={"italic"} fontWeight={"bold"}>
            {certificate.title}
          </Typography>
        }
        subheader={"Issued " + certificate.date}
      />
      {content}
    </Card>
  );
  const renderSimpleCertificate = (certificate: MainCertification) =>
    renderCertificate(
      certificate,
      <CardActions>
        <Button
          component="a"
          style={{ marginLeft: "auto" }}
          size="small"
          color="secondary"
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          See certificate
        </Button>
      </CardActions>
    );

  const renderWithChildCertificate = (certificate: MainCertification) =>
    renderCertificate(
      certificate,
      <>
        <CardActions disableSpacing>
          <Typography variant="subtitle2">Certificates</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Button
          component="a"
          style={{ marginLeft: "auto" }}
          size="small"
          color="secondary"
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          See certificate
        </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Timeline className="certification_timeline"
    >
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>
          </CardContent>
        </Collapse>
      </>
    );

  return (
    <Grid item xs={12} md={6}>
      <Grow in timeout={1000}>
        {props.certificate.child_certifications
          ? renderWithChildCertificate(props.certificate)
          : renderSimpleCertificate(props.certificate)}
      </Grow>
    </Grid>
  );
};

export default CertificationItem;
