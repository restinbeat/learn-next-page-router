import { fetchProducts } from '@/api';
import ProductHeader from '@/components/ProductHeader';

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
	const id = context.params.productId;
	const response = await fetchProducts(id);
	return {
		props: {
			message: 'send server message',
			productInfo: response.data,
		},
	};
}
