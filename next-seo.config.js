import { NEXT_PUBLIC_URL } from "./utils/constants";

const SEO = {
    title: "Rotaract Club Amontana",
    description: "Site officiel du Rotaract Club Amontana. Actions, événements, et leadership jeune à Madagascar.",
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: NEXT_PUBLIC_URL,
        site_name: 'Rotaract Club Amontana',
        images: [
            {
                url: `${NEXT_PUBLIC_URL}/images/slider/fanionRTCAjpg`,
                width: 1200,
                height: 630,
                alt: 'Rotaract Club Amontana logo',
            },
        ],
    },
    twitter: {
        handle: '@rotaractamontana',
        site: '@rotaractamontana',
        cardType: 'summary_large_image',
    },
};

export default SEO;