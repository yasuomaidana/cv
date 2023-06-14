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
interface CertificationItemProps{
    certificate:MainCertification;
}
const CertificationItem:React.FC<CertificationItemProps> = (props,key) => {
  const renderSimpleCertificate = (certificate: MainCertification) => (
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
    </Card>
  );

  return (
    <Grid item xs={12} md={6}>
      <Grow in timeout={1000}>
        {renderSimpleCertificate(props.certificate)}
      </Grow>
    </Grid>
  );
};

export default CertificationItem;
