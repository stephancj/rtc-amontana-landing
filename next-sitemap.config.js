// next-sitemap.config.js
const { NEXT_PUBLIC_URL } = require('./utils/constants');

module.exports = {
    siteUrl: NEXT_PUBLIC_URL || 'http://localhost:9220',
    generateRobotsTxt: true, // (Optional) Generates a robots.txt file
    sitemapSize: 7000, // Number of URLs per sitemap file
  }