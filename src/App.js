import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import VideoList from './components/VideoList';
import CurrentVideo from './components/CurrentVideo';
import './App.css';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  render() {
    if (this.state.selectedVideo === null) {
      return (<p>Loading...</p>)
    }
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <CurrentVideo video={this.state.selectedVideo}/>
          </Col>
          <Col xs={6} md={4}>
            <VideoList 
              xs={12} 
              md={8} 
              videos={this.state.videos} 
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
          </Col>
        </Row>
      </Grid>
    );
  }

  componentDidMount(){
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=gaming&type=video&videoCaption=closedCaption&key=YOUR_API_KEY')
      .then((response) => {
        console.log(response.data.items)
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default App;
