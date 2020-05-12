import React from 'react';
import logo from '../../img/udemy-logo.svg';
// import "../../scss/Footer.scss";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer className="footer-main-div">
                <hr/>
                <div className="footer-links-div">
                    <div className="footer-row">
                        <ul className="links-list col-sm-9">
                            <li>
                                <a className="links-a" href="#"><strong>YouLearn for Business</strong></a>
                            </li>
                            <li>
                                <a className="links-a" href="#"><strong>Teach on YouLearn</strong></a>
                            </li>
                            <li>
                                <a className="links-a" href="#">YouLearn app</a>
                            </li>
                            <li>
                                <a className="links-a" href="about">About us</a>
                            </li>
                            <li>
                                <a className="links-a" href="faq">Faq</a>
                            </li>
                            <li>
                                <a className="links-a" href="#">Blog</a>
                            </li>
                            <li>
                                <a className="links-a" href="#">Help and Support</a>
                            </li>
                            <li>
                                <a className="links-a" href="#">Affiliate</a>
                            </li>
                            <li>
                                <a className="links-a" href="#">Sitemap</a>
                            </li>
                            <li>
                                <a className="links-a" href="#">Featured courses</a>
                            </li>
                        </ul>
                        {/* <div className="col-sm-3">
                            <button className="btn">English</button>
                        </div> */}
                    </div>
                </div>
                <hr/>
                <div className="footer-row f-row-2">
                    <div className="f-col-1">
                        <p>Top companies choose <a className="a-blue-dark" href="#">YouLearn for Business</a> to build in-demand career skills.</p>
                    </div>
                    <div className="f-col-2">
                        <img alt="Lyft" height="24" width="34" src="https://i.udemycdn.com/partner-logos/lyft-logo.svg" />
                        <img alt="Pinterest" height="24" width="99" src="https://i.udemycdn.com/partner-logos/pinterest-logo.svg" />
                        <img alt="adidas"  height="24" width="36" src="https://i.udemycdn.com/partner-logos/adidas-logo.svg" />
                        <img alt="Eventbrite" height="24" width="99" src="https://i.udemycdn.com/partner-logos/eventbrite-logo.svg"/>
                        <img alt="SurveyMonkey" height="24" width="157" src="https://i.udemycdn.com/partner-logos/surveymonkey-logo.svg"/>
                        <img alt="Booking.com" height="24" width="140" src="https://i.udemycdn.com/partner-logos/booking-logo.svg"/>
                    </div>
                </div>
                <hr/>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-sm-6">
                            <a style={{marginRight: "20px"}} href="#">
                                <img className="header-logo" src={logo} alt="YouLearn" width="110" height="32"/>
                            </a>
                            <span className="footer-copyright">Copyright © 2020 YouLearn, Inc. </span>
                        </div>
                        <div className="col-sm-6 text-right">
                            <ul>
                                <li>
                                    <a href="#">
                                    Terms
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    Privacy Policy and Cookie Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;