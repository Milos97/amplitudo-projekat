import React from 'react';
import logo from '../../img/udemy-logo.svg';
import LogIn from '../../Components/LogIn';
import "../../scss/Header.scss";
import SignUp from '../SignUp';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header-main-div">
                <div className="nav-div header-divs">
                    <a href="/">
                        <img className="header-logo" src={logo} alt="YouLearn" width="110" height="32"/>
                    </a>
                    <span>Categories</span>
                </div>
                <div className="search-div header-divs">
                    <a href="#">
                        <i className="fas fa-search search-ikonica"></i>
                    </a>
                    
                    <input placeholder="Search for anything" name="q" autoComplete="off" className="header-search-bar" />
                </div>
                <div className="register-div header-divs">
                    <a className="nav-a" href="about">About</a>
                    <a className="nav-a" href="#">Blog</a>
                    {/* <a href="#" className="btn-m btn-secondary-m">Log in</a> */}
                    <LogIn style={{padding: "0"}}></LogIn>
                    <SignUp></SignUp>
                    {/* <a href="#" className="btn-m btn-primary-m" style={{marginLeft: "8px"}}>Sign up</a> */}
                </div>
            </div>
         );
    }
}
 
export default Header;