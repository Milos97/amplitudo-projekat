import React from 'react';

const CourseItem = ({course}) => {
    const {title, img, author, rating, reviewsCount, price, discount} = course;
    return (
        <li className="course-div">
            <a href="#">
                <img className="course-img" src={img} alt="slika" />
                <div className="course-content">
                    <h3 className="course-title">{title}</h3>
                    <p className="course-author">{author}</p>
                    <p className="course-rating">Rating: {rating}<span>({reviewsCount})</span></p>
                    <p className="course-price"><span>${price}</span> ${discount}</p>
                </div>
            </a>
        </li>
    );
};

export default CourseItem;