import { Helmet } from 'react-helmet-async';

function SEOMetaTag({ title, param }) {
  return (
    <Helmet>
      <meta property="og:site_name" content="IRENEchive" />
      <meta property="og:title" content={`IRENEchive${title ? ` - ${title}` : ''}`} />
      <meta property="og:url" content={`https://irenechive.com/${param}`} />
      <meta property="og:description" content="사랑하는 주현이" />
      <meta property="og:image" content="https://i.imgur.com/QFV4qJU.jpeg" />

      <meta name="twitter:title" content={`IRENEchive${title ? ` - ${title}` : ''}`} />
      <meta name="twitter:description" content="사랑하는 주현이" />
      <meta name="twitter:image" content="https://i.imgur.com/QFV4qJU.jpeg" />

      <link rel="canonical" href={`https://irenechive.com/${param}`} />
    </Helmet>
  );
}

export default SEOMetaTag;
