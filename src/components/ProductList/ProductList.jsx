import React, { useEffect, useState, useContext } from "react";
import { getAllProducts } from "../../services/productsAPI";
import { Context } from "../../context";
import { ProductCard } from "../ProductCard";
import { Loader } from "../Loader";
import "./product_list.scss";

const ProducList = () => {
	const [data, setData] = useState([]);
	const [loader, setLoader] = useState(true);
	const context = useContext(Context);

	useEffect(() => {
		const getData = async () => {
			// const products = await getAllProducts();
			setData(await getAllProducts());
			context.data.products = data;
			setLoader(false);
		};
		getData();
	}, []);

	return (
		<div>
			<div className="products">
				{loader && <Loader />}
				{data.length >= 1 &&
					data.map((item, index) => (
						<ProductCard
							key={index}
							title={item.title}
							images={item.images}
							price={item.price}
						/>
					))}
			</div>
		</div>
	);
};

export default ProducList;
