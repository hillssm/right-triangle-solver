import { site } from 'theme/utils/site';

export async function GET() {
  const sitemapIndexUrl = new URL('/sitemap-index.xml', site.baseUrl).toString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${sitemapIndexUrl}</loc>\n  </sitemap>\n</sitemapindex>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
