import React, { Component } from 'react';
import './App.css';

import Flags from "./components/flags/Flags";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navigation from "./components/navigation/Navigation";
import TravelTable from "./components/traveltable/TravelTable";
import {Grid, Row} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navigation />
          <Hero />
          <Grid>
            <Row className="show-grid">
              <Flags country="Spain" photo="/assets/images/spain_flag.svg" description="Spain Tourism Site" website="http://www.spain.info/en_US/"/>
              <Flags country="Chile" photo="/assets/images/chile_flag.svg" description="Chile Tourism Site" website="http://chile.travel/en/"/>
              <Flags country="Italy" photo="/assets/images/italy_flag.svg" description="Italy Tourism Site" website="www.italia.it/en/home.html"/>
              <Flags country="Aruba" photo="/assets/images/aruba_flag.svg" description="Aruba Tourism Site" website="www.arubatourism.com/"/>
            </Row>
          </Grid>
          <TravelTable />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
