import React, { Component } from 'react';
import './scss/main.scss';
import './js/includes/bootstrap';
import Topbar from './js/components/topBar';
import Jumbotron from './js/components/jumbotron';
import Aboutme from './js/components/aboutme';
import Skills from './js/components/skills';
import Training from './js/components/training';
import Experiences from './js/components/experiences';
import Portfolio from './js/components/portfolio';
import Contact from './js/components/contact';



class App extends Component {
  render() {
    return (
      <div className="container-fluid cm-c">
        <div className="appContainer">
          <div className="main-header">
            <Topbar />
            <Jumbotron />
          </div>
          <Aboutme />
          <Skills />
          <Training />
          <Experiences />
          <Portfolio />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
