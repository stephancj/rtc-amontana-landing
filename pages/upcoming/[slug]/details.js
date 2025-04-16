// pages/evenements/[slug]/index.js
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import PageTitle from '../../../components/pagetitle';
import Scrollbar from '../../../components/scrollbar';
import EventTabs from './alltab';
import Footer from '../../../components/footer';
import Logo from '/public/images/logo.png';
import { getAllUpcomingEvents } from '../../../services/upcomingEvents.service';
import parse from 'html-react-parser';
import { FILE_URL } from '../../../utils/constants';
import Navbar2 from '../../../components/Navbar2';

const TeamSinglePage = ({ upcoming }) => {
    const router = useRouter();
    
    const imageUrl = FILE_URL(upcoming.collectionId, upcoming.id, upcoming.image);

    return (
        <Fragment>
            <NextSeo
                title={upcoming.title}
                description={upcoming.shortDescription || 'Découvrez cet événement à venir'}
                openGraph={{
                    title: upcoming.title,
                    description: upcoming.shortDescription || 'Découvrez cet événement à venir',
                    url: `https://rotaractamontana.netlify.app/upcoming/${upcoming.slug}/details`,
                    images: [
                        {
                            url: imageUrl,
                            width: 800,
                            height: 600,
                            alt: upcoming.title,
                        },
                    ],
                    site_name: 'Rotaract Amontana',
                }}
            />
            <Navbar2 Logo={Logo} />
            <PageTitle
                pageTitle={upcoming.title}
                pagesub={'Prochainement'}
                backgroundImage={imageUrl}
            />
            <div className="wpo-event-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12">
                            <div className="wpo-event-item">
                                <div className="wpo-event-details-text">
                                    <p>{parse(`${upcoming.description}`)}</p>
                                </div>
                                <EventTabs
                                    schedule={upcoming.schedule}
                                    coordinates={upcoming.coordinates}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export async function getServerSideProps(context) {
    const { slug } = context.params;

    try {
        const allUpcomings = await getAllUpcomingEvents();
        const upcoming = allUpcomings.find(ev => ev.slug === slug) || null;

        return {
            props: {
                upcoming,
            },
        };
    } catch (error) {
        console.error('Erreur dans getServerSideProps :', error);
        return {
            notFound: true,
        };
    }
}

export default TeamSinglePage;
