import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../services/productsAPI";
import { Context } from "../../context";
import { ProductCard } from "../ProductCard";
import { Loader } from "../Loader";
import "./product_list.scss";

const ProducList = () => {
	const [data, setData] = useState([]);
	const [loader, setLoader] = useState(true);
	const context = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		const getData = async () => {
			const products = await getAllProducts();
			setData(products);
			context.data.products = products;
			console.log(context);
			setLoader(false);
		};
		getData();
	}, []);

	const goToDetails = (id) => {
		// Redirect to details
		navigate(`/product/${id}`);
	};

	return (
		<div>
			<div className="products">
				{loader && <Loader />}
				{data.length >= 1 &&
					data.map((item, index) => (
						<ProductCard
							key={index}
							id={item.id}
							title={item.title}
							images={item.images}
							price={item.price}
							handleClick={goToDetails}
						/>
					))}
			</div>
		</div>
	);
};

export default ProducList;
