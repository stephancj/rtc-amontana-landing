import React from 'react'
import Link from  'next/link'
import abimg from '/public/images/rtcaAbout.jpg'
import shape from '/public/images/ab-shape-2.png'
import Image from 'next/image'


const About = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt=""/>
                                <div className="wpo-ab-shape-1">
                                    <div className="s-s1"></div>
                                    <div className="s-s2"></div>
                                </div>
                                <div className="wpo-ab-shape-2"><Image src={shape} alt=""/></div>
                                {/* <div className="wpo-total-raised">
                                    <div className="wpo-total-raised-wrap">
                                        <div className="wpo-total-raised-icon">
                                            <i className="fi flaticon-wallet-filled-money-tool"></i>
                                        </div>
                                        <div className="wpo-total-raised-text">
                                            <ul>
                                                <li>Total Raised<span>$25000</span></li>
                                            </ul>
                                            <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar">
                                                            <div className="progress-value"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <span>A propos</span>
                            <h2>We Can Save More Lifes With Your Helping Hand.</h2>
                            <p>
                                Le Rotaract Club Amontana est une association de jeunes professionnels et étudiants, affiliée à Rotary International. 
                                Depuis 1997, nous sommes engagés dans des projets variés tels que des actions environnementales, des collectes de fonds, du soutien scolaire... 
                                <br/>
                                Notre objectif est de développer le leadership chez les jeunes et de les encourager à s'impliquer dans leur communauté. 
                            </p>
                            <ul>
                                <li>Créer un impact positif et durable sur notre communauté.</li>
                                <li>Former les futurs leaders de demain.</li>
                                <li>Unir les jeunes autour de valeurs communes.</li>
                            </ul>
                            <Link onClick={ClickHandler} className="theme-btn-s2" href="/about">Voir plus</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;