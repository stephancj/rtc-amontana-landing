import React from 'react'
import Link from  'next/link'

import Image from 'next/image'
import { formatDateTime } from '../../utils/utils';
import { FILE_URL } from '../../utils/constants';
import { Modal } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

const ActionSidebar = (props) => {
    const relatedActions = props.relatedActions
    const tags = props.tags
    // const [searchResult, setSearchResult] = React.useState([])
    // const [searchValue, setSearchValue] = React.useState('')
    // const [open, setOpen] = React.useState(false)

    // const modalStyle = {
    //     //position under the search bar
    //     position: 'absolute',
    //     height: 400,
    //     bgcolor: 'background.paper',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    //     zIndex: 1000,
    //     backgroundColor: 'white',
    //     marginTop: 10,
    //     borderRadius: 10,
    //     display: 'block'

    // }

    // const SubmitHandler = (e) => {
    //     e.preventDefault()
    //     if(searchValue?.length >= 3){
    //         const result= relatedActions.filter(action => action.title.includes(searchValue))
    //         console.log(searchValue)
    //         console.log(result)
    //         setSearchResult(result)
    //         setOpen(true)
    //     } 
    // }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    return (
        <div className="col col-lg-4 col-12">
            <div className="blog-sidebar">
                {/* <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Chercher une action..." 
                                value={searchValue} 
                                onChange={
                                    (e) => setSearchValue(e.target.value)
                                }
                            />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div> */}
                {/* {
                            open && (
                                <div className='widget' style={modalStyle}>
                                    {
                                        searchResult && searchResult.length > 0 ? (
                                            <p>
                                                {searchResult.map((action, index) => (
                                                    <Link onClick={ClickHandler} href="/actions/[id]/details" as={`/actions/${action.id}/details`}>{action.title}</Link>
                                                ))}
                                            </p>
                                        ) : (
                                            <p>
                                                Pas de résultat trouvé
                                            </p>
                                        )
                                    }
                                </div>
                            )
                        } */}
                <div className="widget recent-post-widget">
                    <h3>Actions similaires</h3>
                    <div className="posts">
                        {relatedActions && relatedActions.length > 0 ? 
                        
                            (relatedActions.slice(0,4).map((action, index) => (
                                <div className="post" key={index}>
                                    <div className="img-holder">
                                        <Image src={FILE_URL(action?.collectionId, action?.id, action?.image)} alt={action?.title} width={500} height={500}/>
                                    </div>
                                    <div className="details">
                                        <h4><Link onClick={ClickHandler} href="/actions/[id]/details"  as={`/actions/${action.id}/details`}>{action.title}</Link></h4>
                                        <span className="date">{formatDateTime(action?.date)} </span>
                                    </div>
                                </div>
                            ))) : 
                            <p>
                                Pas d'actions similaires trouvées
                            </p>
                        }
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        {
                            tags && tags.length && tags.map((aof, index) => (
                                <li key={index}><Link onClick={ClickHandler} href={`/actions/tags/${aof.name}`}>{aof.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>Vous aussi <br/> Rejoignez-nous!</h2>
                    {/* <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p> */}
                    <Link href="/volunteer">Nous rejoindre</Link>
                </div>
            </div>
        </div> 

    )
}

export default ActionSidebar;