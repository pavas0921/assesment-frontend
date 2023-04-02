export const getAllProducts = async () => {
	const url = "https://api.escuelajs.co/api/v1/products";

	try {
		const request = await fetch(url);
		const data = await request.json();
		return data;
	} catch (error) {
		return error;
	}
};

export const getProductById = async (id) => {
	const url = `https://api.escuelajs.co/api/v1/products/${id}`;
	try {
		const request = await fetch(url);
		const data = await request.json();
		return data;
	} catch (error) {
		return error;
	}
};
