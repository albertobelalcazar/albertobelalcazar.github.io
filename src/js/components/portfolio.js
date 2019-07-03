import React, { Component } from  'react';

class Portfolio extends Component {
    render() {
      return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-3 m-3 mx-auto">
          <div className="card">
            <img src="https://via.placeholder.com/300" id="aboutmeimg"/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>  
        </div>
        <div className="col-md-3 m-3 mx-auto">
          <div className="card">
            <img src="https://via.placeholder.com/300" id="aboutmeimg"/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>  
        </div>
        <div className="col-md-3 m-3 mx-auto">
          <div className="card">
            <img src="https://via.placeholder.com/300" id="aboutmeimg"/>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>  
        </div>
        </div>
      </div>
      );
    }
  }
  
  export default Portfolio;