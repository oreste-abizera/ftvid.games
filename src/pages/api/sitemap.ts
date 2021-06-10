import { NextApiRequest, NextApiResponse } from 'next';

const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // An array with your links
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.3 },
    { url: '/videos', changefreq: 'daily', priority: 0.3 },
    { url: '/search', changefreq: 'daily', priority: 0.3 },
    { url: '/videos/[id]', changefreq: 'daily', priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml',
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data: any) => data.toString());

  res.end(xmlString);
};
