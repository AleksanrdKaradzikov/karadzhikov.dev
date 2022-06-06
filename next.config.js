//const { i18n } = require('./next-i18next.config');
const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
  images: {
    loader: "default",
    domains: ["localhost"],
  },
}

module.exports = nextConfig
