/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
      // API_URL: process.env.API_URL,
      GARAM: process.env.GARAM,
    },
}

module.exports = nextConfig
