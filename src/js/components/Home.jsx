import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-2">
        <div className="row py-2">
          <div className="col-12 "><Jumbotron /></div>
        </div>
        <div className="row py-2">
		<div className="col-12"><Card /></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
