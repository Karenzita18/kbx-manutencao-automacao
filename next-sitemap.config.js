/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://www.karencode.com.br';

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // Gera o robots.txt automaticamente
  sitemapSize: 5000, // Divide o sitemap se houver mais de 5000 URLs
  changefreq: 'daily', // Frequência sugerida para re-crawl
  priority: 0.7, // Prioridade padrão das páginas
  exclude: ['/api'], // Exclui rotas específicas
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/api' }, // Bloqueia bots da API
      { userAgent: '*', allow: '/' }, // Permite todas as outras páginas
    ],
  },
};
