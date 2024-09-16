import React from 'react'
import Link from 'next/link'
import Slider from "react-slick"
import Image from 'next/image'
import { FILE_URL } from '../../utils/constants'

const Service = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    var settings = {
        dots: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
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

    return(

        <section className={`${props.Fclass} section-padding  ${props.vclassClass}`}>
            <div className="container">
            <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Causes</span>
                            <h2>Nos axes stratégiques</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form,</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Slider {...settings}>
                        {props.aofs.map((aof, index) => (
                        <div className="col col-xl-3 col-lg-6 col-sm-6 col-12 slider-item" key={index}>
                            <div className="wpo-features-item" style={{backgroundColor: aof.backgroundColor}}>
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <Image 
                                            src={FILE_URL(aof.collectionId, aof.id, aof.logo)} 
                                            alt={aof.name}
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2>
                                        {/* href='/service/[slug]' as={`/service/${service.slug}`} */}
                                        <Link href=''> 
                                            {aof.name}
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}                
                    </Slider>
                    
                </div>
            </div>
        </section>
    )
}

export default Service;