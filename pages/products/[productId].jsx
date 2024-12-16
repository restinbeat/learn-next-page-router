import ProductHeader from '@/components/ProductHeader';

function ProductDetailPage({ message }) {
	const headerTitle = '상품상세 페이지';
	return (
		<div>
			<ProductHeader title={headerTitle} />
			<div>ProductDetailPage : {message}</div>
		</div>
	);
}

export default ProductDetailPage;

export async function getServerSideProps(context) {
	console.log('## productId : ', context.params.productId);
	return {
		props: { message: 'send server message' },
	};
}
