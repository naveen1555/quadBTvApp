import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
import BookTicket from "./components/BookTicket";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ShowList />} />
          <Route path="/shows/:id" element={<ShowSummary />} />
          <Route path="/shows/:id/book-ticket" element={<BookTicket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
