import React, { Component } from 'react';
import Peru from '../../assets/img/portfolj/peru.JPG';
import Svedea from '../../assets/img/portfolj/svedea.JPG';
import FFreact from '../../assets/img/portfolj/ffreact.JPG';
class Portfolio extends Component {
  render() {
    return (
      <div className="container-fluid" id="portfolio">
        <div className="row">
          <div className="col-md-3 m-3 mx-auto">
            <div className="card card-container">
              <img src={Peru} />
              {/* <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div> */}
            </div>
          </div>
          <div className="col-md-3 m-3 mx-auto">
            <div className="card card-container">
              <img src={Svedea}/>
            </div>
          </div>
          <div className="col-md-3 m-3 mx-auto">
            <div className="card card-container">
              <img src={FFreact} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;