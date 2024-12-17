import { fetchCarts } from '@/api';
import CartHeader from '@/components/cart/CartHeader';
import CartList from '@/components/cart/CartList';

// '/cart'에 해당하는 page component
function CartPage({ carts }) {
	const headerTitle = '장바구니 페이지';
	return (
		<div>
			<CartHeader title={headerTitle}></CartHeader>
			<CartList carts={carts}></CartList>
		</div>
	);
}

// getServerSideProps (pages folder 하위 리액트 컴포넌트에서만 사용가능)
export async function getServerSideProps(context) {
	const { data } = await fetchCarts();
	return {
		props: {
			carts: data,
		},
	};
}
export default CartPage;
