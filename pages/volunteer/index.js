import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'

import vImg from '/public/images/volunteer.jpg'
import Image from 'next/image';
import { BASIN_URL } from '../../utils/constants';
import { toast } from 'react-toastify';

const VolunteerPage =() => {
    const [file, setFile] = React.useState(null)
    const [sending, setSending] = React.useState(false);

    const form = document.getElementById('contact-form-main')

    const SubmitHandler = (e) => {
        setSending(true)
        e.preventDefault()
        let formData = new FormData(form)
        formData.append('file', file)

        fetch(BASIN_URL, {
            method: 'POST',
            body: formData
        }).then(response => {
            if(response.ok){
                setSending(false)
                form.reset()
                toast.success('Votre message a été envoyé avec succès. Nous vous donnerons un retour dans les plus brefs délais.')
            } else {
                setSending(false)
                toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.')
            }
        })
    }

    return(
        <Fragment>
            <Navbar Logo={Logo}/>
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
                                        <form 
                                            className="contact-validation-active" 
                                            id="contact-form-main" 
                                            onSubmit={SubmitHandler}
                                        >
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
                                                        placeholder="Objet"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in" >
                                                    <label htmlFor="file">{`${file?.name || 'Importez votre CV ici'}`}</label>
                                                    <input id="file" type="file" className="form-control" name="file" onChange={()=>{
                                                        setFile(document.getElementById('file').files[0])
                                                    }}/>
                                                    <i className="ti-cloud-up"></i>
                                                </div>
                                                <div className="col-lg-12 col-12 form-group">
                                                    <textarea className="form-control" name="note" id="note"
                                                        placeholder="Votre Motivation et brève description"></textarea>
                                                </div>
                                                <div className="submit-area col-lg-12 col-12">
                                                    <button type="submit" className="theme-btn submit-btn">{sending ? 'Envoie en cours...' : 'Envoyer'}</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default VolunteerPage;

