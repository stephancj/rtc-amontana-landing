import React, { useState } from 'react';
import Link from 'next/link';
import MobileMenu from '../../components/MobileMenu';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = ({ topbarNone, hclass, Logo }) => {
    const [isSearchShow, setIsSearchShow] = useState(false);
    const router = useRouter();

    const searchHandler = () => {
        setIsSearchShow(!isSearchShow);
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

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
                return
            } else {
                router.push(`/?id=${id}`); // You can adjust this as needed
            }
        };
    };

    return (
        <header id="header" className={topbarNone}>
            <div className={`wpo-site-header ${hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" href="/">
                                        <Image src={Logo} alt="RTC Amontana logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link href="/">Accueil</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/about" onClick={ClickHandler('about')}>A propos</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link href="/cause">Cause</Link></li>
                                                <li><Link href="/cause-single/Poor-Children">Cause Single</Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/causes" onClick={ClickHandler('causes')}>Nos Causes</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link href="/event">Events</Link></li>
                                                <li><Link href="/event-s2">Events S2</Link></li>
                                                <li><Link href="/event-single/Help-Children">Events Single</Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/#events" onClick={ClickHandler('events')}>Actualités</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link href="/about">About</Link></li>
                                                <li><Link href="/service">Service</Link></li>
                                                <li><Link href="/service/Clean-Water">Service Single</Link></li>
                                                <li><Link href="/project">Project</Link></li>
                                                <li><Link href="/project/African-Macaw-Bird">Project Single</Link></li>
                                                <li><Link href="/donate">Donate</Link></li>
                                                <li><Link href="/volunteer">Volunteer</Link></li>
                                                <li><Link href="/testimonial">Testimonial</Link></li>
                                                <li><Link href="/404">Error 404</Link></li>
                                                <li><Link href="/login">Login</Link></li>
                                                <li><Link href="/register">Sign Up</Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/#faq" onClick={ClickHandler('faq')}>FAQ</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/#actions" onClick={ClickHandler('actions')}>Actions</Link>
                                        </li>
                                        <li><Link href="/team" onClick={ClickHandler('team')}>Equipe</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <Link className="theme-btn" href="/donate">Faire un don</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
