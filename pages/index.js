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
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { getAllUpcomingEvents } from "../services/upcomingEvents.service";

const HomePage = (props) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [events, setEvents] = React.useState([]);
    const [actions, setActions] = React.useState([]);
    const [upcomings, setUpcomings] = React.useState([]);
    const [members, setMembers] = React.useState([]);
    const [aofs, setAofs] = React.useState([]);

    const getAllData = async () => {
        const [aofs, events, actions, upcomings,  members] = await Promise.all([
            getAllAreasOfFocus(),
            getAllEvents(),
            getAllActions(),
            getAllUpcomingEvents(),
            getAllMembers()
        ]);
        setEvents(events);
        setActions(actions);
        setMembers(members);
        setUpcomings(upcomings);
        setAofs(aofs);
        setIsLoading(false);
    };

    useEffect(() => {
        getAllData();
    }, []);

    return (
    <div>
        {isLoading ? (
            <div style={{
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                height: "100vh"}}
            >
                <CircularProgress/>
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
            <PartnerSection />
            <Footer />
            <Scrollbar />
        </div>
        )}
    </div>
    );
};
export default HomePage;
