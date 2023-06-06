import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import  Player from 'react-player';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CV.scss';
import YasuoContact from './YasuoContact/YasuoContact';

const CV = () => {
  // Sample project videos
  const projectVideos = [
    {
      url: 'https://www.youtube.com/watch?v=HjTVGrmYySE',
      title: 'Pick and Place Machine',
    },
    {
      url: 'https://youtu.be/UvoJGhWkylA',
      title: 'Infrared communication',
    },
  ];

  // Sample project images
  const projectImages = [
    {
      original: 'path_to_image_1.jpg',
      thumbnail: 'path_to_image_1_thumbnail.jpg',
      description: 'Project 1',
    },
    {
      original: 'path_to_image_2.jpg',
      thumbnail: 'path_to_image_2_thumbnail.jpg',
      description: 'Project 2',
    },
  ];

  // Sample LinkedIn certifications
  const linkedinCertifications = [
    {
      title: 'Certification 1',
      authority: 'LinkedIn',
      date: 'May 2022',
    },
    {
      title: 'Certification 2',
      authority: 'LinkedIn',
      date: 'July 2022',
    },
  ];

  return (
    <div className="cv-container">
      <YasuoContact/>

      <div className="section">
        <Typography variant="h5">Summary</Typography>
        <Typography variant="body1">
          A brief summary highlighting your key skills, experience, and career objectives.
        </Typography>
      </div>

      <div className="section">
        <Typography variant="h5">Education</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Degree" secondary="[Degree Name]" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Institution" secondary="[University/College Name]" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Year" secondary="[Graduation Year]" />
          </ListItem>
        </List>
      </div>

      <div className="section">
        <Typography variant="h5">Experience</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Job Title"
              secondary={
                <>
                  <Typography variant="body2" component="span">
                    Company/Organization Name
                    <br />
                    Date Range
                  </Typography>
                  <ul>
                    <li>Responsibility 1</li>
                    <li>Responsibility 2</li>
                    <li>Responsibility 3</li>
                  </ul>
                </>
              }
            />
          </ListItem>
          {/* Repeat this ListItem for each job experience */}
        </List>
      </div>

      <div className="section">
        <Typography variant="h5">Skills</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Skill 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Skill 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Skill 3" />
          </ListItem>
          {/* Add more skills as needed */}
        </List>
      </div>

      <div className="section">
        <Typography variant="h5">Achievements</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Achievement 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Achievement 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Achievement 3" />
          </ListItem>
          {/* Add more achievements as needed */}
        </List>
      </div>

      <div className="section">
        <Typography variant="h5">Certifications</Typography>
        <List>
          {linkedinCertifications.map((certification) => (
            <ListItem key={certification.title}>
              <ListItemText
                primary={certification.title}
                secondary={
                  <>
                    <Typography variant="body2" component="span">
                      {certification.authority}
                      <br />
                      {certification.date}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>

      <div className="section">
        <Typography variant="h5">Project Videos</Typography>
        {projectVideos.map((video) => (
          <Player key={video.url} url={video.url} controls />
        ))}
      </div>

      <div className="section">
        <Typography variant="h5">Project Images</Typography>
        <ImageGallery items={projectImages} showPlayButton={false} showFullscreenButton={false} />
      </div>
    </div>
  );
};

export default CV;
