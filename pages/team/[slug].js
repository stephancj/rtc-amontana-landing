import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer';
import Image from 'next/image'
import Logo from '/public/images/logo.png'
import { useEffect } from 'react';
import { getAllMembers } from '../../services/members.service';
import { FILE_URL } from '../../utils/constants';
import Loader from '../../components/shared/loader/loader';
import parse from 'html-react-parser';



const TeamSingle = (props) => {
    const router = useRouter()

    const [isLoading, setIsLoading] = React.useState(true);
    const [teams, setTeams] = React.useState([]);

    const getData = async () => {
        const members = await getAllMembers();
        setTeams(members);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    const member = teams.find(item => item.slug === router.query.slug)
    console.log(member)


    const SubmitHandler = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            {isLoading ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                    >
                    <Loader />
                </div>
            ) : (
                <Fragment>
                    <Navbar Logo={Logo} />
                    <PageTitle pageTitle={member?.fullname} pagesub='Membres' />
                    <div className="attorney-pg-area section-padding">
                        <div className="container">
                            <div className="attorney-info-wrap">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="attorney-info-img">
                                            <Image src={FILE_URL(member?.collectionId, member?.id, member?.image)} width={500} height={500} alt={member?.fullname} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="attorney-info-text">
                                            <h2>{member?.fullname}</h2>
                                            <ul>
                                                <li>Fonction dans le club:<span>{member?.function || '-'}</span></li>
                                                <li>Classification:<span>{member?.job || '-'}</span></li>
                                                <li>Email:<span>{member?.email || '-'}</span></li>
                                                <li>Centre d'intérets:<span>{member?.hobbies || '-'}</span></li>
                                                <li>Linkedin:<span>{member?.linkedin || '-'}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="exprience-area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {/* <div className="exprience-wrap">
                                            <h2>Personal Experience</h2>
                                            <p>The purpose of lorem ipsum is to create a natural looking block oftext (sentence, paragraph, page, etc.) that doesn't distract from thelayout. A practice not without controversy, laying out pages withmeaningless filler text can be very useful when the focus is meantto be on design, not content.There are many variations of passages of Lorem Ipsum available.</p>
                                            <p>But the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text generators on the Internet tend to repeat.</p>
                                        </div>
                                        <div className="education-area ex-wiget">
                                            <h2>Education</h2>
                                            <ul>
                                                <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                                                <li>If you are going to use a passage of Lorem Ipsum.</li>
                                                <li>Very popular during the Renaissance. </li>
                                                <li>Many desktop publishing packages and web page editors now.</li>
                                            </ul>
                                        </div>
                                        <div className="language-area ex-wiget">
                                            <h2>Language</h2>
                                            <ul>
                                                <li>French(fluent), English (fluent), Greek , chinese.</li>
                                            </ul>
                                        </div> */}
                                        {parse(`${member?.description}`)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                    <Scrollbar />
                </Fragment>
            )}
        </div>
    )
};
export default TeamSingle;
