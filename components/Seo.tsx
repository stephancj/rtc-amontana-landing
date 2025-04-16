import { NextSeo } from 'next-seo';
import React from 'react';

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

const Seo = ({
  title,
  description,
  url = 'https://rotaractamontana.netlify.app',
  image = 'https://rotaractamontana.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfanionRTCA.717e35b9.jpg&w=1200&q=75',
}: SeoProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        title,
        description,
        url,
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }}
    />
  );
};

export default Seo;