import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about-main-div">
        <div className="about-banner-div">
          <div className="about-banner-content">
            <div>
              <h2>Expanding learning opportunities</h2>
            </div>
          </div>
        </div>

        <div className="our-section">
          <div className="container">
            <div className="origins-content">
                <h2 className="about-title">Our origins</h2>
                <img
                src="https://about.udemy.com/wp-content/uploads/2016/05/eren-origins.jpg"
                alt="Eren Bali"
                />
                <div>
                    <p>
                        Growing up in a small Turkish village with a one-room
                        schoolhouse, our founder Eren Bali had limited educational
                        opportunities, until his family got a computer. Fueled by his
                        dreams to compete internationally in chess and mathematics, Eren
                        used the internet to access learning resources and connect with
                        people all over the world. With the help of these communities,
                        he earned a silver medal in the International Math Olympiad.
                        <br/><br/>
                        After online learning changed his life, Eren partnered with
                        co-founders Oktay Caglar and Gagan Biyani toward a common goal:
                        to make quality education more accessible and improve lives
                        through learning.
                    </p>
                </div>
            </div>
          </div>
        </div>
        <div className="our-section" style={{backgroundImage: "url('https://about.udemy.com/wp-content/themes/wp-about/assets/images/map.svg')"}}>
            
         
            <div className="container">
                <h2 className="about-title">Our offices</h2>
                <ul className="offices-row">
                    <li className="office-li">
                        <img src="https://about.udemy.com/wp-content/uploads/2016/05/office-sf.png" alt="San Francisco" />
                        <h3>San francisco, CA</h3>
                        <p>600 Harrison St. <br/>3rd Floor <br/>San Francisco, CA 94107</p>
                    </li>
                    <li className="office-li">
                        <img src="https://about.udemy.com/wp-content/uploads/2016/05/office-ank.png" alt="Ankara" />
                        <h3>Ankara, Turkey</h3>
                        <p>Universiteler Mah. Ihsan Dogramaci Bulv. <br/>Teknokent Silikon Blok K:1-1 <br/>ODTU Cankaya/Ankara, 06800 Turkey</p>
                    </li>
                    <li className="office-li">
                        <img src="https://about.udemy.com/wp-content/uploads/2016/05/office-dub.png" alt="Dublin" />
                        <h3>Dublin, Ireland</h3>
                        <p>Level 1, 2 Windmill Lane, Dublin 2, Ireland</p>
                    </li>
                    <li className="office-li">
                        <img src="https://about.udemy.com/wp-content/uploads/2018/03/saopaulo.png" alt="São Paulo" />
                        <h3>São Paulo, Brazil</h3>
                        <p>Rua Capitão Antonio Rosa 409, <br/>Vila Madalena, São Paulo - SP 01443-010 <br/>Brazil</p>
                    </li>
                    <li className="office-li">
                        <img src="https://about.udemy.com/wp-content/uploads/2018/09/shutterstock_123171955-2.jpg" alt="Denver" />
                        <h3>Denver, CO</h3>
                        <p>1860 Blake Street <br/>3rd Floor <br/>Denver, CO 80202</p>
                    </li>
                    <li className="office-li">
                        <img src="https://about.udemy.com/wp-content/uploads/2019/08/103732-jsqgftzjdu-1540222742-2.jpg" alt="Gurgaon" />
                        <h3>Gurgaon, India</h3>
                        <p>Two Horizon Centre, Golf Course Road, DLF <br/>Phase 5, Sector 43, Gurgaon, Haryana, India - <br/>122002</p>
                    </li>
                </ul> 
                <p className="contact-us-p">For partnership and business development inquiries, please contact us at <a href="mailto:bizdev@udemy.com">bizdev@udemy.com</a></p>
            </div>
          <div className="offices-row"></div>
        </div>
      </div>
    );
  }
}

export default About;
