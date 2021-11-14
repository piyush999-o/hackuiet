import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import BlogView from "./components/blog/BlogView";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup"
import CreateBlog from "./components/blog/CreateBlog";

const App = () => {

  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/blog">
            <Blog />
          </Route>

          <Route exact path="/newblog">
            <CreateBlog />
          </Route>

          <Route exact path="/blog/postview/:slug">
            <BlogView />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>


        </Switch>
      </Router>
    </>
  );
};

export default App;
