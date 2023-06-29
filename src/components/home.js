import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const API = "https://jsonplaceholder.typicode.com/photos";
    axios
      .get(API)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Home page</h2>
      <div className="row">
        {data.map((detail) => (
          <div key={detail.id} className="col-sm-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={detail.url}
                className="card-img-top"
                alt="..."
                width={200}
                height={120}
              />
              <div className="card-body">
                <h5 className="card-title">{detail.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
