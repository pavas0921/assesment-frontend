import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productsAPI";
import "./product_list.scss";

const ProducList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await getAllProducts();
			setProducts(data);
		};

		getData();
	}, []);
	console.log(products);
	return <div>products</div>;
};

export default ProducList;
