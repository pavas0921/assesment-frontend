import React from "react";
import "./product_card.scss";

const ProductCard = ({ title, images, price }) => {
	return (
		<div className="product">
			<h3>{title}</h3>
			<img className="product__img" src={images} alt={images} />
			<p>$ {price}</p>
		</div>
	);
};

export default ProductCard;
