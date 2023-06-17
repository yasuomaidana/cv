import React, { useRef, useState } from "react";
import "./PortfolioMediaGallery.scss";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import Player from "react-player";
import { PortFolioMedia } from "../../../../utils/portfolio";

export interface PortfolioMediaGallerProps {
  props: PortFolioMedia[] | undefined;
}

const PortfolioMediaGallery: React.FC<PortfolioMediaGallerProps> = (
  props: PortfolioMediaGallerProps
) => {
  const portfolioMedia = props.props;
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const imageGalleryRef = useRef<ImageGallery>(null);
  
  const handleGalleryPlay = () => {
    // Access and control the ImageGallery component using the ref
    if (imageGalleryRef.current) {
      imageGalleryRef.current.play(false);
      imageGalleryRef.current.pause(true);
    }
  };

  const handleGalleryPause = () => {
    // Access and control the ImageGallery component using the ref
    if (imageGalleryRef.current) {
      // imageGalleryRef.current.play(true);
    }
  };

  const handleVideoPlay = () => {
    setVideoPlaying(true);
    handleGalleryPlay();
  };

  const handleVideoPause = () => {
    setVideoPlaying(false);
    handleGalleryPause();
  };

  if (portfolioMedia === undefined) return null;
  const media_to_render: ReactImageGalleryItem[] = portfolioMedia.map(
    (portfolioItem, i) => {
      if ("youtube_id" in portfolioItem) {
        return {
          original: portfolioItem.youtube_id,
          thumbnail: portfolioItem.thumbnail,
          description: portfolioItem.description,

          renderItem: () => (
            <div className="video-wrapper">
              <Player
                url={portfolioItem.youtube_id}
                controls
                className="video-player"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                width={"100%"}
                height={"100%"}
              />
              <div className="image-gallery-description">
                {portfolioItem.description}
              </div>
            </div>
          ),
        };
      }
      return {
        original: portfolioItem.image_link,
        thumbnail: portfolioItem.image_link,
        description: portfolioItem.image_description,
        renderItem: () => (
          <div>
            <img
              className="image-gallery-thumbnail-image"
              src={portfolioItem.image_link}
              alt={portfolioItem.image_description}
            />
            <div className="image-gallery-description">
              {portfolioItem.image_description}
            </div>
          </div>
        ),
      };
    }
  );
  return (
    <ImageGallery
      ref={imageGalleryRef}
      items={media_to_render}
      showPlayButton={!isVideoPlaying}
      showFullscreenButton={false}
      slideDuration={1500}
      slideInterval={500}
      autoPlay={false}
      infinite={true}
      showNav={false}
      onThumbnailClick={(event, index)=> {
        imageGalleryRef.current?.slideToIndex(index); 
        imageGalleryRef.current?.play(false);
      imageGalleryRef.current?.pause(true);}}
    />
  );
};

export default PortfolioMediaGallery;
