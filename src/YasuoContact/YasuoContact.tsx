import React from "react";
import { Typography } from "@mui/material";
import ContactMailIcon from '@mui/icons-material/ContactMail';

function YasuoContact() {
  return (
    <>
      <Typography variant="h4">Yasuo Ignacio Maidana Pérez</Typography>
      <Typography variant="subtitle1">
        Contact Information: <a href="mailto: yasuomaidana@gmail.com">yasuomaidana@gmail.com <ContactMailIcon/></a>{/* | [Phone Number] */}
      </Typography>
    </>
  );
}

export default YasuoContact;
