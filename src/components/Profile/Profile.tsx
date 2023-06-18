import React from "react";
import { Link, Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import "./profile.scss";
import ProfileInfo from "./ProfileInfo";
import ContactsIcon from "@mui/icons-material/Contacts";
import { contact } from "../../utils/contact";
const Profile = () => {
  const profile_info = [
    <ProfileInfo key={1} title="Name" content={<>{contact.full_name}</>} />,
    <ProfileInfo key={2} title="Birthday" content={<>{contact.birthday}</>} />,
    <ProfileInfo key={3} title="Major" content={<>{contact.major}</>} />,
    <ProfileInfo
      key={4}
      title="Email"
      content={
        <Link href={"mailto:" + contact.email}>
          {contact.email.replace(/@[^@]+$/, "")}
        </Link>
      }
    />,
  ];
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{contact.shortest_name}</Typography>
        <Typography className="title">
          {contact.job.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== contact.job.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Typography>
      </div>
      <div className="profile_image_frame">
        <figure className="profile_image">
          <img
            src={require("../../assets/images/profile picture.jpg")}
            alt="Profile"
          />
        </figure>
      </div>
      <div className="profile_information">
        <TimeLine
          title={contact.full_name}
          children={profile_info}
          icon={<ContactsIcon />}
        ></TimeLine>
      </div>
    </div>
  );
};

export default Profile;
