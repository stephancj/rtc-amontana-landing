import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FILE_URL } from '../../utils/constants'
import { formatDateTime } from '../../utils/utils'

const EventSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    return(
        <div className={`wpo-event-area section-padding ${props.evCLass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Prochainement</span>
                            <h2>La magie de nos actions</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form,</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-event-wrap">
                    <div className="row">
                        {props.upcomings.slice(0,3).map((upcoming, eitem)=>(
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-single">
                                    <div className="wpo-event-item">
                                        <div className="wpo-event-img">
                                            <Image 
                                                src={FILE_URL(upcoming.collectionId, upcoming.id, upcoming.image)} 
                                                alt={upcoming.name}
                                                width={1000}
                                                height={1000}
                                            />
                                            {/* <span className="thumb">{event.thumb}</span> */}
                                        </div>
                                        <div className="wpo-event-content">
                                            <div className="wpo-event-text-top">
                                                <span>{formatDateTime(upcoming.date)}</span>
                                                <h2><Link onClick={ClickHandler} href='/upcoming/[id]/details' as={`/upcoming/${upcoming.id}/details`}>{upcoming.title}</Link></h2>
                                                {/* <p>{upcoming.description}</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSection;