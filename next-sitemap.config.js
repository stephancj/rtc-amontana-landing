// next-sitemap.config.js
import { NEXT_PUBLIC_URL } from "./utils/constants";


module.exports = {
    siteUrl: NEXT_PUBLIC_URL || 'http://localhost:9220',
    generateRobotsTxt: true, // (Optional) Generates a robots.txt file
    sitemapSize: 7000, // Number of URLs per sitemap file
  }