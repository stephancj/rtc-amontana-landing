import { NEXT_PUBLIC_URL } from "./utils/constants";

const SEO = {
    title: "Rotaract Club Amontana – Antananarivo, Madagascar",
    description: "Découvrez le Rotaract Club Antananarivo Amontana, à Madagascar : actions sociales, événements, leadership jeune et engagement communautaire.",
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: NEXT_PUBLIC_URL,
        title: "Rotaract Club Amontana – Antananarivo, Madagascar",
        site_name: 'Rotaract Club Amontana',
        images: [
            {
                url: `${NEXT_PUBLIC_URL}/images/logoRTCASquare.webp`,
                width: 720,
                height: 720,
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