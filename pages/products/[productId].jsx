function ProductDetailPage({ message }) {
	return <div>ProductDetailPage : {message}</div>;
}

export default ProductDetailPage;

export async function getServerSideProps(context) {
	console.log('## productId : ', context.params.productId);
	return {
		props: { message: 'send server message' },
	};
}
