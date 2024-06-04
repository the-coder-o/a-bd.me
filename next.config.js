// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "cdn.dribbble.com",
      "m.media-amazon.com",
      "ik.imagekit.io",
      "miro.medium.com",
      "img.clerk.com",
      "i.ytimg.com",
      "store.storeimages.cdn-apple.com",
      "www.apple.com",
      "www.asiaplustj.info",
      "g.foolcdn.com",
      "i.pinimg.com",
      "avatars.mds.yandex.net",
      "mir-s3-cdn-cf.behance.net",
      "marketing.uz",
      "i.ibb.co",
      "www.a-bd.me",
    ],
  },
};

module.exports = withContentlayer(nextConfig);
