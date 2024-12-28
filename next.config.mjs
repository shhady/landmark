/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
      locales: ['he'],
      defaultLocale: 'he',
    },
    images: {
      domains: [], // Add any image domains if needed
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      })
      return config
    },
  }
  
  export default nextConfig 