import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../App.css';

const ListItem = ({ video, thumbnail, title, channelTitle, onVideoSelect }) => (
  <Row className="ListItem" onClick={() => onVideoSelect(video)}>
    <Col md={4}>
      <img src={thumbnail.url} alt=""/>
    </Col>
    <Col md={8}>
      <p>{title}</p>
      <p>{channelTitle}</p>
    </Col>
  </Row>
)

export default ListItem;
