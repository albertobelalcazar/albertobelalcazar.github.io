import React, { Component } from 'react';
import LinkedIn from '../../assets/img/linkedin.svg';
import Email from '../../assets/img/close-envelope.svg';
import Mobil from '../../assets/img/sms.svg';
import Git from '../../assets/img/github-logo.svg';

class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="social-icons text-center">
          <div className="social-icons text-center">
            <div className="c-icons">
              <a href="https://www.linkedin.com/in/albertobelalcazar/" target="_blank">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
            <div className="c-icons">
              <a href="mailto:alberto@alberto.codes?Subject=Hej" target="_top">
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
      </div>
    );
  }
}

export default Contact;