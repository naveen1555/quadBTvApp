import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import '../styles/ShowSummary.css';

function ShowSummary() {
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  console.log("params", params);

  useEffect(() => {
    console.log("is loading...");
    if (params && params.id) {
      axios
        .get(`https://api.tvmaze.com/shows/${params.id}`)
        .then((response) => {
          setShow(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [params.id]);

  function handleBookTicketClick() {
    if (show && show.id) {
      navigate(`/shows/${show.id}/book-ticket`);
    }
    console.log("show:", show);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={
              show.image
                ? show.image.medium
                : "https://via.placeholder.com/210x295?text=No+Image"
            }
            className="img-fluid"
            alt={show.name}
          />
        </div>
        <div className="col-md-8">
          <h1>{show.name}</h1>
          <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
          <button className="btn btn-primary" onClick={handleBookTicketClick}>
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowSummary;
