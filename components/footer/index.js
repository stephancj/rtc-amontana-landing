import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '/public/images/Club-Rotaract_LogoLockup_FR21.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FILE_URL } from '../../utils/constants';
import { getAllEvents } from "../../services/events.service";
import { getAllActions } from "../../services/actions.service";
import { Modal } from '@mui/material';

const Footer = (props) => {
    const router = useRouter();

    const [gallery, setGallery] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const ClickHandler = (id) => {
        return (e) => {
            e.preventDefault();
            const currentPath = router.pathname;
            if (currentPath === '/') {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.hash = id;
                }
                return;
            } else {
                router.push(`/?id=${id}`);
            }
        };
    };

    const currentYear = new Date().getFullYear();

    const getGalleryData = async () => {
        const [events, actions] = await Promise.all([
            getAllEvents(),
            getAllActions(),
        ]);
    
        const data = [...events, ...actions];
    
        // Combine all galleries from each item in data and add collectionId and id to each image
        const combinedGallery = data.reduce((acc, item) => {
            const updatedGallery = item.gallery.map(image => ({
                image: image,          // Keep original image properties
                collectionId: item.collectionId,  // Add collectionId from the parent item
                id: item.id        // Add id from the parent item
            }));
    
            // Add the updated gallery of the current item to the accumulator
            return acc.concat(updatedGallery);
        }, []);
    
        // Shuffle the final combined gallery array
        const shuffledGallery = combinedGallery.sort(() => Math.random() - 0.5);
    
        // Set the state with the shuffled combined gallery
        setGallery(shuffledGallery);
    };    

    useEffect(() => {
        getGalleryData();
    }, []);

    const handleOpen = (image) => {
        setCurrentImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentImage(null);
    };

    const handleNext = () => {
        const currentIndex = gallery.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % gallery.length;
        setCurrentImage(gallery[nextIndex]);
    };

    const handlePrev = () => {
        const currentIndex = gallery.indexOf(currentImage);
        const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
        setCurrentImage(gallery[prevIndex]);
    };

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="blog" />
                                </div>
                                <p>Ensemble, construisons un avenir meilleur. Le Rotaract Club unit les jeunes pour servir leur communauté.</p>
                                <ul>
                                    <li>
                                        <Link href="https://www.facebook.com/rotaractamontana" target='_blank'>
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/rotaract_amontana/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Menu</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler('about')} href="/about">A propos</Link></li>
                                    <li><Link onClick={ClickHandler('causes')} href="/cause">Causes</Link></li>
                                    <li><Link onClick={ClickHandler('actions')} href="/contact">Actions</Link></li>
                                    <li><Link onClick={ClickHandler('events')} href="/event">Actualités</Link></li>
                                    <li><Link onClick={ClickHandler('team')} href="/gallery">Equipe</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="contact-ft">
                                    <p>Si vous avez des questions, n'hésitez pas à nous contacter</p>
                                    <ul>
                                        <li><i className="fi flaticon-mail"></i>contact@rotaractamontana.org</li>
                                        <li><i className="fi flaticon-phone-call"></i>+261 XX XX XXX XX</li>
                                        <li><i className="fi flaticon-location"></i>Madagascar – Antananarivo, 101</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Gallerie</h3>
                                </div>
                                <ul className="d-flex">
                                    {/* Display only first 6 images in the footer */}
                                    {gallery.slice(0, 6).map((project, pitem) => (
                                        <li className="grid" key={pitem}>
                                            <div className="img-holder" style={{ cursor: 'pointer' }}>
                                                <Image
                                                    src={FILE_URL(project?.collectionId, project?.id, project?.image)}
                                                    alt="Image Gallery"
                                                    width={200}
                                                    height={200}
                                                    // Open the modal with this image
                                                    onClick={() => handleOpen(project)}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; {currentYear} Rotaract Club Amontana.</p>
                            <p className="design">Designed and developed by <Link href="https://stephancj.github.io">Stéphan Christian</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    padding: '20px',
                    maxWidth: '80%',
                    maxHeight: '80%',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    zIndex: 1300
                }}>
                    {currentImage && (
                        <>
                            <button
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '10px',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    fontSize: '2rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    zIndex: 1
                                }}
                                onClick={handlePrev}
                            >
                                ‹
                            </button>
                            <Image
                                src={FILE_URL(currentImage?.collectionId, currentImage?.id, currentImage?.image)}
                                alt="Current Image"
                                width={600}
                                height={400}
                                style={{ display: 'block', margin: '0 auto' }}
                            />
                            <button
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '10px',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                    fontSize: '2rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    zIndex: 1
                                }}
                                onClick={handleNext}
                            >
                                ›
                            </button>
                        </>
                    )}
                </div>
            </Modal>
        </footer>
    );
};

export default Footer;
