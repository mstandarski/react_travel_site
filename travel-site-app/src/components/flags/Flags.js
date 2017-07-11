import React, { Component } from 'react';
import './Flags.css';
import {Col} from 'react-bootstrap';

class Flags extends Component {
  render() {
    return (
      <div id="flag">

        <Col sm={6} md={3}><br/>{this.props.country}<br/><img id="flagicon" src={this.props.photo} alt="this is a flag"></img><br/><a href={this.props.website} target="_blank"> {this.props.description}</a></Col>
      </div>
    );
  }
}

export default Flags;