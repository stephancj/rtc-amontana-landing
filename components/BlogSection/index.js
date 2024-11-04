import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FILE_URL } from '../../utils/constants'
import { formatDateTime } from '../../utils/utils'

const BlogSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    return(

        <section className="wpo-blog-section section-padding" id='events'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Evénements</span>
                            <h2>Nos dernières actualités</h2>
                            <p>Le club organise ou participe à des événements marquants, dont des conférences, des ateliers et des rencontres interclubs.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                        {props.events.slice(0,3).map((event, eItem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eItem}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <Image 
                                            src={FILE_URL(event.collectionId, event.id, event.image)} 
                                            alt={event.title} 
                                            width={1000} 
                                            height={1000}
                                        />
                                    </div>
                                    <div className="wpo-blog-content">
                                        <div className="wpo-blog-content-top">
                                            <span>{formatDateTime(event.date)}</span>
                                            <h2>
                                                <Link onClick={ClickHandler} href='/events/[id]/details' as={`/events/${event.id}/details`}>{event.title}</Link>
                                            </h2>
                                        </div>
                                        {/* <div className="wpo-blog-content-btm">
                                            <div className="wpo-blog-content-btm-left">
                                                <div className="wpo-blog-content-btm-left-img">
                                                    <Image src={blog.authorImg} alt=""/>
                                                </div>
                                                <div className="wpo-blog-content-btm-left-text">
                                                    <h4><Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.author}</Link></h4>
                                                </div>
                                            </div>
                                            <div className="wpo-blog-content-btm-right">
                                                <span><i className="fi flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i> {blog.comment}</span>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;