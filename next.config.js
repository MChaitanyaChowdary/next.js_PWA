/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
  dest: "public",
});;
// const runtimeCaching = require('next-pwa/cache');
module.exports = withPWA({
  pwa: {
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable : process.env.NODE_ENV === 'development'

  },
  reactStrictMode: true,
})


