import React, { Component } from 'react';
import ArrowDown from '../../assets/img/arrow_down.png';

class Aboutme extends Component {
  render() {
    return (
      <div className="container-fluid mt-10" id="ommig">
        <div className="row">
          {/* <div className="col-md-6 col-sm-12">
            <img src={AboutMeImg} id="aboutmeimg"/>
          </div> */}
          <div className="col-md-12 col-sm-12">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <div>Om mig</div>
                  </h2>
                </div>

                <div className="card-body">
                  <p>Att jobba som Webbutvecklare / Front-end utvecklare i ett företag där jag får större möjligheter att utvecklas personligen och karriärmässigt.</p>
                </div>
                <div className="arrow bounce">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <img src={ArrowDown} alt="läs mer..." />
                  </button>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                    <p>Jag älskar att jobba med det senaste tekniken inom Front-End Utveckling så som JavaScript, HTML5, CSS3 och desutom jag har jobbat med olika Conten Management Syatem så som Joomla, Wordpress, Drupal och mycket god erfarenhet av ledande datorbaserade webbdesignprogram som Adobe Dreamweaver, Adobe Photoshop, Adobe Fireowrks, Adobe Illustrator. Även goda kunskaper inom PHP, MySql, html5, CSS. Erfarenhet av E-handel CMS som OpenCart , Magento samt Prestashop. Driver även en Youtube-kanal med egenproducerade användarmanualer för Joomla, Wordpress samt PrestaShop. Finns än så länge bara på spanska, men i skrivande stund med över 150 000 visningar samt över 1200 prenumeranter.</p>
                    <p>På min lediga tid ägnar jag mycket tid åt min familj. </p>
                    <p>Jag spelar även fotboll, och följer La Liga och andra större fotbollskupper. </p>
                    <p>Jag spenderar även en hel del tid vid min dator, och speciellt då med diverse CMS och andra program. Min hobby är att lära mig mer inom CMS som Joomla, Wordpress och Drupal. </p>
                    <p>Dessutom gillar jag att arbeta med Adobe program, såsom Photoshop, Illustrator samt Fireworks.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Aboutme;


