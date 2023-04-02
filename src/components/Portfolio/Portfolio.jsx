import React from "react";
import { Image } from "./Image";
import ReactImg from "../Portfolio/Image/assets/react.png";
import ReduxImg from "../Portfolio/Image/assets/redux.png";
import GitImg from "../Portfolio/Image/assets/git.png";
import GithubImg from "../Portfolio/Image/assets/github.png";
// import SassImg from "../Portfolio/Image/assets/sass.png";
import "./portfolio.scss";

const Portfolio = (props) => {
	return (
		<div className="main_portfolio">
			<div className="main_portfolio__name_img">
				<div className="main_portfolio___img">
					<Image />
				</div>
				<div className="main_portfolio___name">
					<h4>{props.name}</h4>
					<p>Contact Me!</p>
					<p>pavas0921@gmail.com</p>
				</div>
			</div>

			<div className="main_portfolio__description">
				<div className="main_portfolio___titile-description">
					<h1>About me</h1>
				</div>
				<div className="main_portfolio___aboutme">
					<p>
						Hi, I&#39;m Andres and I consider myself a person passionate about
						technology. I love learning about new topics related to programming
						and technology in general and I&#39;m always looking for new
						challenges and opportunities to grow professionally.
					</p>
				</div>

				<div className="main_portfolio___titile-description">
					<h1>Tecnologies I&#39;ve learned</h1>
				</div>
				<div className="main_portfolio__technologies">
					<div className="main_portfolio___technology">
						<img className="main_portfolio____img-tech" src={ReactImg} alt="" />
					</div>
					<div className="main_portfolio___technology">
						<img className="main_portfolio____img-tech" src={ReduxImg} alt="" />
					</div>
					<div className="main_portfolio___technology">
						<img className="main_portfolio____img-tech" src={GitImg} alt="" />
					</div>
				</div>

				<div className="main_portfolio___titile-description">
					<h1>Visit My Repo</h1>
				</div>
				<div className="main_portfolio__technologies">
					<div className="main_portfolio___technology">
						<a href="https://github.com/pavas0921">
							<img
								className="main_portfolio____img-tech"
								src={GithubImg}
								alt=""
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
