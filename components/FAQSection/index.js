
import React, { useState } from 'react';
import parse from 'html-react-parser';
import { FAQPageJsonLd } from 'next-seo';
const FAQSection = ({ faqs }) => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <>
            <FAQPageJsonLd
                mainEntity={faqs.map(item => ({
                    questionName: item.question,
                    acceptedAnswerText: item.answer,
                }))}
            />
            <div className="wpo-event-area section-padding" id="faq">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="wpo-section-title" data-aos="fade-up">
                                <span>Questions fréquentes</span>
                                <h2>Foire Aux Questions</h2>
                                <p>Retrouvez ici les réponses aux questions les plus courantes sur nos actions et notre association.</p>
                            </div>
                        </div>
                    </div>
                    <div className="faq-accordion-list" style={{ maxWidth: 800, margin: '0 auto' }}>
                        {faqs && faqs.length > 0 ? faqs.map((faq, idx) => (
                            <div className={`faq-item-list${openIndex === idx ? ' active' : ''}`} key={faq.id} style={{ borderBottom: '1px solid #eee', padding: '0.5rem 0' }} data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}>
                                <div
                                    className="faq-question-list d-flex justify-content-between align-items-center"
                                    onClick={() => toggleIndex(idx)}
                                    style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', padding: '1rem 0', display: 'flex' }}
                                >
                                    <span>{faq.question}</span>
                                    <span style={{ fontSize: '1.5rem', color: '#D22064', marginLeft: 16 }}>{openIndex === idx ? '-' : '+'}</span>
                                </div>
                                {openIndex === idx && (
                                    <div className="faq-answer-list" style={{ padding: '0 0 1rem 0', color: '#444' }} data-aos="fade-in">
                                        {parse(faq.answer || '')}
                                    </div>
                                )}
                            </div>
                        )) : <p className="text-center">Aucune question pour le moment.</p>}
                    </div>
                </div>
            </div>
        </>

    );
};

export default FAQSection; 