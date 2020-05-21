import React, {useEffect, useContext, useCallback, useState} from 'react';
import { withRouter, Redirect } from "react-router";
import app from '../../base';
import { AuthContext } from "../../Auth.js";
import AddCourse from '../../Components/AddCourse';
import CourseItem from '../../Components/Course';
import {fetchCourses, makeCourse, fetchCourse} from "Actions/coursesAction";
import {connect} from "react-redux";



const Admin = (props) => {
    const {courses} = props;

    useEffect(() => {
        props.fetchCourses();
    }, []);

    const { currentUser } = useContext(AuthContext);

    return ( 
        <div>
        {
            currentUser
            ? 
            <div className="admin-div">
                <div className="admin-container">
                    {/* <button className="button blue-btn margin-20" onClick={console.log("clicked")}>Add new Course</button> */}
                    <AddCourse className="button blue-btn margin-20"></AddCourse>
                    <button className="button blue-btn margin-20" style={{backgroundColor: "red"}}>Delete Course</button>
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