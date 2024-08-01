import React from 'react';
import Image from 'next/image';

const PageTitle = (props) => {
    return (
        <div className="wpo-breadcumb-area">
            <div className="background-image">
                <Image 
                    src={props.backgroundImage} 
                    fill 
                    alt="Cover Image"
                    priority
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ul>
                                <li><span>{props.pagesub}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageTitle;