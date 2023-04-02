import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import { getProductById } from "../services/productsAPI";
import { ProductDetail } from "../components/ProductDetail";
import { HomeMenu } from "../components/HomeMenu";

const ProductDetails = () => {
	const [product, setProduct] = useState({});
	const { id } = useParams();
	const context = useContext(Context);
	const { data } = context || {};
	const { products } = data || {};
	const { title, description, images } = product || {};

	useEffect(() => {
		const item = products.find((item) => item.id === +id);
		if (item) {
			setProduct(item);
		} else {
			getProduct(id);
		}
		setProduct(item);
	}, []);

	const getProduct = async (id) => {
		const prod = await getProductById(id);
		setProduct(prod);
		context.data.products = prod;
	};

	return (
		<div>
			<HomeMenu />
			<ProductDetail
				id={id}
				title={title}
				description={description}
				images={images}
			/>
		</div>
	);
};

export default ProductDetails;
