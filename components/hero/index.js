import React from "react";
import Link from 'next/link'
import Clients from './client'
import Image from 'next/image'

import hero1 from '/public/images/slider/fanionRTCA.webp'
import hero2 from '/public/images/slider/s.png'
import hero3 from '/public/images/slider/heroRTCA1.jpg'



const Hero =(props) => {
    const yearsOfService = new Date().getFullYear() - 1998

    return (
        <section className="wpo-hero-section-1">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text" data-aos="fade-right">
                            <div className="wpo-hero-title-top">
                                <span>Rotaract Club Amontana</span>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>Le service par la camaraderie</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>Ensemble, construisons un avenir meilleur. Le Rotaract Club unit les jeunes pour servir leur communauté.</p>
                            </div>
                            <div className="btns">
                                <Link href="/volunteer" className="btn theme-btn-s2">Rejoignez-nous</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec" data-aos="fade-left">
                            <div className="right-items-wrap">
                                <div className="right-item">
                                    <div className="r-img">
                                        <Image src={hero1} alt=""/>
                                    </div>
                                    <div className="wpo-happy-client">
                                        <Clients members={props.members}/>
                                    </div>
                                </div>
                                <div className="right-item">
                                    <div className="wpo-total-project">
                                        <div className="wpo-total-project-wrap">
                                            {/* <div className="wpo-total-project-icon">
                                                <i className="fi flaticon-salary"></i>
                                            </div> */}
                                            <div className="wpo-total-project-text">
                                                <h3>{yearsOfService}</h3>
                                                <p>années de services et d'espoir</p>
                                            </div>
                                        </div>
                                        <div className="project-shape">
                                            <Image src={hero2} alt=""/>
                                        </div>
                                    </div>
                                    <div className="r-img">
                                        <Image src={hero3} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero;
