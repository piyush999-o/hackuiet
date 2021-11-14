import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const BlogView = (props) => {
  const slug = props.match.params.slug;
  const host = "https://tanpi99.herokuapp.com";
  const [blogs, setBlogs] = useState([]);
  axios.get(`${host}/blog/postview/${slug}`).then((res) => {
    let data = res.data;
    setBlogs(data);
  });
  return (
    <>
      <div className="container">
        {blogs}
      {/* {blogs.map((emp) => (
            <tr key={emp.sno}>
              <th scope="row">{emp.sno}</th>
              <th scope="row">{emp.title}</th>
              <td>{emp.content}</td>
              <td>
              <button type="submit" className="btn btn-danger text-danger p-1"><img src="delete.png" alt="Delete" width="30px" style={{borderRadius : '50%'}} /></button>
              </td>
            </tr>
          ))} */}
      </div>
    </>
  );
};

export default withRouter(BlogView);
