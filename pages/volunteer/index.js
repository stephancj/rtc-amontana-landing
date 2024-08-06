import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import TeamSection from '../../components/TeamSection';

import vImg from '/public/images/volunteer.jpg'
import Image from 'next/image';

const VolunteerPage =() => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return(
        <Fragment>
            <Navbar2 Logo={Logo}/>
            <PageTitle pageTitle={'Volunteer'} pagesub={'Volunteer'}/> 
            <div className="volunteer-area">
                <div className="volunteer-wrap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="volunteer-item">
                                    <div className="volunteer-img-wrap">
                                        <div className="volunter-img">
                                            <Image src={vImg} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="volunteer-contact">
                                    <div className="volunteer-contact-form">
                                        <h2>Rejoignez nos rangs et devenez membre</h2>
                                        <form onSubmit={SubmitHandler} className="contact-validation-active" id="contact-form-main" action="https://usebasin.com/f/6ad3ce166881" method="POST">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="fullname" id="name"
                                                        placeholder="Nom complet"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                    <input type="email" className="form-control" name="email" id="email"
                                                        placeholder="Email"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="objet" id="objet"
                                                        placeholder="objet"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in">
                                                    <label htmlFor="file">Votre CV</label>
                                                    <input id="file" type="file" className="form-control" name="file"/>
                                                    <i className="ti-cloud-up"></i>
                                                </div>
                                                <div className="col-lg-12 col-12 form-group">
                                                    <textarea className="form-control" name="note" id="note"
                                                        placeholder="Motivation et breve description"></textarea>
                                                </div>
                                                <div className="submit-area col-lg-12 col-12">
                                                    <button type="submit" className="theme-btn submit-btn">Envoyer</button>
                                                    <div id="loader">
                                                        <i className="ti-reload"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clearfix error-handling-messages">
                                                <div id="success">Merci</div>
                                                <div id="error"> Erreur lors de l'envoi du message. Veuillez réessayer plus tard.</div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <TeamSection/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default VolunteerPage;

