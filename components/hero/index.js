import React from "react";
import Link from 'next/link'
import Clients from './client'
import Image from 'next/image'

import hero1 from '/public/images/slider/fanionRTCA.jpg'
import hero2 from '/public/images/slider/s.png'
import hero3 from '/public/images/slider/heroRTCA1.jpg'




const Hero =() => {
    const yearsOfService = new Date().getFullYear() - 1998

    return (
        <section className="wpo-hero-section-1">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title-top">
                                <span>Help The Poor Children</span>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>La camaraderie par le service</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>We help local nonprofits access the funding, tools, training, and support they need
                                    to become more.</p>
                            </div>
                            <div className="btns">
                                <Link href="/about" className="btn theme-btn-s2">Rejoignez-nous</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec">
                            <div className="right-items-wrap">
                                <div className="right-item">
                                    <div className="r-img">
                                        <Image src={hero1} alt=""/>
                                    </div>
                                    <div className="wpo-happy-client">
                                        <Clients/>
                                    </div>
                                </div>
                                <div className="right-item">
                                    <div className="wpo-total-project">
                                        <div className="wpo-total-project-wrap">
                                            <div className="wpo-total-project-icon">
                                                <i className="fi flaticon-salary"></i>
                                            </div>
                                            <div className="wpo-total-project-text">
                                                <h3>{yearsOfService}</h3>
                                                <p>Années de Services</p>
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
