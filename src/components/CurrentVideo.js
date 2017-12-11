import React from 'react';
import '../App.css';

const CurrentVideo = (props) => (
  <div className="VideoList">
    <iframe height="460px" width="100%" src={"https://www.youtube.com/embed/" + props.video.id.videoId}></iframe>
  </div>
)

export default CurrentVideo;
