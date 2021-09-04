module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api.wellseecoding.com/:path*',
      },
    ]
  },
}
