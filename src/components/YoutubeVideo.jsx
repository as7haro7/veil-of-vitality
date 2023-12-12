import React from 'react';

const YoutubeVideo = ({ videoId }) => {
  return (
    <div className="embed-responsive embed-responsive-16by9" style={{ maxWidth: '1080px', margin: 'auto', minWidth: '640px' }}>
      <iframe
        className="embed-responsive-item"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allowFullScreen
        style={{ width: '100%', height: '100%' , minHeight:'400px'}}
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
