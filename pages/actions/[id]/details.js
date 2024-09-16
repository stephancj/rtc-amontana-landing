import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import PageTitle from "../../../components/pagetitle";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
import Scrollbar from "../../../components/scrollbar";
import Image from "next/image";
import Logo from "/public/images/logo.png";
import { getAllActions } from "../../../services/actions.service";
import { formatDateTime } from "../../../utils/utils";
import { FILE_URL, NEXT_PUBLIC_URL, SHARE_TO_FACEBOOK, SHARE_TO_LINKEDIN, SHARE_TO_THREADS, SHARE_TO_X } from "../../../utils/constants";
import { CircularProgress } from "@mui/material";
import Slider from "react-slick";
import parse from 'html-react-parser';
import ActionSidebar from '../sidebar';



const ActionPage = () => {
const router = useRouter();
const { id } = router.query;
const [allActions, setallActions] = useState([]);
const [action, setAction] = useState(null);
const [previousAction, setpreviousAction] = useState(null);
const [nextAction, setnextAction] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [relatedActions, setRelatedActions] = useState([]);


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
        borderRadius: '10px 10px 10px 10px',
        objectFit: 'cover',
        height: '307.27px'
    }

}

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
    const fetchAction = async () => {
        try {
        const allActions = await getAllActions();
        setallActions(allActions);

        } catch (error) {
        console.error("Failed to fetch action:", error);
        } finally {
        setIsLoading(false);
        }
    };

    fetchAction();
    }
}, [id]);// Dépendance sur l'id pour recharger les données quand il change

useEffect(() => {
    if (allActions.length > 0) {
        const action = allActions.find((action) => action.id === id);
        const actionIndex = allActions.findIndex((action) => action.id === id);

        setAction(action);
        const previousAction = allActions[actionIndex + 1] || null;

        setpreviousAction(previousAction);
        const nextAction = allActions[actionIndex - 1] || null;    
        setnextAction(nextAction);

        const relatedActions = allActions.filter((action) => {
            const hasSameAof = action.aof.some((aof) => action.aof.includes(aof));
            return hasSameAof && action.id !== id;
        });

        setRelatedActions(relatedActions);
    }
}, [allActions]);

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
                        pageTitle={action?.title || "Événement"}
                        pagesub="Actions"
                        backgroundImage={FILE_URL(
                        action?.collectionId,
                        action?.id,
                        action?.image
                        )}
                    />
                    <section className="wpo-blog-single-section section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col col-lg-8">
                                    <div className="wpo-blog-content">
                                        <div className="post format-standard-image">
                                            <div className="entry-meta">
                                                <ul>
                                                    <li>
                                                        <i className="fi flaticon-calendar"></i>{" "}
                                                        {formatDateTime(action?.date)}
                                                    </li>
                                                    <li>
                                                        <i className="fi flaticon-location"></i>{" "}
                                                        {action?.location}
                                                    </li>
                                                </ul>
                                            </div>
                                            <h2>{action?.title}</h2>
                                            <div>
                                                {parse(`${action?.description}`)}
                                            </div>

                                            {action?.quote && (
                                                <blockquote>{action?.quote}</blockquote>
                                            )}

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
                                                    href={previousAction!==null ? '/actions/[id]/details' : '#'}
                                                    as={previousAction!==null ? `/actions/${previousAction?.id}/details` : '#'}
                                                >
                                                <span className="post-control-link">
                                                    Evénement précédent
                                                </span>
                                                <span className="post-name">
                                                {previousAction ? previousAction?.title : 'Pas d\'évenement antérieure'}
                                                </span>
                                                </Link>
                                            </div>
                                            <div className="next-post">
                                                <Link 
                                                    href={nextAction!==null ? '/actions/[id]/details' : '#'} 
                                                    as={nextAction!==null ? `/actions/${nextAction?.id}/details` : '#'}
                                                >
                                                    <span className="post-control-link">Evénement suivant</span>
                                                    <span className="post-name">
                                                        {nextAction ? nextAction?.title : 'Vous êtes à jour sur notre actualité'}
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ActionSidebar 
                                    relatedActions={relatedActions}
                                    tags={action?.expand?.aof}
                                />
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

export default ActionPage;
