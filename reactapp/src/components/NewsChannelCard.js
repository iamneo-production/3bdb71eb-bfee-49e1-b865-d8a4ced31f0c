import React from "react";
import "./NewsChannelCard.css";

const NewsChannelCard = ({ channelName, imageUrl, websiteUrl }) => {
  return (
    <div className="news-channel-card">
      <img src={imageUrl} alt={channelName} />
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        {channelName}
      </a>
    </div>
  );
};

export default NewsChannelCard;
