import Link from 'next/link';

function Layout({ children }) {
	return (
		<div>
			<nav>
				<Link href="/">상품 목록</Link> | <Link href="/cart">장바구니</Link>
			</nav>
			<div>{children}</div>
		</div>
	);
}

export default Layout;
