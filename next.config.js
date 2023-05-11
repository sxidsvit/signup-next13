/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['localhost: 3000'],
  },
  webpack(config) {
    config.resolve.alias["@"] = __dirname,
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
    return config
  }
}

module.exports = nextConfig

// The topLevelAwait option allows the use of the await keyword at the top level of a module, making it possible to use synchronous code inside modules instead of using callbacks or promises.

// This code adds the topLevelAwait option to the experimental features options in the Webpack configuration of the Next.js application.Using the spread operator ..., it preserves the existing experimental options and adds the new topLevelAwait: true option to them.

// After adding this option, modules in the Next.js application can use the await keyword at the top level without needing to wrap it in async functions or use callbacks or promises.
