import React from "react";
import { Link, Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import "./profile.scss";
import ProfileInfo from "./ProfileInfo";
import ContactsIcon from '@mui/icons-material/Contacts';

const Profile = () => {
  const profile_info = [
    <ProfileInfo key={1} title="Name" content={<>Yasuo Ignacio Maidana Perez</>} />,
    <ProfileInfo key={2} title="Birthday" content={<>06 June 1996</>} />,
    <ProfileInfo key={3} title="Major" content={<>Mechatronics Engineering</>} />,
    <ProfileInfo  key={4} title="Email" content={<Link href="mailto:yasuomaidana@gmail.com">yasuomaidana@gmail</Link>}/> ];
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Yasuo Maidana</Typography>
        <Typography className="title">Master of Engineering (M1)</Typography>
      </div>
      <figure className="profile_image">
        <img
          src={require("../../assets/images/profile picture.jpg")}
          alt="Profile"
        />
      </figure>

      <div className="profile_information">
        <TimeLine
          title="Yasuo Ignacio Maidana Pérez"
          children={profile_info}
          icon={<ContactsIcon />}
        ></TimeLine>
      </div>
    </div>
  );
};

export default Profile;
