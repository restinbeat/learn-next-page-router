import Image from 'next/image';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';

function CartList({ carts }) {
	const totalPrice = carts.reduce((acc, cur) => {
		return (acc += parseFloat(cur.price));
	}, 0);

	const removeCart = async id => {
		await removeCartItem(id);
		alert('삭제가 되었습니다.');
	};

	return (
		<>
			<div>
				<ul>
					{carts &&
						carts.map(cart => {
							return (
								<li key={cart.id} className={styles.item}>
									<div>
										<Image
											src={cart.imageUrl}
											width={75}
											height={75}
											alt={cart.name}
										></Image>
									</div>
									<div className={styles.description}>
										<div>{cart.name}</div>
										<div>{cart.price}</div>
										<button onClick={() => removeCart(cart.id)}>
											삭제하기
										</button>
									</div>
								</li>
							);
						})}
				</ul>
			</div>
			<div>
				<div>총 가격 : {totalPrice}</div>
				<div>총 수량 : {carts.length}</div>
			</div>
		</>
	);
}

export default CartList;
