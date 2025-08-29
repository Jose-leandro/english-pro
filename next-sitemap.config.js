/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000', // URL do seu site
  generateRobotsTxt: true, // gera automaticamente robots.txt
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
};
