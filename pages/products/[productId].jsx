import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';

function ProductDetailPage({ message, productInfo }) {
	const headerTitle = '상품상세 페이지';
	return (
		<div>
			<ProductHeader title={headerTitle} />
			<div>ProductDetailPage : {message}</div>
			<p>{productInfo.name}</p>
		</div>
	);
}

export default ProductDetailPage;

export async function getServerSideProps(context) {
	console.log('## productId : ', context.params.productId);
	const id = context.params.productId;
	const response = await axios.get(`http://localhost:4000/products/${id}`);
	return {
		props: {
			message: 'send server message',
			productInfo: response.data,
		},
	};
}
