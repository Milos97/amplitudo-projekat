import React, { Fragment } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import Home from "Page/Home/Home";
import Faq from "Page/Faq/Faq";
import About from "Page/About/About";
import Courses from "Page/Courses/Courses";
import Admin from "Page/Admin/Admin";


import {connect} from "react-redux";
import CourseItem from "Components/Course";
import SingleCourse from "./Components/SingleCourse";
import axios from 'axios';
import {fetchCourses, makeCourse, fetchCourse} from "Actions/coursesAction";

axios.defaults.baseURL = "http://localhost:3000";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

 

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <Switch>
              <Route path="/" exact component={Header, Home} />
              <Route path="/faq" exact component={Faq} />
              <Route path="/about" exact component={About} />
              <Route path="/courses" exact component={Courses} />
              <Route path="/courses/:courseid" exact children={<Child/>} />
              <Route path="/admin" exact component={Admin} />
        </Switch>
        <Footer></Footer>
        
      </div>
    );
  }
}

function Child() {
  
  let { courseid } = useParams();

  window.globalVar = courseid;
  return (
      <SingleCourse></SingleCourse>
  );  

  
}

export default App;
