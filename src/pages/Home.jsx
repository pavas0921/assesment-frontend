import React from "react";
import { HomeMenu } from "../components/HomeMenu";
import { ProductList } from "../components/ProductList";
import "../styles/globals.scss";

const Home = () => {
	return (
		<>
			<HomeMenu />
			<ProductList />
		</>
	);
};

export default Home;
