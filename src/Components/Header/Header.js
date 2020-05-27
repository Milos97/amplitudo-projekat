import React, { useCallback, useContext, useState } from 'react';
import logo from '../../img/logo.png';
import LogIn from '../../Components/LogIn';
import "../../scss/Header.scss";
import SignUp from '../SignUp';
import { Link } from 'react-router-dom';

import { withRouter, Redirect } from "react-router";
import app from '../../base';
import { AuthContext } from "../../Auth.js";



const Header = ({props}) => {

    const { currentUser } = useContext(AuthContext);

    const [courseFilter, setCourseFilter] = useState("");

    // let inputValue = localStorage.getItem("searchValue");
    let searchValue = "";

    function handleChange() {
        searchValue = event.target.value;
        localStorage.setItem("searchValue", searchValue);
        console.log(courseFilter);
        // return <a href="/filter-courses"></a>
    }

    return ( 
        <div className="header-main-div">
            <div className="nav-div header-div">
                <a href="/">
                    <img className="header-logo" style={{marginBottom: "-8px"}} src={logo} alt="YouLearn" width="110" height="32"/>
                </a>
                <a style={{color: "#3c3b37"}} href="/courses">Courses</a>
            </div>
            <div className="search-div header-div">
                <a href="/filtered-courses">
                    <i className="fas fa-search search-ikonica"></i>
                </a>
                
                <input placeholder="Search for anything" name="q" autoComplete="off" 
                value={localStorage.getItem("searchValue")}
                onChange={() => { handleChange(); setCourseFilter(event.target.value);}} 
                className="header-search-bar" />
            </div>
            <div className="register-div header-div">
                <a className="nav-a" href="/about">About</a>
                <a className="nav-a" href="/faq">Faq</a>
                <LogIn style={{padding: "0"}}></LogIn>
                <SignUp></SignUp>
                {
                    currentUser
                    ? <button className="log-out" onClick={() => { app.auth().signOut(); localStorage.setItem("displayCourse", "");}}>Log Out</button>
                    : ""
                }
            </div>
        </div>
        );
}


export default Header;