import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

function ProductInfo({ product }) {
	const router = useRouter();
	const { id, name, price, imageUrl } = product;

	const addCart = async () => {
		const response = await createCartItem(product);
		console.log(response);
		alert('장바구니에 추가됨.');
		router.push('/cart');
	};
	return (
		<div className={styles.container}>
			<div>
				<Image src={imageUrl} width={250} height={250} alt={name}></Image>
			</div>
			<div className={styles.description}>
				<p>{name}</p>
				<p>{price}</p>
				<button onClick={addCart}>장바구니에 담기</button>
			</div>
		</div>
	);
}

export default ProductInfo;
