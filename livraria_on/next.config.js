const withTM = require('next-transpile-modules')(['bootstrap']);

module.exports = withTM({
  // configurações do Next.js aqui...
  
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
