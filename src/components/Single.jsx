import React from "react";
import {Link} from "react-router-dom";

export class Single extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div className="intro-section small" style={{backgroundImage: "url('images/hero_1.jpg')"}}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                            <div className="intro">
                                <h1>Blog Post Single</h1>
                                <p>June 3, 2020, by Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 blog-content">
                                <p className="lead">Far far away, behind the word mountains, far from the countries
                                    Vokalia and
                                    Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                                    at the
                                    coast of the Semantics, a large language ocean.</p>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.
                                    It is a paradisematic country, in which roasted parts of sentences fly into your
                                    mouth.</p>

                                <blockquote><p>Even the all-powerful Pointing has no control about the blind texts it is
                                    an
                                    almost unorthographic life One day however a small line of blind text by the name of
                                    Lorem
                                    Ipsum decided to leave for the far World of Grammar.</p></blockquote>

                                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
                                    wild
                                    Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She
                                    packed her
                                    seven versalia, put her initial into the belt and made herself on the way.</p>

                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on
                                    the
                                    skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the
                                    subline of
                                    her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then
                                    she
                                    continued her way.</p>

                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.
                                    It is a paradisematic country, in which roasted parts of sentences fly into your
                                    mouth.</p>

                                <blockquote><p>Even the all-powerful Pointing has no control about the blind texts it is
                                    an
                                    almost unorthographic life One day however a small line of blind text by the name of
                                    Lorem
                                    Ipsum decided to leave for the far World of Grammar.</p></blockquote>

                                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
                                    wild
                                    Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She
                                    packed her
                                    seven versalia, put her initial into the belt and made herself on the way.</p>

                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on
                                    the
                                    skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the
                                    subline of
                                    her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then
                                    she
                                    continued her way.</p>


                                <div className="pt-5">
                                    <p>Categories: <Link to="#">Design</Link>, <Link to="#">Events</Link> Tags:
                                        <Link to="#">#html</Link>, <Link to="#">#trends</Link></p>
                                </div>


                                <div className="pt-5">
                                    <h3 className="mb-5">6 Comments</h3>
                                    <ul className="comment-list">
                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_2.jpg"
                                                     alt="Free Website Template by Free-Template.co"/>
                                            </div>
                                            <div className="comment-body">
                                                <h3>Jacob Smith</h3>
                                                <div className="meta">January 9, 2018 at 2:21pm</div>
                                                <p>When she reached the first hills of the Italic Mountains, she had a
                                                    last view
                                                    back on the skyline of her hometown Bookmarksgrove, the headline of
                                                    Alphabet
                                                    Village and the subline of her own road, the Line Lane. Pityful a
                                                    rethoric
                                                    question ran over her cheek, then she continued her way.</p>
                                                <p><Link to="#" className="reply">Reply</Link></p>
                                            </div>
                                        </li>

                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_3.jpg"
                                                     alt="Free Website Template by Free-Template.co"/>
                                            </div>
                                            <div className="comment-body">
                                                <h3>Chris Meyer</h3>
                                                <div className="meta">January 9, 2018 at 2:21pm</div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                                                    quidem
                                                    laborum necessitatibus, ipsam impedit vitae autem, eum officia,
                                                    fugiat saepe
                                                    enim sapiente iste iure! Quam voluptas earum impedit necessitatibus,
                                                    nihil?</p>
                                                <p><Link to="#" className="reply">Reply</Link></p>
                                            </div>

                                            <ul className="children">
                                                <li className="comment">
                                                    <div className="vcard bio">
                                                        <img src="images/person_5.jpg"
                                                             alt="Free Website Template by Free-Template.co"/>
                                                    </div>
                                                    <div className="comment-body">
                                                        <h3>Chintan Patel</h3>
                                                        <div className="meta">January 9, 2018 at 2:21pm</div>
                                                        <p>Far far away, behind the word mountains, far from the
                                                            countries
                                                            Vokalia and Consonantia, there live the blind texts.
                                                            Separated they
                                                            live in Bookmarksgrove right at the coast of the Semantics,
                                                            a large
                                                            language ocean.</p>
                                                        <p><Link to="#" className="reply">Reply</Link></p>
                                                    </div>


                                                    <ul className="children">
                                                        <li className="comment">
                                                            <div className="vcard bio">
                                                                <img src="images/person_1.jpg"
                                                                     alt="Free Website Template by Free-Template.co"/>
                                                            </div>
                                                            <div className="comment-body">
                                                                <h3>Jean Doe</h3>
                                                                <div className="meta">January 9, 2018 at 2:21pm</div>
                                                                <p>A small river named Duden flows by their place and
                                                                    supplies
                                                                    it with the necessary regelialia. It is a
                                                                    paradisematic
                                                                    country, in which roasted parts of sentences fly
                                                                    into your
                                                                    mouth.</p>
                                                                <p><Link to="#" className="reply">Reply</Link></p>
                                                            </div>

                                                            <ul className="children">
                                                                <li className="comment">
                                                                    <div className="vcard bio">
                                                                        <img src="images/person_4.jpg"
                                                                             alt="Free Website Template by Free-Template.co"/>
                                                                    </div>
                                                                    <div className="comment-body">
                                                                        <h3>Ben Afflick</h3>
                                                                        <div className="meta">January 9, 2018 at
                                                                            2:21pm
                                                                        </div>
                                                                        <p>Even the all-powerful Pointing has no control
                                                                            about
                                                                            the blind texts it is an almost
                                                                            unorthographic life
                                                                            One day however a small line of blind text
                                                                            by the
                                                                            name of Lorem Ipsum decided to leave for the
                                                                            far
                                                                            World of Grammar.</p>
                                                                        <p><Link to="#" className="reply">Reply</Link>
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="comment">
                                            <div className="vcard bio">
                                                <img src="images/person_1.jpg"
                                                     alt="Free Website Template by Free-Template.co"/>
                                            </div>
                                            <div className="comment-body">
                                                <h3>Jean Doe</h3>
                                                <div className="meta">January 9, 2018 at 2:21pm</div>
                                                <p>Even the all-powerful Pointing has no control about the blind texts
                                                    it is an
                                                    almost unorthographic life One day however a small line of blind
                                                    text by the
                                                    name of Lorem Ipsum decided to leave for the far World of
                                                    Grammar.</p>
                                                <p><Link to="#" className="reply">Reply</Link></p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="comment-form-wrap pt-5">
                                        <h3 className="mb-5">Leave a comment</h3>
                                        <form action="#" className="">
                                            <div className="form-group">
                                                <label htmlFor="name">Name *</label>
                                                <input type="text" className="form-control" id="name"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email *</label>
                                                <input type="email" className="form-control" id="email"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="website">Website</label>
                                                <input type="url" className="form-control" id="website"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea name="" id="message" cols="30" rows="10"
                                                          className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Post Comment"
                                                       className="btn btn-primary btn-md text-white"/>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-4 sidebar">
                                <div className="sidebar-box">
                                    <form action="#" className="search-form">
                                        <div className="form-group">
                                            <span className="icon fa fa-search"></span>
                                            <input type="text" className="form-control"
                                                   placeholder="Type a keyword and hit enter"/>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-box">
                                    <div className="categories">
                                        <h3>Categories</h3>
                                        <li><Link to="#">Creatives <span>(12)</span></Link></li>
                                        <li><Link to="#">News <span>(22)</span></Link></li>
                                        <li><Link to="#">Design <span>(37)</span></Link></li>
                                        <li><Link to="#">HTML <span>(42)</span></Link></li>
                                        <li><Link to="#">Web Development <span>(14)</span></Link></li>
                                    </div>
                                </div>
                                <div className="sidebar-box">
                                    <img src="images/person_1.jpg" alt="Free Website Template by Free-Template.co"
                                         className="img-fluid mb-4 w-50 rounded-circle"/>
                                    <h3 className="text-black">About The Author</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                        almost
                                        unorthographic life One day however a small line of blind text by the name of
                                        Lorem
                                        Ipsum decided to leave for the far World of Grammar.</p>
                                    <p><Link to="#" className="btn btn-primary btn-md text-white">Read More</Link></p>
                                </div>

                                <div className="sidebar-box">
                                    <h3 className="text-black">Paragraph</h3>
                                    <p>When she reached the first hills of the Italic Mountains, she had a last view
                                        back on the
                                        skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the
                                        subline
                                        of her own road, the Line Lane. Pityful a rethoric question ran over her cheek,
                                        then she
                                        continued her way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}