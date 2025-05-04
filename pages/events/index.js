import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import ProjectSection from '../../components/ProjectSection';
import { getAllEvents } from "../../services/events.service";
import { NextSeo } from 'next-seo';
import { NEXT_PUBLIC_URL, FILE_URL } from '../../utils/constants';


const EventsPage =({events}) => {
    return(
        <Fragment>
            <NextSeo
                title='Événements | Rotaract Club Amontana, Antananarivo'
                description="Découvrez les événements auxquels le Rotaract Club Amontana, Antananarivo, Madagascar a participé, incluant des conférences, ateliers, forums et initiatives communautaires."
                canonical={`${NEXT_PUBLIC_URL}/events`}
                openGraph={{
                    title: 'Événements | Rotaract Club Amontana, Antananarivo',
                    description: 'Découvrez les événements auxquels le Rotaract Club Amontana, Antananarivo, Madagascar a participé, incluant des conférences, ateliers, forums et initiatives communautaires.',
                    url: `${NEXT_PUBLIC_URL}/events`,
                    images: events.map((event, Eitem) => (
                      [
                        {
                            url: FILE_URL(event?.collectionId, event?.id, event?.image),
                            width: 800,
                            height: 600,
                            alt: event.title,
                        },
                      ]
                    )),
                    site_name: 'Rotaract Club Amontana',
                }}
            />
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'Nos actualités'} pagesub={'Découvrez les événements auxquels le Rotaract Club Amontana, Antananarivo, Madagascar a participé, incluant des conférences, ateliers, forums et initiatives communautaires.'}/> 
            <ProjectSection items={events} type={'event'} pbClass={'pb-0'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default EventsPage;

export async function getServerSideProps(context) {

  try {
    const events = await getAllEvents();
    return {
      props: {
        events
      },
    };
  } catch (error) {
    console.error("Erreur serveur côté event:", error);
    return {
      notFound: true,
    };
  }
}
