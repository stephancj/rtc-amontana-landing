import React, { useState, useRef, useEffect } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '/public/images/logo.png';

const menus = [
    {
        id: 1,
        title: 'Accueil',
        link: '/',
        hashtag: 'home',
    },
    {
        id: 2,
        title: 'A propos',
        link: '/cause',
        hashtag: 'about',
    },
    {
        id: 4,
        title: 'Nos Causes',
        link: '/event',
        hashtag: 'causes',
    },
    {
        id: 3,
        title: 'Actualités',
        link: '/',
        hashtag: 'events',
    },
    {
        id: 5,
        title: 'Actions',
        link: '/#blog',
        hashtag: 'actions',
    },
    {
        id: 88,
        title: 'Equipe',
        link: '/contact',
        hashtag: 'team',
    }
];

const MobileMenu = () => {
    const [isMenuShow, setIsMenuShow] = useState(false);
    const [isOpen, setIsOpen] = useState(0);
    const router = useRouter();
    const firstLinkRef = useRef(null);

    const menuHandler = () => {
        setIsMenuShow(!isMenuShow);
    };

    const closeMenu = () => {
        setIsMenuShow(false);
    };

    const toggleSubMenu = id => () => {
        setIsOpen(id === isOpen ? 0 : id);
    };

    const ClickHandler = (id) => {
        return (e) => {
            e.preventDefault();
            closeMenu();
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

    // Accessibility: close on ESC and focus first link
    useEffect(() => {
        if (isMenuShow && firstLinkRef.current) {
            firstLinkRef.current.focus();
        }
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeMenu();
        };
        if (isMenuShow) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMenuShow]);

    return (
        <div>
            {/* Overlay */}
            {isMenuShow && <div className="mobileMenu-overlay" onClick={closeMenu} />}
            <div className={`mobileMenu enhanced ${isMenuShow ? 'show' : ''}`}
                 style={isMenuShow ? { left: 0 } : {}}>
                <div className="mobileMenu-header" style={{justifyContent: 'center'}}>
                    <div className="mobileMenu-logo" style={{background: 'transparent', borderRadius: 0, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', margin: '0 auto'}}>
                        <Image src={Logo} alt="RTC Amontana logo" width={90} height={90} />
                    </div>
                </div>
                <div className="mobileMenu-title">Menu</div>
                <ul className="responsivemenu">
                    {menus.map((item, idx) => {
                        return (
                            <li key={item.id}>
                                {item.submenu ? <p onClick={toggleSubMenu(item.id)}>
                                    {item.title}
                                    {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                </p> : <Link ref={idx === 0 ? firstLinkRef : null} onClick={ClickHandler(item.hashtag)} href={item.link} tabIndex={isMenuShow ? 0 : -1}>{item.title}</Link>}
                                {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link onClick={ClickHandler(submenu.hashtag)} className="active" href={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="showmenu" onClick={menuHandler}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;
