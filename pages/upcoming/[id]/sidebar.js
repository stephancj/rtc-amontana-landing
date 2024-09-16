import React from 'react'
import Link from 'next/link'
import Projects from '../../../api/projects'
import Events from '../../../api/event'
import Image from 'next/image'

const EventSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col col-lg-4 col-12">
            <div className="blog-sidebar">
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {Events.slice(0, 3).map((event, eitem) => (
                            <div className="post" key={eitem}>
                                <div className="img-holder">
                                    <Image src={event.eImg} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href="/event-single/[slug]" as={`/event-single/${event.slug}`}>{event.eTitle}</Link></h4>
                                    <span className="date">{event.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Projects</h3>
                    </div>
                    <ul className="d-flex">
                        {Projects.slice(0, 6).map((project, pitem) => (
                            <li className="grid" key={pitem}>
                                <div className="img-holder">
                                    <Link onClick={ClickHandler} href="/project/[slug]" as={`/project/${project.slug}`}>
                                        <Image src={project.projectImg} alt="" />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default EventSidebar;