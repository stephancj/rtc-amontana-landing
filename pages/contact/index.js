import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import { NextSeo } from 'next-seo';
import { NEXT_PUBLIC_URL } from '../../utils/constants';

const ContactPage =() => {
    return(
        <Fragment>
            <NextSeo
                title={'Contact | Rotaract Club Amontana, Antananarivo'}
                description={"Contactez le Rotaract Club Amontana à Antananarivo pour en savoir plus sur nos actions, événements et partenariats."}
                canonical={`https://www.rotaractamontana.org/contact`}
                openGraph={{
                    url: `${NEXT_PUBLIC_URL}/contact`,
                    title: 'Contact | Rotaract Club Amontana, Antananarivo',
                    description: "Contactez le Rotaract Club Amontana à Antananarivo pour en savoir plus sur nos actions, événements et partenariats.",
                    images: [
                    {
                        url: `${NEXT_PUBLIC_URL}/images/logoRTCASquare.webp`,
                        width: 800,
                        height: 600,
                        alt: 'Logo du RTC Amontana',
                    },
                    ],
                }}
            />
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

