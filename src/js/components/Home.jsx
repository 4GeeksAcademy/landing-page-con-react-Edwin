import React from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";



//create your first component
const Home = () => {
	return (
		<div>    
			<Navbar/>
			<Card/>
		</div>
	);
};

export default Home;