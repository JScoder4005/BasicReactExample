import React, { useState, useEffect } from "react";
import axios from "axios";
import loader from "./images/loader.gif";

function Gallery() {
  const [userData, setUserData] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const API = "https://jsonplaceholder.typicode.com/users";
      axios
        .get(API)
        .then((res) => {
          console.log(res.data);
          setUserData(res.data);
          setStatus(true);
        })
        .catch((err) => console.log(err));
    }, 4000);
  }, []);

  return (
    <div>
      <h2>Users Details</h2>
      {status ? (
        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, ind) => (
              <tr key={user.id}>
                <td>{ind + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="table">
          <tbody>
            <tr>
              <td colSpan="5" className="loader-cell">
                <img src={loader} alt="Loading..." className="loader-image" />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Gallery;
