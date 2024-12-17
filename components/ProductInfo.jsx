import Image from 'next/image';

function ProductInfo({ product }) {
	return (
		<div>
			<div>
				<Image
					src={product.imageUrl}
					width={300}
					height={250}
					alt={product.name}
				></Image>
			</div>
			<div>
				<p>{product.name}</p>
				<p>{product.price}</p>
			</div>
		</div>
	);
}

export default ProductInfo;
