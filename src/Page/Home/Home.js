import React from "react";
import att from "../../img/logo-white-att.svg";
import aws from "../../img/logo-white-aws.svg";
import google from "../../img/logo-white-google.svg";
import ibm from "../../img/logo-white-ibm.svg";
import lyft from "../../img/logo-white-lyft.svg";
import girl from "../../img/girl.jpg";
import guy from "../../img/guy.jpg";
// import "../../scss/Home.scss";
import Categories from '../../Components/Categories';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">

        <div className="banner-wrapper">
          {/*  BANNER DIV  */}
          <div className="home-banner-div">
            <h1 className="banner-h">Bootcamp Quality at 1/10 of the Cost</h1>
            <p className="banner-p">
              YouLearn is the world's fastest, most efficient way to master the
              skills tech companies want. 100% oniline, part-time & self-paced.
            </p>
            <a className="button blue-btn" href="courses">
              LEARN MORE
            </a>
            <p className="banner-p">
              Industry leading programs built and recognized by top companies
              worldwide
            </p>
            <div className="banner-partners-div">
              <img src={google} />
              <img src={aws} />
              <img src={att} />
              <img src={ibm} />
              <img src={lyft} />
            </div>
          </div>
          {/*  TABLE DIV  */}
          <div className="banner-table-div">
            <h2 className="table-header">Only at YouLearn: <span>Job-Ready Skills</span></h2>
            <table className="tg">
              <thead>
              <tr>
                <th className="tg-cly1 table-p first"></th>
                <th className="tg-cly1 table-blue">YouLearn</th>
                <th className="tg-cly1 table-grey">OTHERS</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className="tg-cly1 table-p">Learn by doing</td>
                <td className="tg-cly1 table-blue"><svg height="13px" version="1.1" viewBox="0 0 20 20" width="10px" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><g fill="#FFF" fillRule="nonzero" transform="translate(-849.000000, -3677.000000)"><g transform="translate(843.000000, 3671.000000)"><path d="M7.70710678,17.0930443 C7.31658249,16.7025201 6.68341751,16.7025201 6.29289322,17.0930443 C5.90236893,17.4835686 5.90236893,18.1167336 6.29289322,18.5072579 L13.4928932,25.7072579 C13.9529165,26.1672812 14.7227768,26.072507 15.0574929,25.5146469 L25.8574929,7.51464688 C26.1416411,7.04106662 25.988076,6.42680636 25.5144958,6.1426582 C25.0409155,5.85851004 24.4266552,6.01207511 24.1425071,6.48565537 L14.0014611,23.3873987 L7.70710678,17.0930443 Z"></path></g></g></g></svg></td>
                <td className="tg-cly1 table-grey">X</td>
              </tr>
              <tr>
                <td className="tg-cly1 table-p">Practitioner-level skills</td>
                <td className="tg-cly1 table-blue"><svg height="13px" version="1.1" viewBox="0 0 20 20" width="10px" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><g fill="#FFF" fillRule="nonzero" transform="translate(-849.000000, -3677.000000)"><g transform="translate(843.000000, 3671.000000)"><path d="M7.70710678,17.0930443 C7.31658249,16.7025201 6.68341751,16.7025201 6.29289322,17.0930443 C5.90236893,17.4835686 5.90236893,18.1167336 6.29289322,18.5072579 L13.4928932,25.7072579 C13.9529165,26.1672812 14.7227768,26.072507 15.0574929,25.5146469 L25.8574929,7.51464688 C26.1416411,7.04106662 25.988076,6.42680636 25.5144958,6.1426582 C25.0409155,5.85851004 24.4266552,6.01207511 24.1425071,6.48565537 L14.0014611,23.3873987 L7.70710678,17.0930443 Z"></path></g></g></g></svg></td>
                <td className="tg-cly1 table-grey">X</td>
              </tr>
              <tr>
                <td className="tg-cly1 table-p">Job-focused content</td>
                <td className="tg-cly1 table-blue"><svg height="13px" version="1.1" viewBox="0 0 20 20" width="10px" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><g fill="#FFF" fillRule="nonzero" transform="translate(-849.000000, -3677.000000)"><g transform="translate(843.000000, 3671.000000)"><path d="M7.70710678,17.0930443 C7.31658249,16.7025201 6.68341751,16.7025201 6.29289322,17.0930443 C5.90236893,17.4835686 5.90236893,18.1167336 6.29289322,18.5072579 L13.4928932,25.7072579 C13.9529165,26.1672812 14.7227768,26.072507 15.0574929,25.5146469 L25.8574929,7.51464688 C26.1416411,7.04106662 25.988076,6.42680636 25.5144958,6.1426582 C25.0409155,5.85851004 24.4266552,6.01207511 24.1425071,6.48565537 L14.0014611,23.3873987 L7.70710678,17.0930443 Z"></path></g></g></g></svg></td>
                <td className="tg-cly1 table-grey">X</td>
              </tr>
              <tr>
                <td className="tg-cly1 table-p">Real human help</td>
                <td className="tg-cly1 table-blue"><svg height="13px" version="1.1" viewBox="0 0 20 20" width="10px" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><g fill="#FFF" fillRule="nonzero" transform="translate(-849.000000, -3677.000000)"><g transform="translate(843.000000, 3671.000000)"><path d="M7.70710678,17.0930443 C7.31658249,16.7025201 6.68341751,16.7025201 6.29289322,17.0930443 C5.90236893,17.4835686 5.90236893,18.1167336 6.29289322,18.5072579 L13.4928932,25.7072579 C13.9529165,26.1672812 14.7227768,26.072507 15.0574929,25.5146469 L25.8574929,7.51464688 C26.1416411,7.04106662 25.988076,6.42680636 25.5144958,6.1426582 C25.0409155,5.85851004 24.4266552,6.01207511 24.1425071,6.48565537 L14.0014611,23.3873987 L7.70710678,17.0930443 Z"></path></g></g></g></svg></td>
                <td className="tg-cly1 table-grey">X</td>
              </tr>
              <tr>
                <td className="tg-cly1 table-p">Personalized code reviews</td>
                <td className="tg-cly1 table-blue"><svg height="13px" version="1.1" viewBox="0 0 20 20" width="10px" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><g fill="#FFF" fillRule="nonzero" transform="translate(-849.000000, -3677.000000)"><g transform="translate(843.000000, 3671.000000)"><path d="M7.70710678,17.0930443 C7.31658249,16.7025201 6.68341751,16.7025201 6.29289322,17.0930443 C5.90236893,17.4835686 5.90236893,18.1167336 6.29289322,18.5072579 L13.4928932,25.7072579 C13.9529165,26.1672812 14.7227768,26.072507 15.0574929,25.5146469 L25.8574929,7.51464688 C26.1416411,7.04106662 25.988076,6.42680636 25.5144958,6.1426582 C25.0409155,5.85851004 24.4266552,6.01207511 24.1425071,6.48565537 L14.0014611,23.3873987 L7.70710678,17.0930443 Z"></path></g></g></g></svg></td>
                <td className="tg-cly1 table-grey">X</td>
              </tr>
              <tr>
                <td className="tg-0lax table-p">Real-life projects</td>
                <td className="tg-0lax table-blue"><svg height="13px" version="1.1" viewBox="0 0 20 20" width="10px" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><g fill="#FFF" fillRule="nonzero" transform="translate(-849.000000, -3677.000000)"><g transform="translate(843.000000, 3671.000000)"><path d="M7.70710678,17.0930443 C7.31658249,16.7025201 6.68341751,16.7025201 6.29289322,17.0930443 C5.90236893,17.4835686 5.90236893,18.1167336 6.29289322,18.5072579 L13.4928932,25.7072579 C13.9529165,26.1672812 14.7227768,26.072507 15.0574929,25.5146469 L25.8574929,7.51464688 C26.1416411,7.04106662 25.988076,6.42680636 25.5144958,6.1426582 C25.0409155,5.85851004 24.4266552,6.01207511 24.1425071,6.48565537 L14.0014611,23.3873987 L7.70710678,17.0930443 Z"></path></g></g></g></svg></td>
                <td className="tg-0lax table-grey">X</td>
              </tr>
              </tbody>
            </table>
          </div>
          
        </div>
        {/* CATEGORIES SECTION */}
        <Categories></Categories>


        {/* INSTRUCTOR AND YouLearn FOR BUSINESS SECTIONS */}
        <div className="instructor-wrapper component-margin"> 
          <div className="instructor-div"> 
            <img src={girl} alt="Girl" />
            <div className="instructor-text">
              <h2 className="h2-style">Become an instructor</h2>
              <p className="p-style">Top instructors from around the world teach millions of students on YouLearn. 
              We provide the tools and skills to teach what you love.</p>
              <a href="#" className="btn-m btn-primary-m btn-large-m">Start teaching today</a>
            </div>
          </div>
        </div>

        <div className="instructor-wrapper component-margin border-top-1"> 
          <div className="instructor-div business-div"> 
            <div className="instructor-text">
              <h2 className="h2-style">YouLearn for Business</h2>
              <p className="p-style">Get unlimited access to 4,000+ of YouLearn’s top courses for your team.</p>
              <a href="#" className="btn-m btn-primary-m btn-large-m">Get YouLearn for Business</a>
            </div>
            <img src={guy} alt="Guy" />
          </div>
        </div>

        {/*  TRANSFORM SECTION */}
        <div className="transform-div border-top-1 component-margin">
          <iframe className="yt-vid" width="580" height="326.25"
              src="https://www.youtube.com/embed/QFIhEmOd6No?">
          </iframe>
          <div className="transform-text">
            <h2 className="h2-style">Transform your life through education</h2>
            <p className="p-style">Mohamad Alaloush launched a new career in software development by taking courses on YouLearn. 
              What will you be able to do?</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
