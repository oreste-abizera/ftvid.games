import React from 'react';
import Head from 'next/head';
import defaultImage from '../assets/screenshot.png';
import { SEOProps } from '../utils/types';

// const defaultImage = require('../assets/screenshot.png');

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://www.ftvid.games';
const defaultDescription =
  'FtVid | Football Videos | All football highlights and skills in one place. Get access to all football highlights from different regions of the world. We talk about football.';
export const SEO = ({
  title = 'FtVid | Football Videos | All football highlights and skills in one place.',
  description = defaultDescription,
  image = defaultImage,
}: SEOProps) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/static/images/favicon.png" />
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript, FOOTBALL, VIDEOS, HIGHLIGHTS"
      />
      <meta name="author" content="Oreste Abizera" />
      <meta
        name="google-site-verification"
        content="xzs6YHW_CObmzfomBpQCaAAT298lbfSuoaFqql2_aPY"
      />
      <title>{title}</title>
      <meta
        name="description"
        content={
          description !== defaultDescription
            ? `${description} ${defaultDescription}`
            : description
        }
      />

      <meta
        name="image"
        content={image === defaultImage ? `${url}${image}` : image}
      ></meta>

      {/* opengraph tags (for facebook) */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={
          description !== defaultDescription
            ? `${description} ${defaultDescription}`
            : description
        }
      />
      <meta
        name="og:image"
        content={image === defaultImage ? `${url}${image}` : image}
      ></meta>

      {/* twitter tags */}
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:creator" content="@AbizeraOreste"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta
        name="twitter:description"
        content={
          description !== defaultDescription
            ? `${description} ${defaultDescription}`
            : description
        }
      ></meta>
      <meta
        name="twitter:image"
        content={image === defaultImage ? `${url}${image}` : image}
      />
      <meta name="twitter:url" content={url} />
    </Head>
  );
};
