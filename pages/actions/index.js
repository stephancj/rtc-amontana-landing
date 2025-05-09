import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import ProjectSection from '../../components/ProjectSection';
import { getAllActions } from "../../services/actions.service";
import { NextSeo } from 'next-seo';
import { NEXT_PUBLIC_URL, FILE_URL } from '../../utils/constants';


const ActionsPage =({actions}) => {
    return(
        <Fragment>
            <NextSeo
              title='Nos Actions | Rotaract Amontana Madagascar'
              description="Découvrez les actions citoyennes, humanitaires et solidaires menées par le Rotaract Amontana. Engagez-vous pour un impact durable à Madagascar."
              canonical={`https://www.rotaractamontana.org/actions`}
              openGraph={{
                  title: 'Nos Actions | Rotaract Amontana Madagascar',
                  description: 'Découvrez les actions citoyennes, humanitaires et solidaires menées par le Rotaract Amontana. Engagez-vous pour un impact durable à Madagascar.',
                  url: `${NEXT_PUBLIC_URL}/actions`,
                  images: actions.map((action) => (
                    [
                      {
                          url: FILE_URL(action?.collectionId, action?.id, action?.image),
                          width: 800,
                          height: 600,
                          alt: action.title,
                      },
                    ]
                  )),
                  site_name: 'Rotaract Club Amontana',
              }}
            />
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'Nos Actions'} pagesub={'Découvrez les actions citoyennes, humanitaires et solidaires menées par le Rotaract Amontana. Engagez-vous pour un impact durable à Madagascar.'}/> 
            <ProjectSection items={actions} type={'event'} pbClass={'pb-0'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ActionsPage;

export async function getServerSideProps(context) {

  try {
    const actions = await getAllActions();
    return {
      props: {actions},
    };
  } catch (error) {
    console.error("Erreur serveur côté event:", error);
    return {
      notFound: true,
    };
  }
}
