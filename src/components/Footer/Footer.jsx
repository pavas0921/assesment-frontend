import React from "react";
import EmailImg from "../Portfolio/Image/assets/email.png";
import GithubImg from "../Portfolio/Image/assets/github.png";
import "./footer.scss";

const Footer = () => {
	return (
		<div className="div-footer">
			<div className="div-footer__footer-content">
				<img className="email-img" src={EmailImg} alt="" />
				<p>pavas0921@gmail.com</p>
			</div>
			<div className="div-footer__footer-content">
				<img className="email-img" src={GithubImg} alt="" />
				<p>Visit my repos</p>
			</div>
		</div>
	);
};

export default Footer;
