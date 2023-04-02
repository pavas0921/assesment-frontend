import React from "react";

export const initialContext = {
	data: {
		products: [],
	},
};

export const Context = React.createContext(initialContext);
