import React, {useEffect, useContext, useCallback, useState} from 'react';
import { withRouter, Redirect } from "react-router";
import app from '../../base';
import { AuthContext } from "../../Auth.js";
import AddCourse from '../../Components/AddCourse';
import DeleteCourse from '../../Components/DeleteCourse';
import CourseItem from '../../Components/Course';
import {fetchCourses, makeCourse, fetchCourse} from "Actions/coursesAction";
import {connect} from "react-redux";

const Admin = (props) => {
    const {courses} = props;

    useEffect(() => {
        props.fetchCourses();
    }, []);

    const { currentUser } = useContext(AuthContext);

    var user = app.auth().currentUser;
    var name, email, uid;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        uid = user.uid;
    }
    
    console.log(email);
      
    
    return ( 
        <div>
        {
            email === "milos@gmail.com"
            ? 
            <div className="admin-div">
                <div className="admin-container">
                    <AddCourse></AddCourse>
                    <DeleteCourse></DeleteCourse>
                </div>
            </div>
            : ""
        }
        </div>
    );
}

const mapStateToProps = state => ({
    courses: state.kursevi.courses.reverse(),
});
 
export default connect(mapStateToProps, {fetchCourses, makeCourse})(Admin);