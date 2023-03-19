import React from "react";
import "./home_menu.scss";

const HomeMenu = () => {
	return (
		<div className="nav">
			<div className="nav__div-buttons">
				<button className="nav___buttons">Home</button>
			</div>
			<div className="nav__div-buttons">
				<button className="nav___buttons">Products Details</button>
			</div>
			<div className="nav__div-buttons">
				<button className="nav___buttons">About</button>
			</div>
		</div>
	);
};

export default HomeMenu;
