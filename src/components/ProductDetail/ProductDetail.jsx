import React from "react";
import "./product_detail.scss";

const ProductDetail = ({ id, title, description, images }) => {
	return (
		<div className="product-detail-main">
			<div className="product-detail-main__images-div">
				<img className="product-detail-main___img" src={images} alt={images} />
			</div>
			<div className="product-detail-main__description-div">
				<div className="product-detail-main___title">
					<h1>
						{id} {title}
					</h1>
				</div>
				<div className="product-detail-main___title">
					<h2>{description}</h2>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
