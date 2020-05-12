import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import Home from "Page/Home/Home";
import Faq from "Page/Faq/Faq";
import About from "Page/About/About";
import Courses from "Page/Courses/Courses";


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
        {/* <Home></Home> */}
        <Switch>
              <Route path="/" exact component={Header, Home} />
              <Route path="/faq" exact component={Faq} />
              <Route path="/about" exact component={About} />
              <Route path="/courses" exact component={Courses} />
            </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
