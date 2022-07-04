/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
    // reactStrictMode: true,
    env: {
        ENDPOINT: process.env.ENDPOINT
    }
}

module.exports = withPlugins(
    [
        [
            withPWA,
            {
                pwa: {
                    dest: "public",
                    register: true,
                    skipWaiting: true,
                    disable: process.env.NODE_ENV === 'development'
                },
            },
        ],
        // 추가 플러그인 작성
    ],
    nextConfig
);

