import React, { Component } from 'react';

class Topbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="mx-auto py-3">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="./">Startsida</a>
              <a className="nav-item nav-link" href="#ommig">Om mig</a>
              <a className="nav-item nav-link" href="#kompetens">Kompetens</a>
              <a className="nav-item nav-link" href="#erfarenhet">Erfarenhet</a>
              <a className="nav-item nav-link" href="#portfolio">Portfolio</a>
              <a className="nav-item nav-link" href="#">Blog</a>
              <a className="nav-item nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default Topbar;