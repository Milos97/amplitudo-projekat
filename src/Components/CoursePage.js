import React, {useContext, useCallback} from 'react';
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import app from '../base';
import { AuthContext } from "../Auth.js";

const CoursePage = ({course}) => {
    const {title, img, author, rating, reviewsCount, price, discount, id, desc} = course;
    const discountPercentage = Number(((price - discount) / price * 100).toFixed(0)); ;
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="course-page-main">
            <Link className="course-page-link" to={`../courses`}>
                <p>Go back to courses ></p>
            </Link>
            <div className="course-page-div row">
                <div className="course-page-content">
                    <h3 className="course-page-title">{title} </h3>
                    <p className="course-page-desc">{desc} </p>
                    <p className="course-page-rating">Rating: {rating} {reviewsCount} </p>
                    <p className="course-page-author">Created by {author} </p>

                    
                    {
                        currentUser
                        ? <a style={{marginTop: "30px"}} className="button blue-btn" href="https://we.tl/t-Yr2AAdeuQv" target="_blank">Download Course</a>
                        : ""
                    }
                </div>
                <div className="course-sidebar-main">
                    <div className="course-sidebar-div">
                        <img className="course-sidebar-img" src={img} alt="course banner" />
                        <div className="course-sidebar-content">
                            <p className="course-sidebar-price"><span style={{fontSize: "36px", fontWeight: "700"}}>${discount}</span> 
                            <span className="span-price">${price}</span> <span className="span-discount">{discountPercentage}% off</span> </p>
                            <p className="course-sidebar-time"><b>8 hours</b> left at this price!</p>
                            <button className="button blue-btn" style={{width: "100%"}} onClick={console.log("clicked")}>Buy now</button>
                            <p className="money-back">30-Day Money-Back Guarantee</p>
                            <p className="course-includes-p"><span>This course includes: </span> <br/>
                                19.5 hours on-demand video <br/>
                                1 article <br/>
                                20 downloadable resources <br/>
                                Full lifetime access<br/>
                                Certificate of Completion
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;