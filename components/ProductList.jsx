import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';

function ProductList() {
	const [products, setProducts] = useState();

	useEffect(() => {
		axios.get('http://localhost:4000/products').then(response => {
			response.data;
			setProducts(response.data);
		});
	}, []);

	console.log(products);

	return (
		<ul>
			{products &&
				products.map(product => {
					return (
						<li key={product.id} className={styles.item}>
							<div>
								<Image
									src={product.imageUrl}
									width={300}
									height={250}
									alt={product.name}
								></Image>
							</div>
							<div>{product.name}</div>
						</li>
					);
				})}
		</ul>
	);
}

export default ProductList;
