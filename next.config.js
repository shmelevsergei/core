/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'develop-portal.groupautorus.ru',
                port: '3000',
                pathname: '/tmp/**',
            },
        ],
    },
}

module.exports = nextConfig
