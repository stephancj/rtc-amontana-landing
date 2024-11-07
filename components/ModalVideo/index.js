
import React, { useState } from 'react'


const VideoModal = () => {

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };


  return (
    <div className="v-modal-area">
      <div className="video-btn">
        <ul>
          <li>
            <button className="wrap" onClick={openModal}><i className="fi flaticon-play"></i></button>
          </li>
        </ul>
      </div>
      <div className="v-modal-wrap">
        {modal ? (
          <section className="modal__bg">
            <button onClick={openModal} className="close"> 
              <i className='fa fa-close'></i>
            </button>
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <div className="modal__video-align">
                  <iframe 
                    width="1029" 
                    height="579" 
                    src="https://www.youtube.com/embed/6DIR8fr9VJA" 
                    title="Join the movement! | Rotaract" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>  
                  </iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}

export default VideoModal;