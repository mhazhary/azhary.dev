/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    path: 'https://cdn.statically.io/img/raw.githubusercontent.com/',
  },
}