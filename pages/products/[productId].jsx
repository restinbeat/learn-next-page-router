import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/ProductInfo';

function ProductDetailPage({ productDetail }) {
	const headerTitle = '상품상세 페이지';
	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductInfo product={productDetail}></ProductInfo>
		</div>
	);
}

export default ProductDetailPage;

export async function getServerSideProps(context) {
	const id = context.params.productId;
	const { data } = await fetchProductById(id);
	return {
		props: {
			productDetail: data,
		},
	};
}
