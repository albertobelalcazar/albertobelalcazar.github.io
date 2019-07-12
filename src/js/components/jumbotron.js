import React, { Component } from 'react';
import LinkedIn from '../../assets/img/linkedin.svg';
import Email from '../../assets/img/close-envelope.svg';
import Mobil from '../../assets/img/sms.svg';
import Git from '../../assets/img/github-logo.svg';
import Me from '../../assets/img/me11.jpg';

class Jumbotron extends Component {
  render() {
    return (
      <div className="container-fluid  mt-10 jumbotron-c">
        <div className="row align-items-center">
          <div className="jumbo-text">
            {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            <h1 className="display-5">Alberto Belalcázar</h1>
            <p className="display-6">Front-End utvecklare</p>
            {/* <hr className="my-4" />
            <p>alberto.belalcazar@hotmail.com</p>
            <p>0762938777</p>
            <p>Norrtälje</p> */}
          </div>
          <div className="col-md-6">
              <div className="me-container">
                <img src={Me} alt="me"  id="me"/>
              </div>
            </div>
        </div>
        <div className="social-icons text-center">
          <div className="c-icons">
            <a href="https://www.linkedin.com/in/albertobelalcazar/" target="_blank">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
          <div className="c-icons">
            <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">
              <img src={Email} alt="e-mail" />
            </a>
          </div>
          <div className="c-icons">
            <a href="tel:+762938777">
              <img src={Mobil} alt="tel" />
            </a>
          </div>
          <div className="c-icons">
            <a href="https://github.com/albertobelalcazar" target="_blank">
              <img src={Git} alt="git" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Jumbotron;