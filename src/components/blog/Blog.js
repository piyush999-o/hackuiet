import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const host = "https://tanpi99.herokuapp.com";
  const [blog, setBlog] = useState([]);
  axios.get(`${host}/blog`).then((res) => {
    let data = res.data;
    setBlog(data);
  });
  return (
    <>
      <div className="container mt-3 bottom-border">
        <Link to='/newblog' role='button' class="btn btn-info col-md-12 ">
          Create own Blog
        </Link>

        <h2 className="ms-2">All Blogs:</h2>
        {blog.map((post) => (
          <div className="col-md-12 mt-2" key={post.sno}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">{post.title}</h3>
                <div className="mb-0 text-muted">{post.date}</div>
                <div className="mb-1 text-muted">by {post.author}</div>

                <p className="card-text mb-auto">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
