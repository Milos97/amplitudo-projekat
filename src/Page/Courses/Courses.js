import React, {useEffect, useState} from 'react';
import CourseItem from '../../Components/Course';
import {fetchCourses, makeCourse} from "Actions/coursesAction";
import {connect} from "react-redux";


const Courses = (props) => {
    const {courses} = props;

    useEffect(() => {
        props.fetchCourses();
    }, []);

    return (
        <div className="courses-wrapper-div">
            <div>
                <p className="courses-p">Most popular topics</p>
                <div>Placehodler div</div>
            </div>
            <p className="courses-p">Top courses in Design</p>
            <ul className="courses-ul">
            {
                courses.length === 0
                ? <div className="no-courses">No Courses yet</div>
                : courses.map(course => <CourseItem course={course} key={course.id}/>)
            }
            </ul>
            <p className="courses-p">Top courses in Business</p>
            <ul className="courses-ul">
            {
                courses.length === 0
                ? <div className="no-courses">No Courses yet</div>
                : courses.map(course => <CourseItem course={course} key={course.id}/>)
            }
            </ul>
            <p className="courses-p">Top courses in IT & Software</p>
            <ul className="courses-ul">
            {
                courses.length === 0
                ? <div className="no-courses">No Courses yet</div>
                : courses.map(course => <CourseItem course={course} key={course.id}/>)
            }
            </ul>
            <p className="courses-p">Top courses in Personal Development</p>
            <ul className="courses-ul">
            {
                courses.length === 0
                ? <div className="no-courses">No Courses yet</div>
                : courses.map(course => <CourseItem course={course} key={course.id}/>)
            }
            </ul>
            <p className="courses-p">Top courses in Development</p>
            <ul className="courses-ul">
            {
                courses.length === 0
                ? <div className="no-courses">No Courses yet</div>
                : courses.map(course => <CourseItem course={course} key={course.id}/>)
            }
            </ul>
        </div>
    );
};


const mapStateToProps = state => ({
    courses: state.kursevi.courses.reverse(),
});

export default connect(mapStateToProps, { fetchCourses, makeCourse })(Courses);