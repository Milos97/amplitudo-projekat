import React, {useEffect, useState} from 'react';
import CourseItem from '../../Components/Course';
import { Link } from "react-router-dom";
import {fetchCourses, makeCourse, fetchCourse, filteredCourses} from "Actions/coursesAction";
import {connect} from "react-redux";

const FilteredCourses = (props) => {
    const {courses} = props;
    
    useEffect(() => {
        props.filteredCourses();
    }, [filteredCourses()]);
    
    return (
        <div className="courses-wrapper-div">
            <p className="courses-p">Top courses in Design</p>
            <ul className="courses-ul">
            {
                courses.length === 0
                ? <div className="no-courses">No Courses found</div>
                : courses.slice(0, 5).map(course => <CourseItem course={course} key={course.id}/>)
            }
            </ul>
            <p className="courses-p">Top courses in Business</p>
            <ul className="courses-ul">
            {
                courses.length === 0
                ? <div className="no-courses">No Courses found</div>
                : courses.slice(0, 5).map(course => <CourseItem course={course} key={course.id}/>)
            }
            </ul>
            <p className="courses-p">Top courses in IT & Software</p>
            <ul className="courses-ul">
            {
                courses.length === 0
                ? <div className="no-courses">No Courses found</div>
                : courses.slice(0, 5).map(course => <CourseItem course={course} key={course.id}/>)
            }
            </ul>
            <p className="courses-p">Top courses in Personal Development</p>
            <ul className="courses-ul">
            {
                courses.length === 0
                ? <div className="no-courses">No Courses found</div>
                : courses.slice(0, 5).map(course => <CourseItem course={course} key={course.id}/>)
            }
            </ul>
            <p className="courses-p">Top courses in Development</p>
            <ul className="courses-ul">
            {
                courses.length === 0
                ? <div className="no-courses">No Courses yet</div>
                : courses.slice(0, 5).map(course => <CourseItem course={course} key={course.id}/>)
            }
            </ul>
        </div>
    );
};


const mapStateToProps = state => ({
    courses: state.kursevi.courses.reverse(),
});

export default connect(mapStateToProps, { fetchCourses, makeCourse, fetchCourse, filteredCourses })(FilteredCourses);