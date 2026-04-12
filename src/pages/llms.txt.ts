import { site } from 'theme/utils/site';

export async function GET() {
  const body = [
    `Site: ${site.baseUrl}`,
    `Contact: ${site.contactEmail}`,
    `Sitemap: ${site.baseUrl}/sitemap-index.xml`,
    `Policy: ${site.aiPolicy}`,
    'Allow: /'
  ].join('\n');

  return new Response(`${body}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
