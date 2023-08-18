/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            'cdn.worldvectorlogo.com',
            'lh3.googleusercontent.com',
            '1.bp.blogspot.com',
            'image.api.playstation.com',
            'cdn.cloudflare.steamstatic.com',
            'i.ytimg.com',
            'verdict.co.uk',
            'github.com',
            '/public/image/',
        ],
    },
    webpack5: true,
    webpack: (config) => {
        // eslint-disable-next-line no-param-reassign
        config.resolve.fallback = { fs: false, process: false }
        return config
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
