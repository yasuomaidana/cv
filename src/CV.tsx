import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import Player  from 'react-player';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


// .image-gallery-slides {
//   line-height: 0;
//   overflow: hidden;
//   position: relative;
//   white-space: nowrap;
//   height: 400px;
//   text-align: center;
// }
const CV = () => {
  // Sample project videos
  const projectVideos = [
    {
      url: 'https://www.youtube.com/watch?v=k2dnUS41NQs',
      title: 'Project 1',
    },
    {
      url: 'https://www.youtube.com/watch?v=k2dnUS41NQs',
      title: 'Project 2',
    },
  ];

  // Sample project images
  const projectImages: ReactImageGalleryItem[] = [
    {
      original: 'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg',
      thumbnail: 'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg',
      description: 'Project 1',
    },
    {
      original: 'https://i3.ytimg.com/vi/k2dnUS41NQs/maxresdefault.jpg',
      thumbnail: 'https://i3.ytimg.com/vi/k2dnUS41NQs/maxresdefault.jpg',
      description: 'Project 2  Description',
      renderItem: () => (
        <div className="video-wrapper">
          <Player url="https://www.youtube.com/watch?v=k2dnUS41NQs" controls  className="video-player"/>
        </div>
      ),
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
      <Typography variant="h4">Your Name</Typography>
      <Typography variant="subtitle1">
        Contact Information: [Your Email Address] | [Phone Number]
      </Typography>

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
        <ImageGallery  items={projectImages} showPlayButton={false} showFullscreenButton={false} />
      </div>
      <ImageGallery  items={projectImages} showPlayButton={false} showFullscreenButton={false} renderItem={(item) => (
         <div className="image-gallery-image">
          <img src={item.thumbnail} alt="rand"/>
          <div className="image-gallery-description">{item.description}</div>
         </div>
      )
      }/>
    </div>
  );
};

export default CV;
