// next-sitemap.config.js
module.exports = {
    siteUrl: process.env.SITE_URL || 'http://localhost:9220',
    generateRobotsTxt: true, // (Optional) Generates a robots.txt file
    sitemapSize: 7000, // Number of URLs per sitemap file
  }