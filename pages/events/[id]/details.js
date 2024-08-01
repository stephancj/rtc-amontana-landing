import React, { Fragment, use } from "react";
import { useRouter } from "next/router";
import blogs from "../../../api/blogs";
import Link from "next/link";
import PageTitle from "../../../components/pagetitle";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footer";
import Scrollbar from "../../../components/scrollbar";
import Image from "next/image";
import gl1 from "/public/images/blog/img-3.jpg";
import gl2 from "/public/images/blog/img-2.jpg";
import Logo from "/public/images/logo.png";
import { useEffect } from "react";
import { getEvent } from "../../../services/events.service";
import { formatDateTime } from "../../../utils/utils";
import { FILE_URL } from "../../../utils/constants";
import { CircularProgress } from "@mui/material";

const submitHandler = (e) => {
  e.preventDefault();
};

const EventPage = (props) => {
  const router = useRouter();
    const { id } = router.query;
  const [event, setEvent] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchEvent = async () => {
    const event = await getEvent(id);
    setEvent(event);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchEvent();
  }, []);

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
          <CircularProgress />
        </div>
      ) : (
        <Fragment>
          <Navbar Logo={Logo} />
          <PageTitle
            pageTitle={event?.title}
            pagesub="Actualités"
            backgroundImage={FILE_URL(
              event?.collectionId,
              event?.id,
              event?.image
            )}
          />
          <section className="wpo-blog-single-section section-padding">
            <div className="container">
              <div className="row">
                <div className="col col-lg-10 offset-lg-1">
                  <div className="wpo-blog-content">
                    <div className="post format-standard-image">
                      <div className="entry-meta">
                        <ul>
                          {/* <li><i className="fi ti-comment-alt"></i> Comments {event?.comment}</li> */}
                          <li>
                            <i className="fi flaticon-calendar"></i>{" "}
                            {formatDateTime(event?.date)}
                          </li>
                          <li>
                            <i className="fi flaticon-location"></i>{" "}
                            {event?.location}
                          </li>
                        </ul>
                      </div>
                      <h2>{event?.title}</h2>
                      <p>{event?.description}</p>
                      <blockquote>{event?.description}</blockquote>
                      {/* <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,</p> */}

                      <div className="gallery">
                        <div>
                          <Image src={gl1} alt="" />
                        </div>
                        <div>
                          <Image src={gl2} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="tag-share-s2 clearfix">
                      <div className="tag">
                        <span>Partager sur: </span>
                        <ul>
                          <li>
                            <Link href="/">facebook</Link>
                          </li>
                          <li>
                            <Link href="/">X(Twitter)</Link>
                          </li>
                          <li>
                            <Link href="/">threads</Link>
                          </li>
                          <li>
                            <Link href="/">linkedin</Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="more-posts">
                      <div className="previous-post">
                        <Link href="/">
                          <span className="post-control-link">
                            Previous Post
                          </span>
                          <span className="post-name">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium.
                          </span>
                        </Link>
                      </div>
                      <div className="next-post">
                        <Link href="/">
                          <span className="post-control-link">Next Post</span>
                          <span className="post-name">
                            Dignissimos ducimus qui blanditiis praesentiu
                            deleniti atque corrupti quos dolores
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* <div className="comments-area">
                                        <div className="comments-section">
                                            <h3 className="comments-title">Comments</h3>
                                            <ol className="comments">
                                                <li className="comment even thread-even depth-1" id="comment-1">
                                                    <div id="div-comment-1">
                                                        <div className="comment-theme">
                                                            <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>user name <span className="comments-date">Date & time</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>CommentText </p>
                                                                    <div className="comments-reply">
                                                                        <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="children">
                                                        <li className="comment">
                                                            <div>
                                                                <div className="comment-theme">
                                                                    <div className="comment-image"><Image src={blog4} alt="" /></div>
                                                                </div>
                                                                <div className="comment-main-area">
                                                                    <div className="comment-wrapper">
                                                                        <div className="comments-meta">
                                                                            <h4>user <span className="comments-date">Date and time</span></h4>
                                                                        </div>
                                                                        <div className="comment-area">
                                                                            <p>comment text </p>
                                                                            <div className="comments-reply">
                                                                                <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="comment">
                                                    <div>
                                                        <div className="comment-theme">
                                                            <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>John Abraham <span className="comments-date">January 12,2022
                                                                        At 9.00am</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>I will give you a complete account of the system, and
                                                                        expound the actual teachings of the great explorer of
                                                                        the truth, </p>
                                                                    <div className="comments-reply">
                                                                        <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="comment-respond">
                                            <h3 className="comment-reply-title">Post Comments</h3>
                                            <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                                <div className="form-textarea">
                                                    <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                                </div>
                                                <div className="form-inputs">
                                                    <input placeholder="Website" type="url" />
                                                    <input placeholder="Name" type="text" />
                                                    <input placeholder="Email" type="email" />
                                                </div>
                                                <div className="form-submit">
                                                    <input id="submit" value="Post Comment" type="submit" />
                                                </div>
                                            </form>
                                        </div>
                                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
          <Scrollbar />
        </Fragment>
      )}
    </div>
  );
};
export default EventPage;
