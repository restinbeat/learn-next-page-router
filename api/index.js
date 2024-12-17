import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
});

function fetchProducts(productId) {
	return instance.get('/products', {
		params: {
			id: productId,
		},
	});
}

function fetchProductById(productId) {
	return instance.get(`/products/${productId}`);
}

function createCartItem({ id, name, price, imageUrl }) {
	return instance.post(`/carts`, {
		id,
		name,
		price,
		imageUrl,
	});
}

function fetchCarts() {
	return instance.get('/carts');
}

function removeCartItem(productId) {
	return instance.delete(`/carts/${productId}`);
}

export {
	fetchProducts,
	fetchProductById,
	createCartItem,
	fetchCarts,
	removeCartItem,
};
