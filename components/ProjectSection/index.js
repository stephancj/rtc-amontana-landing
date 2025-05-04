import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FILE_URL} from "../../utils/constants";
import { formatDateTime } from "../../utils/utils";


const ProjectSection = (props) => {
    const items = props.items
    const type = props.type

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    const generateLink = (type, slug = null) => {
        const basePathMap = {
            event: '/events',
            actions: '/actions',
            upcoming: '/upcoming'
        };
    
        const base = basePathMap[type];
        if (!base) return '#';
    
        const finalSlug = slug ? slug : '[slug]';
        return `${base}/${finalSlug}/details`;
    };
    

    return(

    <section className={`wpo-project-section section-padding ${props.pbClass}`}>
        <div className="container-fluid">
            <div className="sortable-gallery">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="project-grids gallery-container clearfix">
                            {items.map((item, index)=>(
                                <div className="grid" key={index}>
                                    <div className="img-holder">
                                        <Image src={FILE_URL(item.collectionId, item.id, item.image)} width={500} height={600} alt=""/>
                                        <div className="hover-content">
                                            <Link onClick={ClickHandler} className="plus" href={generateLink(type)} as={generateLink(type, item.slug)}><i className="ti-plus"></i></Link>
                                            <h4><Link onClick={ClickHandler} href={generateLink(type)} as={generateLink(type, item.slug)}>{item.title}</Link></h4>
                                            <p>{formatDateTime(item.date)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ProjectSection;