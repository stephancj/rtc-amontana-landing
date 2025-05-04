import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FILE_URL } from '../../utils/constants'
import { formatDateTime } from '../../utils/utils'

const CauseSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    return(

        <div className={`wpo-campaign-area section-padding ${props.CmClass}`} id='actions'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>
                                <Link onClick={ClickHandler} href="/actions" style={{
                                    color: 'inherit',
                                    textDecoration: 'none'
                                }}>Actions</Link>
                            </span>
                            <h2>La magie de nos actions</h2>
                            <p>Nous continuons de nous engager à travers diverses initiatives, allant des actions solidaires locales aux projets internationaux, pour avoir un impact positif et durable dans nos communautés.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-campaign-wrap">
                    <div className="row">
                    {props.actions.slice(0, 3).map((action, index) => (
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="wpo-campaign-single">
                                <div className="wpo-campaign-item">
                                    <div className="wpo-campaign-img">
                                        <Image 
                                            src={FILE_URL(action.collectionId, action.id, action.image)} 
                                            alt={action.name}
                                            width={1000}
                                            height={1000}
                                        />
                                        <span className="thumb">
                                            {action.expand.aof[0].name}
                                            {/* <Image src={FILE_URL(action.expand.aof[0].collectionId, action.expand.aof[0].id, action.expand.aof[0].logo)} alt={action.expand.aof[0].name} width={30} height={30}/> */}
                                        </span>
                                    </div>
                                    <div className="wpo-campaign-content">
                                        <div className="wpo-campaign-text-top">
                                            <span>{formatDateTime(action.date)}</span>
                                            <h2><Link onClick={ClickHandler} href="/actions/[slug]/details" as={`/actions/${action.slug}/details`}>{action.title}</Link></h2>
                                            {/* <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar" style={{width: `${Cause.process}%`}}>
                                                            <div className="progress-value"><span>{Cause.process}</span>%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <ul>
                                                <li><span>Goal:</span> ${Cause.Goal}</li>
                                                <li><span>Raised:</span> ${Cause.Raised}</li>
                                            </ul> */}
                                            {/* <div className="campaign-btn">
                                                <ul>
                                                    <li>
                                                        <span><Image src={Cause.authorImg} alt=""/></span>
                                                        <span><Link onClick={ClickHandler} href="/cause-single/[slug]" as={`/cause-single/${Cause.slug}`}>{Cause.authorName}</Link></span>
                                                    </li>
                                                    <li><Link onClick={ClickHandler} className="e-btn" href="/donate">Donate Now</Link></li>
                                                </ul>
                                            </div> */}
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

export default CauseSection;