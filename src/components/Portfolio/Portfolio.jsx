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
					<p>{props.name}</p>
				</div>
			</div>

			<div className="main_portfolio__description">
				<div className="main_portfolio___titile-description">
					<h1>About me</h1>
				</div>
				<div className="main_portfolio___aboutme">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
						reiciendis aliquid possimus, nihil atque quidem repellendus quae
						assumenda vitae sed magnam, laborum, saepe magni voluptate commodi
						explicabo quisquam corrupti cupiditate? Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Quis error ducimus blanditiis, omnis
						cum fugiat rem ipsam cumque commodi. Laboriosam quaerat itaque
						accusantium, iure alias iste ullam voluptatem. Ea, deleniti?
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
