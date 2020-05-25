import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import Home from "Page/Home/Home";
import Faq from "Page/Faq/Faq";
import About from "Page/About/About";
import Courses from "Page/Courses/Courses";
import FilteredCourses from "Page/Courses/FilteredCourses";
import Admin from "Page/Admin/Admin";
import SingleCourse from "./Components/SingleCourse";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { AuthProvider } from "./Auth";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  
  render() {
    
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Header></Header>
            <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/faq" exact component={Faq} />
                  <Route path="/about" exact component={About} />
                  <Route path="/courses" exact component={Courses} />
                  <Route path="/courses/:courseid" children={<Child/>} />
                  <Route path="/filtered-courses" exact component={FilteredCourses} />
                  <Route path="/filtered-courses/:courseid" children={<Child/>} />
                  <Route path="/admin" exact component={Admin} />
            </Switch>
            <Footer></Footer>
            
          </div>
        </Router>
      </AuthProvider>
    );
  }
}


// window.globalVar = window.location.pathname.slice(-1);

function Child() {
  
  let { courseid } = useParams();
  var globalVar = courseid;
  localStorage.setItem("globalVar", globalVar);

  return (
      <SingleCourse></SingleCourse>
  );  
}

export default App;
