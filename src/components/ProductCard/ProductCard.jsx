import React from "react";
import "./product_card.scss";

const ProductCard = ({ id, title, images, price, handleClick }) => {
	const redirect = () => {
		handleClick(id);
	};

	return (
		<div className="product" onClick={redirect}>
			<h3>
				{`${id} `} {title}
			</h3>
			<img className="product__img" src={images} alt={images} />
			<p>$ {price}</p>
		</div>
	);
};

export default ProductCard;
