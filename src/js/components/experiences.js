import React, { Component } from 'react';

class Experiences extends Component {
  render() {
    return (
      <div id="slider-feature" className="carousel slide" data-ride="carousel">
        <div className="slider-feature-inner">
          <h3>Vad människor som jag har arbetat tycker om mig</h3>
          <ol className="carousel-indicators">
            <li data-target="#slider-feature" data-slide-to="0" className="active"></li>
            <li data-target="#slider-feature" data-slide-to="1"></li>
            <li data-target="#slider-feature" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <div className="carousel-item-content text-center">
                {/* <img src="https://via.placeholder.com/200" id="aboutmeimg" /> */}
                <blockquote className="blockquote text-right">
                  <p className="mb-0">Working with Alberto was wonderful.
                    He is ambitious, professional, curious and always gets the job done,
                    even though the deadlines was very short.
                    He has also proven to have great teaching skills and his willingness to share it everyone else has been greatly appreciated.
                    A very friendly and lovable colleague to have around.
                  </p>
                  <footer className="blockquote-footer">Marcus <cite title="Source Title">Webdeveloper</cite></footer>
                </blockquote>
              </div>
            </div>
            <div className="carousel-item text-center">
              <div className="carousel-item-content text-center">
                {/* <img src="https://via.placeholder.com/200" id="aboutmeimg" /> */}
                <blockquote className="blockquote text-right">
                  <p className="mb-0">Alberto is such a fast learner, adapts fast and give a 100% from day one.
                  Always a big smile and positive attitude. Alberto has an amazing eye for quality assurance and had several ideas of new interactive ad formats.
                  </p>
                  <footer className="blockquote-footer">Simon <cite title="Source Title">Webdeveloper</cite></footer>
                </blockquote>
              </div>
            </div>
            <div className="carousel-item text-center">
              <div className="carousel-item-content text-center">
                {/* <img src="https://via.placeholder.com/200" id="aboutmeimg" /> */}
                <blockquote className="blockquote text-right">
                  <p className="mb-0">Alberto is a awesome guy to work with! He will always bring a smile on everyone's lips meanwhile solving problems in a blink of an eye.
                  He is one of the most kindest persons i have ever worked with but also one of the smartest.
                  </p>
                  <footer className="blockquote-footer">Nikki <cite title="Source Title">Webdeveloper</cite></footer>
                </blockquote>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Experiences;