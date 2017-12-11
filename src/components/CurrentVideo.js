import React from 'react';
import '../App.css';

const CurrentVideo = (props) => (
  <div className="VideoList">
    <iframe height="360px" width="640px" src={"https://www.youtube.com/embed/" + props.video.id.videoId}></iframe>
  </div>
)

export default CurrentVideo;
