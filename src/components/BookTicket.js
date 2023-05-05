import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bookticket-css.css";

function BookTicket(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [numberOfTickets, setNumberOfTickets] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const history = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setIsFormSubmitted(true);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("numberOfTickets", numberOfTickets);
    localStorage.setItem("ticketPrice", ticketPrice);
    localStorage.setItem("totalPrice", totalPrice);
  }

  function handleCancel() {
    history(-1);
  }

  function handleNumberOfTicketsChange(event) {
    setNumberOfTickets(event.target.value);
    setTotalPrice(event.target.value * ticketPrice);
  }

  function handleTicketPriceChange(event) {
    setTicketPrice(event.target.value);
    setTotalPrice(event.target.value * numberOfTickets);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="text-center mb-4">Book Tickets</h1>
          {isFormSubmitted && (
            <div className="alert alert-success" role="alert">
              Your ticket has been booked successfully!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                required
                value={mobile}
                onChange={(event) => setMobile(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberOfTickets">Number of Tickets</label>
              <input
                type="number"
                className="form-control"
                id="numberOfTickets"
                required
                min="1"
                value={numberOfTickets}
                onChange={handleNumberOfTicketsChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ticketPrice">Ticket Price</label>
              <input
                type="number"
                className="form-control"
                id="ticketPrice"
                required
                min="1"
                value={ticketPrice}
                onChange={handleTicketPriceChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="totalPrice">Total Price</label>
              <input
                type="number"
                className="form-control "
                id="totalPrice"
                required
                value={totalPrice}
                disabled
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2 ">
              Book
            </button>
            <button
              type="button"
              className="btn btn-secondary  mt-2 "
              onClick={handleCancel}
              style={{ marginLeft: "20px" }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookTicket;
