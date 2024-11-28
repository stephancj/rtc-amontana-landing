import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { FILE_URL } from "../../utils/constants";
import { Tooltip } from "@mui/material";
import Link from 'next/link'


const PartnerSection = (props) => {
    console.log(props.partners);

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: props.partners.length > 4 ? 4 : props.partners.length,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
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

    return (

        <section className={`partners-section section-padding ${props.tNone}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Partenaires</span>
                            <h2>Nos partenaires & donateurs</h2>
                            <p>Le club collabore avec des partenaires et donateurs dévoués qui partagent notre vision d'un monde meilleur. Leur soutien est essentiel pour la réussite de nos projets et initiatives. Ensemble, nous créons un impact positif et durable.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids partners-slider owl-carousel">
                            <Slider {...settings}>
                                {props.partners.map((partner, pitem) => (
                                    <Tooltip title={partner.name} key={pitem}>
                                        <Link 
                                            className="grid" 
                                            key={pitem}
                                            href={partner.url}
                                            target="_blank"
                                        >
                                            <Image src={FILE_URL(partner.collectionId, partner.id, partner.logo)} alt={partner.name} width={500} height={500}/>
                                        </Link>
                                    </Tooltip>
                                    // <div className="grid" key={pitem}>
                                    //     <Image src={FILE_URL(partner.collectionId, partner.id, partner.logo)} alt={partner.name} width={500} height={500}/>
                                    // </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;