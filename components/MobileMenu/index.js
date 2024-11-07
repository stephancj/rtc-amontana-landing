import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

    const menuHandler = () => {
        setIsMenuShow(!isMenuShow);
    };

    const toggleSubMenu = id => () => {
        setIsOpen(id === isOpen ? 0 : id);
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
                return;
            } else {
                router.push(`/?id=${id}`);
            }
        };
    };

    return (
        <div>
            <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                <div className="menu-close">
                    <div className="clox" onClick={menuHandler}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map(item => {
                        return (
                            <li key={item.id}>
                                {item.submenu ? <p onClick={toggleSubMenu(item.id)}>
                                    {item.title}
                                    {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                </p> : <Link onClick={ClickHandler(item.hashtag)} href={item.link}>{item.title}</Link>}
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
