import React from 'react';
import design from '../img/design.jpg';
import development from '../img/development.jpg';
import marketing from '../img/marketing.jpg';
import it from '../img/it-and-software.jpg';
import personal from '../img/personal-development.jpg';
import business from '../img/business.jpg';
import photography from '../img/photography.jpg';
import music from '../img/music.jpg';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="categories-wrapper component-margin">
                <h2 className="h2-style h2-categories">Top categories</h2>
                <div className="categories-row">
                    <a href="/courses" className="categories-card">
                        <img src={design} width="300" height="350"  alt="Design" />
                        <div>
                            <p>Design</p>
                        </div>
                    </a>
                    <a href="/courses" className="categories-card">
                        <img src={development} width="300" height="350"  alt="development" />
                        <div>
                            <p>Development</p>
                        </div>
                    </a>
                    <a href="/courses" className="categories-card">
                        <img src={marketing} width="300" height="350"  alt="marketing" />
                        <div>
                            <p>Marketing</p>
                        </div>
                    </a>
                    <a href="/courses" className="categories-card">
                        <img src={it} width="300" height="350"  alt="it" />
                        <div>
                            <p>IT and Software</p>
                        </div>
                    </a>
                </div>
                <div className="categories-row">
                    <a href="/courses" className="categories-card">
                        <img src={personal} width="300" height="350"  alt="personal" />
                        <div>
                            <p>Personal Development</p>
                        </div>
                    </a>
                    <a href="/courses" className="categories-card">
                        <img src={business} width="300" height="350"  alt="business" />
                        <div>
                            <p>Business</p>
                        </div>
                    </a>
                    <a href="/courses" className="categories-card">
                        <img src={photography} width="300" height="350"  alt="photography" />
                        <div>
                            <p>Photography</p>
                        </div>
                    </a>
                    <a href="/courses" className="categories-card">
                        <img src={music} width="300" height="350"  alt="music" />
                        <div>
                            <p>Music</p>
                        </div>
                    </a>
                </div>
            </div>
         );
    }
}
 
export default Categories;