import React, { Component } from  'react';

class Skills extends Component {
    render() {
      return (
        <div className="container-fluid mt-10 skills-c" id="kompetens">
          <div className="row mt-3">
          <div className="col-md-6 col-sm-12 col-xs-12 t-skills">
            <h2>Technical Skills</h2>
            <h6>CSS3 / SASS</h6>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: 80 + '%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
           </div>
           <h6>HTML5</h6>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: 85 + '%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
           </div>
           <h6>JavaScript</h6>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: 75 + '%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
           </div>
           <h6>WORDPRESS / JOOMLA / DRUPAL / MAGENTO / PRESTASHOP</h6>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
           </div>
           <h6>MySQL / SQL</h6>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
           </div>
           <h6>JavaScript</h6>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: 25 + '%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
           </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 p-skills align-items-center text-center">
          <h2>Professional Skills</h2>
          <div className="">
            <div className="col-md-4 p-skills-d">Social</div>
            <div className="col-md-4 p-skills-d">Ordningsam</div>
            <div className="col-md-4 p-skills-d">Kreativ </div>
            <div className="col-md-4 p-skills-d">Hjälpsam</div>
          </div>
          </div>
        </div>
        </div>
      );
    }
  }
  
  export default Skills;

  