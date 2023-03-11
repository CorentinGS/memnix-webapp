const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts"
);

const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "false",
});
const intl = withNextIntl({});

/** @type {import('next').NextConfig} */

module.exports = withPlugins([intl, bundleAnalyzer], {
  // Other Next.js configuration ...
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  reactStrictMode: true,
});
