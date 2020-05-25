import React, {useEffect, useState} from 'react';
import CoursePage from './CoursePage';
import {fetchCourses, makeCourse, fetchCourse} from "Actions/coursesAction";
import {connect} from "react-redux";


const SingleCourse = (props) => {
    const {courses} = props;

    useEffect(() => {
        props.fetchCourse();
    }, []);

    return (
        <div className="courses-wrapper-div">
            <ul className="courses-ul">
            {
                courses.length === 0
                ? <div className="no-courses">No Courses yet</div>
                : courses.map(course => <CoursePage course={course} key={course.id}/>)
            }
            </ul>
            
        </div>
    );
};


const mapStateToProps = state => ({
    courses: state.kursevi.courses.reverse(),
});

export default connect(mapStateToProps, { fetchCourses, makeCourse, fetchCourse })(SingleCourse);