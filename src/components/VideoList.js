import React from 'react';
import ListItem from './ListItem';
import '../App.css';

const VideoList = ({ videos, onVideoSelect }) => {

  const listItem = videos.map((video) => {
    return ( 
      <ListItem key={video.snippet.title} title={video.snippet.title}
        video={video}
        channelTitle={video.snippet.channelTitle}
        thumbnail={video.snippet.thumbnails.default}
        onVideoSelect={onVideoSelect}/>
      )
  });
  
  return (
    <div className="VideoList">
      {listItem}
    </div>
  )
};

export default VideoList;
