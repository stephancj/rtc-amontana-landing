import React from "react";
import Slider from "react-slick";
import Image from 'next/image'
import client1 from '/public/images/slider/client1.png'
import client2 from '/public/images/slider/client2.png'
import client3 from '/public/images/slider/client3.png'
import client4 from '/public/images/slider/client4.png'
import { FILE_URL } from "../../../utils/constants";


const Clients = (props) => {
    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
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
                    slidesToShow: 3,
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
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="wpo-happy-client-img">
            <ul className="wpo-happy-client-slide">
                <Slider {...settings}>
                    {
                        props.members.map((member, index) => (
                            <li key={index}>
                                <Image 
                                    src={FILE_URL(member.collectionId, member.id, member.image)} 
                                    width={500} 
                                    height={500} 
                                    alt={member.fullname} 
                                />
                            </li>
                        ))
                    }
                </Slider>
            </ul>
        </div>
    );
}

export default Clients;