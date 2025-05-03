import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-2">
        <div className="row py-2">
          <div className="col-12 ">
            <Jumbotron />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12">
            <Card />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
