import React, { useEffect, useState, useContext } from "react";
import { getAllProducts } from "../../services/productsAPI";
import { Context } from "../../context";
import "./product_list.scss";

const ProducList = (props) => {
	const [data, setData] = useState([]);
	const context = useContext(Context);

	useEffect(() => {
		const getData = async () => {
			// const products = await getAllProducts();
			setData(await getAllProducts());
			context.data.products = data;
		};
		getData();
	}, []);

	return <div>Hola</div>;
};

export default ProducList;
