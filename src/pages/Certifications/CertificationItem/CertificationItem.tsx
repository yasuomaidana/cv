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

import {
  Certification,
  MainCertification,
} from "../../../utils/certifications";
import { useState } from "react";
import Timeline from "@mui/lab/Timeline/Timeline";
import TimelineItem from "@mui/lab/TimelineItem/TimelineItem";
import TimelineDot from "@mui/lab/TimelineDot/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent/TimelineContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator/TimelineSeparator";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./CertificationItem.scss";
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
    <Card className={props.certificate.child_certifications ? "withChildren":""}>
      <CardHeader
        avatar={
          <Avatar
            alt={certificate.title}
            src={certificate.icon}
            sx={{
              width: { sm: 60, md: 40 },
              height: { sm: 60, md: 40 },
            }}
          />
        }
        title={
          <Typography
            variant="h6"
            fontStyle={"italic"}
            fontWeight={"bold"}
            fontSize={{ xs: "small", sm: "medium" }}
          >
            {certificate.title}
          </Typography>
        }
        subheader={"Issued " + certificate.date}
        sx={{ overflow: "clip", textOverflow: "ellipsis"}}
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
          className="button_certificate"
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

  const renderChildItem = (child: Certification, key: number) => (
    <TimelineItem key={key}>
      <TimelineOppositeContent color="textSecondary">
        {child.date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent>
        <Typography
          className="children_title"
          variant="h6"
          fontStyle={"italic"}
          fontWeight={"bold"}
          fontSize={{ xs: "smaller", sm: "small" }}
        >
          {child.title}
        </Typography>
        <Button
          component="a"
          size="small"
          color="secondary"
          href={child.url}
          target="_blank"
          rel="noopener noreferrer"
          className="children_see button_certificate"
        >
          See certificate
        </Button>
      </TimelineContent>
    </TimelineItem>
  );

  const renderWithChildCertificate = (certificate: MainCertification) =>
    renderCertificate(
      certificate,
      <>
        <CardActions disableSpacing>
          <Typography
            component={"div"}
            variant="subtitle2"
            className="show_certificates_text"
          >
            Certificates
          </Typography>
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
            className="button_certificate"
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
            <Timeline className="certification_timeline">
              {certificate.child_certifications?.map((child, key) =>
                renderChildItem(child, key)
              )}
            </Timeline>
          </CardContent>
        </Collapse>
      </>
    );

  return (
    <Grid item sm={expanded? 12:6} xs={12} lg={expanded? 6:4}>
      <Grow in timeout={1000}>
        {props.certificate.child_certifications
          ? renderWithChildCertificate(props.certificate)
          : renderSimpleCertificate(props.certificate)}
      </Grow>
    </Grid>
  );
};

export default CertificationItem;
