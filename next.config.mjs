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
    }
  }
  
  export default nextConfig 