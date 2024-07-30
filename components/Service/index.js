import React from 'react'
import Link from 'next/link'
import Services from '../../api/service'
import Slider from "react-slick"
import Image from 'next/image'

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
        autoplay: false,
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
                <div className="row">
                    <Slider {...settings}>
                        {Services.map((service, sitem) => (
                        <div className="col col-xl-3 col-lg-6 col-sm-6 col-12 slider-item" key={sitem}>
                            <div className="wpo-features-item" style={{backgroundColor: service.backgroundColor}}>
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <Image src={service.logo} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2>
                                        {/* href='/service/[slug]' as={`/service/${service.slug}`} */}
                                        <Link href=''> 
                                            {service.title}
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