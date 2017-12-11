import React, { Component } from 'react';
import ListItem from './ListItem';
import '../App.css';

class VideoList extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="VideoList">
        {this.props.videos.map((video) =><ListItem 
                                          key={video.snippet.title}
                                          title={video.snippet.title}
                                          video={video}
                                          channelTitle={video.snippet.channelTitle}
                                          thumbnail={video.snippet.thumbnails.default}
                                          onVideoSelect={this.props.onVideoSelect}/>)}
      </div>
    );
  }
}

export default VideoList;
