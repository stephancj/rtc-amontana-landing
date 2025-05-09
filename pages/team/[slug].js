// pages/members/[slug].js
import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import Footer from '../../components/footer';
import Image from 'next/image';
import Logo from '/public/images/logo.png';
import { getAllMembers } from '../../services/members.service';
import { FILE_URL, NEXT_PUBLIC_URL } from '../../utils/constants';
import parse from 'html-react-parser';
import { NextSeo } from 'next-seo';
import Head from 'next/head';


const TeamSingle = ({ member }) => {
    const router = useRouter();

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: member.fullname,
                            jobTitle: member.function,
                            image: FILE_URL(member.collectionId, member.id, member.image),
                            url: `${NEXT_PUBLIC_URL}/team/${member.slug}`,
                            worksFor: {
                                "@type": "Organization",
                                name: "Rotaract Club Amontana",
                            },
                        }),
                    }}
                />
            </Head>
            <Fragment>
                <NextSeo
                    title={`${member.fullname}`}
                    description={`Profil de ${member.fullname}, ${member.function} au sein du Rotaract club Amontana.`}
                    canonical={`https://www.rotaractamontana.org/team/${member.slug}`}
                    openGraph={{
                    title: `${member.fullname}`,
                    description: `Profil de ${member.fullname}, ${member.function} au sein du Rotaract club Amontana.`,
                    url: `${NEXT_PUBLIC_URL}/team/${member.slug}`,
                    type: 'profile',
                    profile: {
                        firstName: `${member.fullname}`.split(' ')[0],
                        lastName: `${member.fullname}`.split(' ')[`${member.fullname}`.split(' ').length - 1],
                        username: member.slug
                    },
                    images: [
                        {
                        url: FILE_URL(member.collectionId, member.id, member.image),
                        width: 800,
                        height: 600,
                        alt: member.fullname,
                        },
                    ],
                    }}
                />
                <Navbar Logo={Logo} />
                <PageTitle pageTitle={member?.fullname} pagesub="Membres" />
                <div className="attorney-pg-area section-padding">
                    <div className="container">
                        <div className="attorney-info-wrap">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="attorney-info-img">
                                        <Image
                                            src={FILE_URL(member?.collectionId, member?.id, member?.image)}
                                            width={500}
                                            height={500}
                                            alt={member?.fullname}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="attorney-info-text">
                                        <h2>{member?.fullname}</h2>
                                        <ul>
                                            <li>Fonction dans le club:<span>{member?.function || '-'}</span></li>
                                            <li>Classification:<span>{member?.job || '-'}</span></li>
                                            <li>Email:<span>{member?.email || '-'}</span></li>
                                            <li>Centre d'intérets:<span>{member?.hobbies || '-'}</span></li>
                                            <li>Linkedin:<span>{member?.linkedin || '-'}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="exprience-area">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* <div className="exprience-wrap">
                                        <h2>Personal Experience</h2>
                                        <p>... contenu ...</p>
                                    </div>
                                    <div className="education-area ex-wiget">
                                        <h2>Education</h2>
                                        <ul>
                                            <li>... contenu ...</li>
                                        </ul>
                                    </div>
                                    <div className="language-area ex-wiget">
                                        <h2>Language</h2>
                                        <ul>
                                            <li>... contenu ...</li>
                                        </ul>
                                    </div> */}
                                    {parse(`${member?.description}`)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <Scrollbar />
            </Fragment>
        </div>
    );
};

export default TeamSingle;

export async function getServerSideProps(context) {
    const { slug } = context.params;

    try {
        const members = await getAllMembers();
        const member = members.find((item) => item.slug === slug);

        if (!member) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                member,
            },
        };
    } catch (error) {
        console.error("Erreur lors du chargement du membre:", error);
        return {
            notFound: true,
        };
    }
}
