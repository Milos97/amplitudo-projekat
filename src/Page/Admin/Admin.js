import React, {useEffect, useContext, useCallback, useState} from 'react';
import { withRouter, Redirect } from "react-router";
import app from '../../base';
import { AuthContext } from "../../Auth.js";
import AddCourse from '../../Components/AddCourse';
import DeleteCourse from '../../Components/DeleteCourse';
import CourseItem from '../../Components/Course';
import {fetchCourses, makeCourse, fetchCourse} from "Actions/coursesAction";
import {connect} from "react-redux";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

let id = 6;

const Admin = (props) => {
    const {courses} = props;

    useEffect(() => {
        props.fetchCourses();
    }, []);

    const { currentUser } = useContext(AuthContext);

    function deleteCourse() {
        axios.delete(`/design/` + id, { params: {id: id} });
    }

    return ( 
        <div>
        {
            currentUser
            ? 
            <div className="admin-div">
                <div className="admin-container">
                    {/* <button className="button blue-btn margin-20" onClick={console.log("clicked")}>Add new Course</button> */}
                    <AddCourse></AddCourse>
                    <DeleteCourse></DeleteCourse>
                    {/* <button className="button blue-btn margin-20" style={{backgroundColor: "red"}} onClick={deleteCourse}>Delete Course</button> */}
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