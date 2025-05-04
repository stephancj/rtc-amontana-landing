// pages/actions/[slug]/index.js
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PageTitle from "../../../components/pagetitle";
import Footer from "../../../components/footer";
import Scrollbar from "../../../components/scrollbar";
import Image from "next/image";
import Logo from "/public/images/logo.png";
import { getAllActions } from "../../../services/actions.service";
import { formatDateTime } from "../../../utils/utils";
import { FILE_URL, NEXT_PUBLIC_URL, SHARE_TO_FACEBOOK, SHARE_TO_LINKEDIN, SHARE_TO_THREADS, SHARE_TO_X } from "../../../utils/constants";
import Slider from "react-slick";
import parse from 'html-react-parser';
import ActionSidebar from '../sidebar';
import Navbar2 from "../../../components/Navbar2";
import { NextSeo, ArticleJsonLd } from "next-seo";

const ActionPage = ({ action, previousAction, nextAction, relatedActions }) => {
    const router = useRouter();

    const styles = {
        gallery: {
            overflow: 'hidden',
            margin: '40px -7.5px 0',
        },
        galleryDiv: {
            width: 'calc(100% - 7.5px)',
            float: 'left',
            margin: '10px 7.5px 15px'
        },
        actionImage: {
            width: '98%',
            borderRadius: '10px',
            objectFit: 'cover',
            height: '307.27px'
        }
    };

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
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <Fragment>
            <NextSeo
                title={action?.meta_title || action?.title}
                description={action?.meta_desc || 'Découvrez notre action'}
                canonical={`${NEXT_PUBLIC_URL}/actions/${action?.slug}/details`}
                openGraph={{
                    title: action?.meta_title || action?.title,
                    description: action?.meta_desc || action?.description || 'Découvrez notre action',
                    url: `${NEXT_PUBLIC_URL}/actions/${action?.slug}/details`,
                    images: [
                        {
                            url: FILE_URL(action?.collectionId, action?.id, action?.image),
                            width: 800,
                            height: 600,
                            alt: action?.title,
                        },
                    ],
                    site_name: 'Rotaract Club Amontana',
                }}
            />

            <ArticleJsonLd
                url={`${NEXT_PUBLIC_URL}/actions/${action?.slug}/details`}
                title={action?.meta_title || action?.title}
                images={[FILE_URL(action?.collectionId, action?.id, action?.image)]}
                datePublished={action?.created}
                authorName={action?.author || "Responsable Image Publique"}
                publisherName="Rotaract Club Amontana"
                publisherLogo={`${NEXT_PUBLIC_URL}/images/slider/fanionRTCA.webp`}
                description={action?.meta_desc || "Découvrez notre action"}
            />

            <Navbar2 Logo={Logo} />
            <PageTitle
                pageTitle={action?.title || "Événement"}
                pagesub="Actions"
                backgroundImage={FILE_URL(action?.collectionId, action?.id, action?.image)}
            />
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="wpo-blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-calendar"></i> {formatDateTime(action?.date)}</li>
                                            <li><i className="fi flaticon-location"></i> {action?.location}</li>
                                        </ul>
                                    </div>
                                    <h2>{action?.title}</h2>
                                    <div>{parse(`${action?.description}`)}</div>
                                    {action?.quote && <blockquote>{action?.quote}</blockquote>}
                                    <div className="gallery" style={styles.gallery}>
                                        <Slider {...settings} className="sliderImage">
                                            {action?.gallery.map((image, index) => (
                                                <div key={index} style={styles.galleryDiv}>
                                                    <Image
                                                        style={styles.actionImage}
                                                        className="actionImage"
                                                        src={`${FILE_URL(action?.collectionId, action?.id, image)}?token=`}
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
                                            <li><Link href={SHARE_TO_FACEBOOK(`${NEXT_PUBLIC_URL}${router.asPath}`)} target="_blank">facebook</Link></li>
                                            <li><Link href={SHARE_TO_X(`${NEXT_PUBLIC_URL}${router.asPath}`)} target="_blank">X(Twitter)</Link></li>
                                            <li><Link href={SHARE_TO_THREADS(`${NEXT_PUBLIC_URL}${router.asPath}`)} target="_blank">threads</Link></li>
                                            <li><Link href={SHARE_TO_LINKEDIN(`${NEXT_PUBLIC_URL}${router.asPath}`)} target="_blank">linkedin</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="more-posts">
                                    <div className="previous-post">
                                        <Link href={previousAction ? `/actions/${previousAction?.slug}/details` : '#'}>
                                            <span className="post-control-link">Evénement précédent</span>
                                            <span className="post-name">{previousAction ? previousAction?.title : 'Pas d\'événement antérieur'}</span>
                                        </Link>
                                    </div>
                                    <div className="next-post">
                                        <Link href={nextAction ? `/actions/${nextAction?.slug}/details` : '#'}>
                                            <span className="post-control-link">Evénement suivant</span>
                                            <span className="post-name">{nextAction ? nextAction?.title : 'Vous êtes à jour sur notre actualité'}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ActionSidebar relatedActions={relatedActions} tags={action?.expand?.aof} />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export async function getServerSideProps(context) {
    const { slug } = context.params;

    try {
        const allActions = await getAllActions();
        const currentIndex = allActions.findIndex(action => action.slug === slug);
        if (currentIndex === -1) {
            return { notFound: true };
        }

        const action = allActions[currentIndex];
        const previousAction = allActions[currentIndex + 1] || null;
        const nextAction = allActions[currentIndex - 1] || null;

        const relatedActions = allActions.filter(item =>
            item.slug !== slug &&
            item.aof.some(aof => action.aof.includes(aof))
        );

        return {
            props: {
                action,
                previousAction,
                nextAction,
                relatedActions
            }
        };
    } catch (error) {
        console.error("Erreur getServerSideProps:", error);
        return {
            notFound: true
        };
    }
}

export default ActionPage;