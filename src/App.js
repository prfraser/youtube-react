import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import SearchBar from './components/SearchBar';
import CurrentVideo from './components/CurrentVideo';
import './App.css';

const API_KEY = '';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    searchTerm: ''
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  handleSearchChange = (searchTerm) => {
    this.setState({searchTerm})
    this.videoSearch(this.state.searchTerm)
  }

  render() {
    if (this.state.selectedVideo === null) {
      return (<p>Loading...</p>)
    }
    return (
      <Grid>
        <Row>
          <SearchBar searchTerm={this.state.searchTerm} onChange={this.handleSearchChange} />
        </Row>
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
    this.videoSearch('gaming');
  }
}

export default App;
