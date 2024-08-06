import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PageTitle from "../../../components/pagetitle";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
import Scrollbar from "../../../components/scrollbar";
import Image from "next/image";
import Logo from "/public/images/logo.png";
import { getAllEvents } from "../../../services/events.service";
import { formatDateTime } from "../../../utils/utils";
import { FILE_URL, NEXT_PUBLIC_URL, SHARE_TO_FACEBOOK, SHARE_TO_LINKEDIN, SHARE_TO_THREADS, SHARE_TO_X } from "../../../utils/constants";
import { CircularProgress } from "@mui/material";
import Slider from "react-slick";


const EventPage = () => {
const router = useRouter();
const { id } = router.query;
const [allEvents, setAllEvents] = useState([]);
const [event, setEvent] = useState(null);
const [previousEvent, setPreviousEvent] = useState(null);
const [nextEvent, setNextEvent] = useState(null);
const [isLoading, setIsLoading] = useState(true);

const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

useEffect(() => {
    if (id) {
    // Vérifier que l'id est défini avant de faire l'appel à l'API
    const fetchEvent = async () => {
        try {
        const allEvents = await getAllEvents();
        setAllEvents(allEvents);

        } catch (error) {
        console.error("Failed to fetch event:", error);
        } finally {
        setIsLoading(false);
        }
    };

    fetchEvent();
    }
}, [id]);// Dépendance sur l'id pour recharger les données quand il change

useEffect(() => {
    if (allEvents.length > 0) {
    const event = allEvents.find((event) => event.id === id);
    const eventIndex = allEvents.findIndex((event) => event.id === id);
    console.log('eventIndex', eventIndex);
    setEvent(event);
    const previousEvent = allEvents[eventIndex + 1] || null;

    setPreviousEvent(previousEvent);
    const nextEvent = allEvents[eventIndex - 1] || null;    
    setNextEvent(nextEvent);
    }
}, [allEvents]);

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
                <CircularProgress />
                </div>
            ) : (
                <Fragment>
                    <Navbar Logo={Logo} />
                    <PageTitle
                        pageTitle={event?.title || "Événement"}
                        pagesub="Actualités"
                        backgroundImage={FILE_URL(
                        event?.collectionId,
                        event?.id,
                        event?.image
                        )}
                    />
                    <section className="wpo-blog-single-section section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-10 offset-lg-1">
                                    <div className="wpo-blog-content">
                                        <div className="post format-standard-image">
                                            <div className="entry-meta">
                                                <ul>
                                                    <li>
                                                        <i className="fi flaticon-calendar"></i>{" "}
                                                        {formatDateTime(event?.date)}
                                                    </li>
                                                    <li>
                                                        <i className="fi flaticon-location"></i>{" "}
                                                        {event?.location}
                                                    </li>
                                                </ul>
                                            </div>
                                            <h2>{event?.title}</h2>
                                            <div>
                                                {parse(action?.description)}
                                            </div>
                                            <blockquote>{event?.quote}</blockquote>

                                            <div className="gallery">
                                                <Slider {...settings} className="sliderImage">
                                                    {event?.gallery.map((image, index) => (
                                                        <div key={index}>
                                                            <Image 
                                                                className="eventImage"
                                                                src={`${FILE_URL(event?.collectionId, event?.id, image)}?token=`} 
                                                                height={500}
                                                                width={500}
                                                                alt={image} 
                                                            />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        </div>

                                        <div className="tag-share-s2 clearfix">
                                            <div className="tag">
                                                <span>Partager sur: </span>
                                                <ul>
                                                <li>
                                                    <Link href={SHARE_TO_FACEBOOK(`${NEXT_PUBLIC_URL}${router.asPath}`)} target="_blank">facebook</Link>
                                                </li>
                                                <li>
                                                    <Link href={SHARE_TO_X(`${NEXT_PUBLIC_URL}${router.asPath}`)} target="_blank">X(Twitter)</Link>
                                                </li>
                                                <li>
                                                    <Link href={SHARE_TO_THREADS(`${NEXT_PUBLIC_URL}${router.asPath}`)} target="_blank">threads</Link>
                                                </li>
                                                <li>
                                                    <Link href={SHARE_TO_LINKEDIN(`${NEXT_PUBLIC_URL}${router.asPath}`)} target="_blank">linkedin</Link>
                                                </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="more-posts">
                                            <div className="previous-post">
                                                <Link 
                                                    href={previousEvent!==null ? '/events/[id]/details' : '#'}
                                                    as={previousEvent!==null ? `/events/${previousEvent?.id}/details` : '#'}
                                                >
                                                <span className="post-control-link">
                                                    Evénement précédent
                                                </span>
                                                <span className="post-name">
                                                {previousEvent ? previousEvent?.title : 'Pas d\'évenement antérieure'}
                                                </span>
                                                </Link>
                                            </div>
                                            <div className="next-post">
                                                <Link 
                                                    href={nextEvent!==null ? '/events/[id]/details' : '#'} 
                                                    as={nextEvent!==null ? `/events/${nextEvent?.id}/details` : '#'}
                                                >
                                                    <span className="post-control-link">Evénement suivant</span>
                                                    <span className="post-name">
                                                        {nextEvent ? nextEvent?.title : 'Vous êtes à jour sur notre actualité'}
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                    <Scrollbar />
                </Fragment>
            )}
        </div>
    );
};

export default EventPage;
