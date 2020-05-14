import React from 'react';
import { Link } from "react-router-dom";

const CourseItem = ({course}) => {
    const {title, img, author, rating, reviewsCount, price, discount, id} = course;
    return (
        <li className="course-div">
            <Link to={`courses/${id}`}>
                <img className="course-img" src={img} alt="slika" />
                <div className="course-content">
                    <h3 className="course-title">{title}</h3>
                    <p className="course-author">{author}</p>
                    <p className="course-rating">Rating: {rating}<span>({reviewsCount})</span></p>
                    <p className="course-price"><span>${price}</span> ${discount}</p>
                </div>
            </Link>
        </li>
    );
};

export default CourseItem;