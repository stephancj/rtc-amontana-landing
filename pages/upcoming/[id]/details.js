import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Events from '../../../api/event'
import Navbar from '../../../components/Navbar';
import PageTitle from '../../../components/pagetitle'
import Scrollbar from '../../../components/scrollbar'
import EventTabs from './alltab'
import Footer from '../../../components/footer';
import Logo from '/public/images/logo.png'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getAllUpcomingEvents } from '../../../services/upcomingEvents.service';
import parse from 'html-react-parser';
import Loader from '../../../components/shared/loader/loader';

const TeamSinglePage = (props) => {
    const router = useRouter();
    const { id } = router.query;
    const [allUpcomings, setAllUpcomings] = useState([]);
    const [upcoming, setUpcoming] = useState(null);
    const [previousUpcoming, setPreviousUpcoming] = useState(null);
    const [nextUpcoming, setNextUpcoming] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [relatedUpcoming, setRelatedUpcoming] = useState([]);

    const eventDetails = Events.find(item => item.slug === router.query.slug)

    useEffect(() => {
        if (id) {
        // Vérifier que l'id est défini avant de faire l'appel à l'API
        const fetchUpcoming = async () => {
            try {
            const allUpcomings = await getAllUpcomingEvents();
            setAllUpcomings(allUpcomings);
    
            } catch (error) {
            console.error("Failed to fetch upcoming:", error);
            } finally {
            setIsLoading(false);
            }
        };
    
        fetchUpcoming();
        }
    }, [id]);// Dépendance sur l'id pour recharger les données quand il change

    useEffect(() => {
        if (allUpcomings.length > 0) {
        const upcoming = allUpcomings.find((upcoming) => upcoming.id === id);
    
        setUpcoming(upcoming);    
        }
    }, [allUpcomings]);

    return (
        <div>
            {isLoading ? (
                <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
                >
                <Loader />
                </div>
            ) : (
                <Fragment>
                    <Navbar Logo={Logo} />
                    <PageTitle pageTitle={eventDetails?.eTitle} pagesub={'Case Single'} />
                    <div className="wpo-event-details-area section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-12">
                                    <div className="wpo-event-item">
                                        <div className="wpo-event-img">
                                            <Image src={eventDetails?.eImg} alt=""/>
                                        </div>
                                        <div className="wpo-event-details-text">
                                            <h2>{upcoming?.title}</h2>
                                            <p>{parse(`${upcoming?.description}`)}</p>
                                        </div>
                                        <EventTabs 
                                            schedule={upcoming?.schedule}
                                            coordinates={upcoming?.coordinates}
                                        />
                                    </div>
                                </div>
                                {/* <EventSidebar/> */}
                            </div>
                        </div>
                    </div>
                    <Footer />
                    <Scrollbar />
                </Fragment>
            )}
        </div>
    )
};
export default TeamSinglePage;
