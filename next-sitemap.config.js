const siteUrl = 'https://www.landmap-ltd.com'; // Replace with your actual domain

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  // ...other options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
    ],
  },
}
