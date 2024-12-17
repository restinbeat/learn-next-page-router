import Image from 'next/image';
import styles from './ProductInfo.module.css';
import { useRouter } from 'next/router';

function ProductInfo({ product }) {
	const router = useRouter();
	const addCart = () => {
		router.push('/cart');
	};
	return (
		<div className={styles.container}>
			<div>
				<Image
					src={product.imageUrl}
					width={250}
					height={250}
					alt={product.name}
				></Image>
			</div>
			<div className={styles.description}>
				<p>{product.name}</p>
				<p>{product.price}</p>
				<button onClick={addCart}>장바구니에 담기</button>
			</div>
		</div>
	);
}

export default ProductInfo;
