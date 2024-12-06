import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
	return (
		<div>
			<nav>
				<Link href="/home">home</Link> | <Link href="/login">login</Link>
			</nav>
			<Component {...pageProps} />
		</div>
	);
}
