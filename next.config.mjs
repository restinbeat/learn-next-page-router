/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.pixabay.com',
				port: '',
				pathname: '/user/**',
			},
		],
	},
	webpack5: true,
	webpack: (config, options) => {
		config.cache = false;
		return config;
	},
};

export default nextConfig;
