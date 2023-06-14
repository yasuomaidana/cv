import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardHeader,
  Grid,
  Grow,
  Typography,
} from "@mui/material";

import { MainCertification } from "../../../utils/certifications";
interface CertificationItemProps {
  certificate: MainCertification;
}
const CertificationItem: React.FC<CertificationItemProps> = (props, key) => {
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

  return (
    <Grid item xs={12} md={6}>
      <Grow in timeout={1000}>
        {props.certificate.child_certifications ? (
          <Card>Childrens</Card>
        ) : (
          renderSimpleCertificate(props.certificate)
        )}
      </Grow>
    </Grid>
  );
};

export default CertificationItem;
