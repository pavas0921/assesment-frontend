import React from "react";
import "./product_card.scss";
import { UseCountdown } from "../../hooks";

const ProductCard = ({ id, title, images, price, handleClick }) => {
	const { hours, minutes, seconds, isFinished } = UseCountdown();

	const redirect = () => {
		if (!isFinished) {
			handleClick(id);
		}
	};

	return (
		<div className="product" onClick={redirect}>
			<h3>
				{`${id} `} {title}
			</h3>
			<img className="product__img" src={images} alt={images} />
			<p>$ {price}</p>
			<p>
				{hours}:{minutes}:{seconds}
			</p>
		</div>
	);
};

export default ProductCard;
