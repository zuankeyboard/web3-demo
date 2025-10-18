/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@ant-design", 
    "antd", 
    "rc-util", 
    "rc-pagination", 
    "rc-picker", 
    "rc-input",
    "rc-table",
    "rc-tree",
    "rc-select",
    "rc-tooltip",
    "rc-dropdown"
  ],
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
