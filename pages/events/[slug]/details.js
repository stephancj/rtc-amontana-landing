import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextSeo, ArticleJsonLd, EventJsonLd } from "next-seo";

import PageTitle from "../../../components/pagetitle";
import Footer from "../../../components/footer";
import Scrollbar from "../../../components/scrollbar";
import Navbar2 from "../../../components/Navbar2";

import { getAllEvents } from "../../../services/events.service";
import { formatDateTime } from "../../../utils/utils";
import {
  FILE_URL,
  NEXT_PUBLIC_URL,
  SHARE_TO_FACEBOOK,
  SHARE_TO_LINKEDIN,
  SHARE_TO_THREADS,
  SHARE_TO_X,
} from "../../../utils/constants";

import parse from "html-react-parser";
import Slider from "react-slick";
import Logo from "/public/images/logo.png";
import { orange } from "@mui/material/colors";

const EventPage = ({ event, previousEvent, nextEvent }) => {
  const router = useRouter();
  const url = `${NEXT_PUBLIC_URL}${router.asPath}`;

  const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 2 } },
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <NextSeo
        title={event.meta_title || event.title}
        description={event.meta_desc || "Découvrez notre événement"}
        canonical={`${NEXT_PUBLIC_URL}/events/${event.slug}/details`}
        openGraph={{
          url: `${NEXT_PUBLIC_URL}/events/${event.slug}/details`,
          title: event.meta_title || event.title,
          description: event.meta_desc || event.description || "Découvrez notre événement",
          images: [
            {
              url: FILE_URL(event.collectionId, event.id, event.image),
              width: 800,
              height: 600,
              alt: event.title,
            },
          ],
        }}
      />

      <ArticleJsonLd
        url={`${NEXT_PUBLIC_URL}/events/${event.slug}/details`}
        title={event.meta_title || event.title}
        images={[FILE_URL(event.collectionId, event.id, event.image)]}
        datePublished={event.created}
        authorName={event.author || "Responsable Image Publique"}
        publisherName="Rotaract Club Amontana"
        publisherLogo={`${NEXT_PUBLIC_URL}/images/slider/fanionRTCA.webp`}
        description={event.meta_desc || "Découvrez notre événement"}
      />

      {/* JSON-LD pour enrichissement Google */}
      <EventJsonLd
        name={event.meta_title || event.title}
        startDate={event.date}
        endDate={event.endDate || event.date}
        location={{
          name: event.location,
          address: {
            streetAddress: event.streetAddress || "",
            addressLocality: event.city || "",
            addressCountry: event.country || "MG",
          },
        }}
        url={`${NEXT_PUBLIC_URL}/events/${event.slug}/details`}
        images={[FILE_URL(event.collectionId, event.id, event.image)]}
        description={event.description}
        organizer={{
          name: event.organizerName || "Rotaract Club Amontana",
          url: event.organizerUrl ||  'https://rotaractamontana.org',
        }}
      />

      <Navbar2 Logo={Logo} />
      <PageTitle
        pageTitle={event.title}
        pagesub="Actualités"
        backgroundImage={FILE_URL(event.collectionId, event.id, event.image)}
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
                        {formatDateTime(event.date)}
                      </li>
                      <li>
                        <i className="fi flaticon-location"></i>{" "}
                        {event.location}
                      </li>
                    </ul>
                  </div>
                  <h2>{event.title}</h2>
                  <div>{parse(event.description)}</div>

                  {event?.quote && <blockquote>{event.quote}</blockquote>}

                  <div className="gallery">
                    <Slider {...settings} className="sliderImage">
                      {event.gallery.map((image, index) => (
                        <div key={index}>
                          <Image
                            className="eventImage"
                            src={`${FILE_URL(event.collectionId, event.id, image)}?token=`}
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
                        <Link href={SHARE_TO_FACEBOOK(url)} target="_blank">facebook</Link>
                      </li>
                      <li>
                        <Link href={SHARE_TO_X(url)} target="_blank">X(Twitter)</Link>
                      </li>
                      <li>
                        <Link href={SHARE_TO_THREADS(url)} target="_blank">threads</Link>
                      </li>
                      <li>
                        <Link href={SHARE_TO_LINKEDIN(url)} target="_blank">linkedin</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="more-posts">
                  <div className="previous-post">
                    <Link href={previousEvent ? `/events/${previousEvent.slug}/details` : "#"}>
                      <span className="post-control-link">Evénement précédent</span>
                      <span className="post-name">
                        {previousEvent ? previousEvent.title : "Pas d'événement antérieur"}
                      </span>
                    </Link>
                  </div>
                  <div className="next-post">
                    <Link href={nextEvent ? `/events/${nextEvent.slug}/details` : "#"}>
                      <span className="post-control-link">Evénement suivant</span>
                      <span className="post-name">
                        {nextEvent ? nextEvent.title : "Vous êtes à jour sur notre actualité"}
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
    </>
  );
};

export default EventPage;

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const allEvents = await getAllEvents();
    const eventIndex = allEvents.findIndex((e) => e.slug === slug);

    if (eventIndex === -1) {
      return { notFound: true };
    }

    const event = allEvents[eventIndex];
    const previousEvent = allEvents[eventIndex + 1] || null;
    const nextEvent = allEvents[eventIndex - 1] || null;

    return {
      props: {
        event,
        previousEvent,
        nextEvent,
      },
    };
  } catch (error) {
    console.error("Erreur serveur côté event:", error);
    return {
      notFound: true,
    };
  }
}