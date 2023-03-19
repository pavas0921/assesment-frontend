import React from "react";
import { useNavigate } from "react-router";
import "./home_menu.scss";

const HomeMenu = () => {
	const navigate = useNavigate();

	const goToAbout = () => {
		navigate("/about");
	};

	const goToHome = () => {
		navigate("/");
	};

	return (
		<div className="main">
			<div className="main__nav">
				<button onClick={goToHome} className="main____buttons">
					Home
				</button>

				<button onClick={goToAbout} className="main____buttons">
					About
				</button>
			</div>
		</div>
	);
};

export default HomeMenu;
