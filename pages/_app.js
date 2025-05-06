import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'photoswipe/dist/photoswipe.css'
import '../styles/sass/style.scss'
import { GoogleAnalytics } from '@next/third-parties/google'
import { DefaultSeo, LogoJsonLd } from "next-seo";
import SEO from "../next-seo.config";
import { NEXT_PUBLIC_URL } from "../utils/constants";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <DefaultSeo {...SEO} />
      <LogoJsonLd
        logo="https://rotaractamontana.org/images/logoRTCASquare.webp"
        url="https://rotaractamontana.org"
      />
      <OrganizationJsonLd
        type="Organization"
        id="46058"
        logo= {`${NEXT_PUBLIC_URL}/images/logoRTCASquare.webp`}
        legalName="Rotaract Club Antananarivo-Amontana"
        name="Rotaract Club Amontana"
        address={{
          streetAddress: '',
          addressLocality: 'Antananarivo',
          addressRegion: 'Analamanga',
          postalCode: '101',
          addressCountry: 'MG',
        }}
        contactPoint={[
          {
            telephone: '',
            contactType: 'contact',
            email: 'contact@rotaractamontana.org',
            areaServed: 'MG',
            availableLanguage: ['English', 'French', 'Malagasy'],
          },
        ]}
        sameAs={[]}
        url={NEXT_PUBLIC_URL}
      />
      <Component {...pageProps} />
      <ToastContainer />
      <GoogleAnalytics gaId="G-8VNPWXF8HV" />
    </div>

  )
}

export default MyApp
