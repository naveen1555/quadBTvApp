import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ShowListCss.css";

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mb-4">TV Shows</h1>
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-4 mb-4" key={show.show.id}>
            <div className="card h-100">
              <img
                src={
                  show.show.image
                    ? show.show.image.medium
                    : "https://via.placeholder.com/210x295?text=No+Image"
                }
                className="card-img-top"
                alt={show.show.name}
              />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <div
                  dangerouslySetInnerHTML={{ __html: show.show.summary }}
                ></div>
                <Link to={`/shows/${show.show.id}`} className="btn btn-primary">
                  View Summary
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
