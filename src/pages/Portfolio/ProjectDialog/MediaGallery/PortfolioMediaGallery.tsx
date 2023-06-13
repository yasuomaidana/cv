import React from "react";
import "./PortfolioMediaGallery.scss";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import Player from "react-player";
import { PortFolioMedia } from "../../../../utils/portfolio";

export interface PortfolioMediaGallerProps{
    props:PortFolioMedia[] | undefined;
}

const PortfolioMediaGallery:React.FC<PortfolioMediaGallerProps> = (props:PortfolioMediaGallerProps) => {
    const portfolioMedia = props.props;
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
              <Player url={portfolioItem.youtube_id} controls  className="video-player"/>
              <div className="image-gallery-description">{portfolioItem.description}</div>
            </div>
          )
        };
      }
      return {
        original: portfolioItem.image_link,
        thumbnail: portfolioItem.image_link,
        description: portfolioItem.image_description,
        renderItem: () => 
        <div>
            <img className="image-gallery-thumbnail-image" src={portfolioItem.image_link} alt={portfolioItem.image_description}/>
            <div className="image-gallery-description">{portfolioItem.image_description}</div>
        </div>
      };
    }
  );
  return <ImageGallery  items={media_to_render} showPlayButton={true} showFullscreenButton={false} slideDuration={5000} slideInterval={500} autoPlay={true} infinite={true} showNav={false}/>;
};

export default PortfolioMediaGallery;
