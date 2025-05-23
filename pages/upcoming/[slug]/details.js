// pages/evenements/[slug]/index.js
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { NextSeo, ArticleJsonLd, EventJsonLd } from 'next-seo';
import PageTitle from '../../../components/pagetitle';
import Scrollbar from '../../../components/scrollbar';
import EventTabs from './alltab';
import Footer from '../../../components/footer';
import Logo from '/public/images/logo.png';
import { getAllUpcomingEvents } from '../../../services/upcomingEvents.service';
import parse from 'html-react-parser';
import { FILE_URL, NEXT_PUBLIC_URL } from '../../../utils/constants';
import Navbar2 from '../../../components/Navbar2';

const TeamSinglePage = ({ upcoming }) => {
    const router = useRouter();

    const imageUrl = FILE_URL(upcoming.collectionId, upcoming.id, upcoming.image);

    return (
        <Fragment>
            <NextSeo
                title={upcoming.title}
                description={upcoming.meta_desc || 'Découvrez cet événement à venir'}
                canonical={`https://www.rotaractamontana.org/upcoming/${upcoming.slug}/details`}
                openGraph={{
                    title: upcoming.meta_title,
                    description: upcoming.meta_desc || upcoming.description ||'Découvrez cet événement à venir',
                    url: `${NEXT_PUBLIC_URL}/upcoming/${upcoming.slug}/details`,
                    images: [
                        {
                            url: imageUrl,
                            width: 800,
                            height: 600,
                            alt: upcoming.meta_title,
                        },
                    ],
                    site_name: 'Rotaract Club Amontana',
                }}
            />
            <ArticleJsonLd
                url={`${NEXT_PUBLIC_URL}/upcoming/${upcoming?.slug}/details`}
                title={upcoming?.meta_title || upcoming?.title}
                images={[FILE_URL(upcoming?.collectionId, upcoming?.id, upcoming?.image)]}
                datePublished={upcoming?.created}
                authorName={upcoming?.author || "Responsable Image Publique"}
                publisherName="Rotaract Club Amontana"
                publisherLogo={`${NEXT_PUBLIC_URL}/images/logoRTCASquare.webp`}
                description={upcoming?.meta_desc || "Découvrez notre prochain event"}
            />
            <EventJsonLd
                name={upcoming.meta_title || upcoming.title}
                startDate={upcoming.date}
                endDate={upcoming.endDate || upcoming.date}
                location={{
                    name: upcoming.location,
                    address: {
                    streetAddress: upcoming.streetAddress || "",
                    addressLocality: upcoming.city || "",
                    addressCountry: upcoming.country || "MG",
                    },
                }}
                url={`${NEXT_PUBLIC_URL}/upcoming/${upcoming?.slug}/details`}
                images={[FILE_URL(upcoming.collectionId, upcoming.id, upcoming.image)]}
                description={upcoming.description}
                organizer={{
                    name: upcoming.organizerName || "Rotaract Club Amontana",
                    url: upcoming.organizerUrl ||  'https://rotaractamontana.org',
                }}
                eventStatus={'EventScheduled'}
                offers={[]}
                eventAttendanceMode={'OfflineEventAttendanceMode'} //MixedEventAttendanceMode, OnlineEventAttendanceMode
                performers={['Rotaract Club Amontana']}
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
