import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import parse from 'html-react-parser';



const EventTabs = (props) => {
    const schedule = props.schedule;
    const coordinates = props.coordinates;
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    const SubmitHandler = (e) => {
        e.preventDefault()
    }



    return (
        <div className="wpo-event-details-wrap">
            <div className="wpo-event-details-tab">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Détails
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Localisation
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                            Nous contacter
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>

            <div className="wpo-event-details-content">
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <div id="Schedule" className="tab-pane active">
                                    {parse(`${schedule}`)}
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <div id="Map" className="tab-pane">
                                    <div className="contact-map">
                                        {parse(`${coordinates}`)}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <div className="event-contact">
                                    <div className="wpo-donations-details">
                                        <form method="post" className="contact-validation-active" id="contact-form-main" onSubmit={SubmitHandler}>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group">
                                                    <input type="text" className="form-control" name="name" id="name" placeholder="Votre nom*" />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group clearfix">
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="Votre email" />
                                                </div>
                                                <div className="col-lg-12 col-12 form-group">
                                                    <textarea className="form-control" name="note" id="note" placeholder="Message"></textarea>
                                                </div>
                                                <div className="submit-area col-lg-12 col-12">
                                                    <button type="submit" className="theme-btn submit-btn">Envoyer</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
}

export default EventTabs;