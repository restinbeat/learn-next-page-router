import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/product-list/ProductList';

// '/'에 해당하는 page component
function ProductPage() {
	const headerTitle = '상품목록 페이지';

	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductList></ProductList>
		</div>
	);
}

export default ProductPage;
