import React from 'react'
import Link from 'next/link'
import shape from '/public/images/cta-shape.png'
import Image from 'next/image'



const CtaSection = (props) => {

    return (
        <div className={`wpo-cta-area ${props.ctClass}`}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-cta-section">
                            <div className="wpo-cta-content" data-aos="zoom-in">
                                <h2>{props.cTitle}</h2>
                                <Link href="/volunteer">Rejoignez-nous</Link>
                            </div>
                            <div className="volunteer-img" data-aos="fade-left">
                                <Image src={props.vImg} alt=""/>
                            </div>
                            <div className="shape"><Image src={shape} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;