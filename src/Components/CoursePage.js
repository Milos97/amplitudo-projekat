import React, {useContext, useCallback, useState} from 'react';
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import app from '../base';
import { AuthContext } from "../Auth.js";
import CourseStream from './CourseStream';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


toast.configure();

const CoursePage = ({course}) => {
    const {title, img, author, rating, reviewsCount, price, discount, id, desc} = course;
    const discountPercentage = Number(((price - discount) / price * 100).toFixed(0));
    const { currentUser } = useContext(AuthContext);

    const [product] = React.useState({
        name: title,
        price: discount
    })

    const [display, setDisplay] = useState("");
    
    async function handleToken(token) {
        console.log(product);
        const response = await axios.post('https://po28q.sse.codesandbox.io/checkout', {
            token, 
            product
        });
        const {status} = response.data;
        if(status === "success") {
            toast('Success! Enjoy the Course !', {
                type: 'success'
            }) 
        } else {
            toast('Something went wrong', {
                type: 'error'
            }) 
        }
        if(status === "success") {
            localStorage.setItem("displayCourse", `success${window.location.pathname.slice(-1)}`);
            console.log(localStorage.getItem("displayCourse"));
            setDisplay("success");
        }
    }

    // const getData = axios.get('https://po28q.sse.codesandbox.io/checkout');
    // console.log(getData.data);

    return (
        <div className="course-page-main">
            <Link className="course-page-link" to={`../courses`}>
                <p>Go back to courses ></p>
            </Link>
            <div className="course-page-div row">
                <div className="course-page-content">
                    <h3 className="course-page-title">{title} </h3>
                    <p className="course-page-desc">{desc} </p>
                    <p className="course-page-rating">Rating: {rating} ({reviewsCount}) </p>
                    <p className="course-page-author">Created by {author} </p>
                    {
                        localStorage.getItem("displayCourse") === `success${window.location.pathname.slice(-1)}`
                        ? 
                        <div> 
                            <CourseStream course={course} key={course.id}></CourseStream>
                            {/* <a style={{marginTop: "30px", display:"block"}} className="button blue-btn" href="#">Watch online</a> */}
                            <a style={{marginTop: "30px", backgroundColor: "#d63031"}} className="button blue-btn red-btn" href="https://we.tl/t-Yr2AAdeuQv" target="_blank">Download Course</a>
                        </div>
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
                            <StripeCheckout 
                                stripeKey="pk_test_vgv630Mi08ZKLuVSTzPgH2bw00BWj0JhZW"
                                token={handleToken}
                                amount={discount * 100}
                                
                                name={title}
                            />
                            {/* <button className="button blue-btn" style={{width: "100%"}}>Buy now</button> */}
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