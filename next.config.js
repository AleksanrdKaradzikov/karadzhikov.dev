/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n: {
  //   locales: ['en-US', 'ru'],
  //   defaultLocale: 'ru',
  // },
  images: {
    loader: "default",
    domains: ["localhost"],
  },
}

module.exports = nextConfig
