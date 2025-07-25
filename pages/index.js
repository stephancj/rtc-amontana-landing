import React from "react";
import About from "../components/about";
import CauseSection from "../components/CauseSection";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import Scrollbar from "../components/scrollbar";
import Service from "../components/Service";
import TeamSection from "../components/TeamSection";
import Testimonial from "../components/Testimonial";
import CtaSection from "../components/ctaSection";
import EventSection from "../components/EventSection";
import Logo from "/public/images/logo.png";
import vimg from "/public/images/volunteer.png";
import BlogSection from "../components/BlogSection";
import PartnerSection from "../components/PartnerSection";
import { getAllEvents } from "../services/events.service";
import { getAllActions } from "../services/actions.service";
import { getAllMembers } from "../services/members.service";
import { getAllAreasOfFocus } from "../services/areasOfFocus.service";
import { getPartners } from "../services/partners.service";
import { useEffect } from "react";
import { getAllUpcomingEvents } from "../services/upcomingEvents.service";
import Loader from "../components/shared/loader/loader";
import Head from "next/head";
import FAQSection from "../components/FAQSection";
import { getAllFaqs } from "../services/faqs.service";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = (props) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [events, setEvents] = React.useState([]);
    const [actions, setActions] = React.useState([]);
    const [upcomings, setUpcomings] = React.useState([]);
    const [members, setMembers] = React.useState([]);
    const [aofs, setAofs] = React.useState([]);
    const [partners, setPartners] = React.useState([]);
    const [faqs, setFaqs] = React.useState([]);

    const getAllData = async () => {
        const [aofs, events, actions, upcomings,  members, partners, faqs] = await Promise.all([
            getAllAreasOfFocus(),
            getAllEvents(),
            getAllActions(),
            getAllUpcomingEvents(),
            getAllMembers(),
            getPartners(),
            getAllFaqs()
        ]);
        setEvents(events);
        setActions(actions);
        setMembers(members);
        setUpcomings(upcomings);
        setAofs(aofs);
        setPartners(partners);
        setFaqs(faqs);
        setIsLoading(false);
    };

    useEffect(() => {
        getAllData();
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {isLoading ? (
            <div style={{
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                height: "100vh"}}
            >
                <Loader />
            </div>
        ) : (
            <div>
                <Navbar Logo={Logo} />
                <Hero members={members}/>
                <About />
                <Service 
                    aofs={aofs}
                    Fclass={"wpo-features-section-s2"} 
                    vclassClass={"v1"} 
                />
                <BlogSection events={events} />
                <CauseSection actions={actions}/>
                {/* upcoming events and actions */}
                <EventSection upcomings={upcomings}/>
                <TeamSection members={members} />
                {/* <Testimonial/> */}
                <CtaSection
                    vImg={vimg}
                    cTitle={"Rejoignez-nous, transformez des vies, vivez la magie"}
                />
                <PartnerSection partners={partners} />
                <FAQSection faqs={faqs} />
                <Footer />
                <Scrollbar />
            </div>
        )}
    </div>
    );
};
export default HomePage;
