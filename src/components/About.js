import React, { useState, useEffect } from "react";

export default function About() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const API = "https://jsonplaceholder.typicode.com/posts";
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setPostData(data);
        })
        .catch((err) => console.log(err));
    }, 5000);
  }, []);

  return (
    <div>
      <h2>Latest Posts</h2>
      {postData.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
