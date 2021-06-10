import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import url from '@/utils/url';

const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let videosIds: never[] = [];
  let response = await axios
    .get(`${url}/indexing`)
    .catch((err) => console.log('error occured'));
  if (response) {
    videosIds = response.data.matches || [];
  }
  // An array with your links
  const links = [
    { url: '/', changefreq: 'daily', priority: 0.3 },
    { url: '/videos', changefreq: 'daily', priority: 0.3 },
    { url: '/search', changefreq: 'daily', priority: 0.3 },
    { url: '/videos/[id]', changefreq: 'daily', priority: 0.3 },
  ];

  for (const id of videosIds) {
    links.push({ url: `/videos/${id}`, changefreq: 'daily', priority: 0.3 });
  }

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
