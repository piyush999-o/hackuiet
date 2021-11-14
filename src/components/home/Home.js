import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const host = "https://tanpi99.herokuapp.com";
  const [blog, setBlog] = useState([]);
  axios.get(`${host}/blog`).then((res) => {
    let data = res.data;
    setBlog(data);
  });

 

  return (
    <>
      <div className="container">
        <h2 className="title">Welcome to HackUIET Blog Page</h2>
        <div className="welcome-box">
          <div className="card text-center">
            <div className="card-header">Blog Page</div>
            <div className="card-body">
              <h5 className="card-title">HackUIET is a Blog Page</h5>
              <p className="card-text">
                You can Create, Post and Share your own blog on this Site.
              </p>
              <Link to="/blog" className="btn btn-primary">
                See Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
