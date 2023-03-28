import React from "react";

export const initialContext = {
	data: {
		products: [],
	},
	redirectDetailsRouter: "",
};

export const Context = React.createContext(initialContext);
