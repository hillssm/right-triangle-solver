import { site } from 'theme/utils/site';

export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${site.baseUrl}/sitemap.xml\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
