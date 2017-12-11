import React from 'react';
import '../App.css';

const ListItem = ({ video, thumbnail, title, channelTitle, onVideoSelect }) => (
  <div className="VideoList" onClick={() => onVideoSelect(video)}>
    <img src={thumbnail.url} alt=""/>
    <p>{title}</p>
    <p>{channelTitle}</p>
  </div>
)

export default ListItem;
