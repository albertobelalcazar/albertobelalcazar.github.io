import React, { Component } from  'react';
import LinkedIn from '../../assets/img/linkedin.svg';
import Email from '../../assets/img/close-envelope.svg';
import Mobil from '../../assets/img/sms.svg';
import Git from '../../assets/img/github-logo.svg';

class Contact extends Component {
    render() {
      return (
        <div className="contact">
          <div className="social-icons text-center">
          <div className="c-icons"><img src={LinkedIn} alt="LinkedIn"/></div>
          <div className="c-icons"><img src={Email} alt="e-mail"/></div>
          <div className="c-icons"><img src={Mobil} alt="tel"/></div>
          <div className="c-icons"><img src={Git} alt="git"/></div>
        </div>
        </div>
      );
    }
  }
  
  export default Contact;