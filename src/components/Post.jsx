import React from "react";
import {Link} from "react-router-dom";

export class Post extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div className="hero-slide owl-carousel site-blocks-cover">
                <div className="intro-section" style={{backgroundImage: "url('images/hero_1.jpg')"}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                                <h1>Book Keeping Consulting Agency</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.</p>
                                <p><Link href="#" className="btn btn-primary">Get Started</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro-section" style={{backgroundIimage: "url('images/hero_2.jpg')"}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                                <div className="intro">
                                    <h1>Financial Funds</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.</p>
                                    <p><Link to="#" className="btn btn-primary">Get Started</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="images/hero_1.jpg" alt="Image" className="img-fluid"/>
                            </div>
                            <div className="col-lg-5 ml-auto">
                                <span className="caption">About Us</span>
                                <h2 className="title-with-line">Mindful Planning of Monetary Spending and Saving</h2>


                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                                    voluptate
                                    asperiores rem quis consectetur cum quae, ratione voluptatem aliquam sit
                                    aspernatur.</p>


                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-unstyled ul-arrow">
                                            <li>Dolor sit amet</li>
                                            <li>Obcaecati similique excepturi</li>
                                            <li>Ipsum amet voluptas</li>
                                            <li>Aliquid facilis est</li>
                                            <li>Eligendi laborum assumenda</li>
                                        </ul>

                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-unstyled ul-arrow float-left">
                                            <li>Dolor sit amet</li>
                                            <li>Obcaecati similique excepturi</li>
                                            <li>Ipsum amet voluptas</li>
                                            <li>Aliquid facilis est</li>
                                            <li>Eligendi laborum assumenda</li>
                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="numbers">
                                    <strong className="d-block">32, 594</strong>
                                    <span>Number of Clients</span>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="numbers">
                                    <strong className="d-block">25</strong>
                                    <span>Years of Experience</span>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="numbers">
                                    <strong className="d-block">1,029</strong>
                                    <span>Employees</span>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="numbers">
                                    <strong className="d-block">10,200</strong>
                                    <span>Cup of Coffees</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-section bg-light pb-0">
                    <div className="container">
                        <div className="row mb-5 justify-content-center text-center">
                            <div className="col-lg-4">
                                <span className="caption">Our Services</span>
                                <h2 className="title-with-line text-center mb-5">What We Do</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">

                                <div className="feature-1">
                                    <div className="icon-wrapper bg-primary">

                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-bar-chart-line"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
                                            <path fill-rule="evenodd"
                                                  d="M0 14.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                    </div>
                                    <div className="feature-1-content">
                                        <h2>Growth Business</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                        <p><Link to="#" className="btn btn-primary px-4 ">Learn More</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-1">
                                    <div className="icon-wrapper bg-primary">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-life-preserver"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path fill-rule="evenodd"
                                                  d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                                            <path
                                                d="M11.642 6.343L15 5v6l-3.358-1.343A3.99 3.99 0 0 0 12 8a3.99 3.99 0 0 0-.358-1.657zM9.657 4.358L11 1H5l1.343 3.358A3.985 3.985 0 0 1 8 4c.59 0 1.152.128 1.657.358zM4.358 6.343L1 5v6l3.358-1.343A3.985 3.985 0 0 1 4 8c0-.59.128-1.152.358-1.657zm1.985 5.299L5 15h6l-1.343-3.358A3.984 3.984 0 0 1 8 12a3.99 3.99 0 0 1-1.657-.358z"/>
                                        </svg>
                                    </div>
                                    <div className="feature-1-content">
                                        <h2>Lifetime Support</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                        <p><Link to="#" className="btn btn-primary px-4 ">Learn More</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-1">
                                    <div className="icon-wrapper bg-primary">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-circle-square"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z"/>
                                            <path
                                                d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z"/>
                                        </svg>
                                    </div>
                                    <div className="feature-1-content">
                                        <h2>Advanced Accounting</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                        <p><Link to="#" className="btn btn-primary px-4 ">Learn More</Link></p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6">

                                <div className="feature-1">
                                    <div className="icon-wrapper bg-primary">

                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-wallet2"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.5 4l10-3A1.5 1.5 0 0 1 14 2.5v2h-1v-2a.5.5 0 0 0-.5-.5L5.833 4H2.5z"/>
                                            <path fill-rule="evenodd"
                                                  d="M1 5.5A1.5 1.5 0 0 1 2.5 4h11A1.5 1.5 0 0 1 15 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-8zM2.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11z"/>
                                        </svg>
                                    </div>
                                    <div className="feature-1-content">
                                        <h2>Investment Bonds</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                        <p><Link to="#" className="btn btn-primary px-4 ">Learn More</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-1">
                                    <div className="icon-wrapper bg-primary">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-briefcase"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"/>
                                            <path fill-rule="evenodd"
                                                  d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"/>
                                        </svg>
                                    </div>
                                    <div className="feature-1-content">
                                        <h2>Investment Management</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                        <p><Link to="#" className="btn btn-primary px-4 ">Learn More</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-1">
                                    <div className="icon-wrapper bg-primary">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-calculator-fill"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M12 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                            <path
                                                d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
                                        </svg>
                                    </div>
                                    <div className="feature-1-content">
                                        <h2>Money Calculations</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                        <p><Link to="#" className="btn btn-primary px-4 ">Learn More</Link></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="intro-section small" style={{backgroundIimage: "url('images/hero_1.jpg')"}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                                <h1>We Are Here To Help Grow Your Business </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.</p>
                                <p><Link to="#" className="btn btn-primary">Get Started</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-bg style-1" style={{backgroundImage: "url('images/hero_1.jpg')"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 text-center mx-auto">
                                <span className="caption text-white">Testimonials</span>
                                <h2 className="title-with-line text-center mb-5 text-white">Happy Clients</h2>
                            </div>
                        </div>


                        <div className="owl-slide owl-carousel owl-testimonial">

                            <div className="ftco-testimonial-1">
                                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                                    <img src="images/person_1.jpg" alt="Image" className="img-fluid mr-3"/>
                                    <div>
                                        <h3>Allison Holmes</h3>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <div>
                                    <p>&ldquo;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia.
                                        Possimus mollitia nobis libero quidem aut tempore dolore iure maiores,
                                        perferendis,
                                        provident numquam illum nisi amet necessitatibus. A, provident
                                        aperiam!&rdquo;</p>
                                </div>
                            </div>

                            <div className="ftco-testimonial-1">
                                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                                    <img src="images/person_2.jpg" alt="Image" className="img-fluid mr-3"/>
                                    <div>
                                        <h3>Allison Holmes</h3>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia.
                                        Possimus
                                        mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis,
                                        provident
                                        numquam illum nisi amet necessitatibus. A, provident aperiam!</p>
                                </div>
                            </div>

                            <div className="ftco-testimonial-1">
                                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                                    <img src="images/person_4.jpg" alt="Image" className="img-fluid mr-3"/>
                                    <div>
                                        <h3>Allison Holmes</h3>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <div>
                                    <p>&ldquo;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia.
                                        Possimus mollitia nobis libero quidem aut tempore dolore iure maiores,
                                        perferendis,
                                        provident numquam illum nisi amet necessitatibus. A, provident
                                        aperiam!&rdquo;</p>
                                </div>
                            </div>

                            <div className="ftco-testimonial-1">
                                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                                    <img src="images/person_3.jpg" alt="Image" className="img-fluid mr-3"/>
                                    <div>
                                        <h3>Allison Holmes</h3>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia.
                                        Possimus
                                        mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis,
                                        provident
                                        numquam illum nisi amet necessitatibus. A, provident aperiam!</p>
                                </div>
                            </div>

                            <div className="ftco-testimonial-1">
                                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                                    <img src="images/person_2.jpg" alt="Image" className="img-fluid mr-3"/>
                                    <div>
                                        <h3>Allison Holmes</h3>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <div>
                                    <p>&ldquo;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia.
                                        Possimus mollitia nobis libero quidem aut tempore dolore iure maiores,
                                        perferendis,
                                        provident numquam illum nisi amet necessitatibus. A, provident
                                        aperiam!&rdquo;</p>
                                </div>
                            </div>

                            <div className="ftco-testimonial-1">
                                <div className="ftco-testimonial-vcard d-flex align-items-center mb-4">
                                    <img src="images/person_4.jpg" alt="Image" className="img-fluid mr-3"/>
                                    <div>
                                        <h3>Allison Holmes</h3>
                                        <span>Designer</span>
                                    </div>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia.
                                        Possimus
                                        mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis,
                                        provident
                                        numquam illum nisi amet necessitatibus. A, provident aperiam!</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                <div className="site-section">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4 mb-5">
                                <span className="caption">News</span>
                                <h2 className="title-with-line mb-2">Latest News &amp; Updates</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="news-entry-item">
                                    <Link to="#" className="thumbnail">
                                        <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
                                        <div className="date">
                                            <span>3</span>
                                            <span>July</span>
                                        </div>
                                    </Link>
                                    <h3 className="mb-0"><Link to="#">Enim Ducimus molestiae digniss sunt</Link></h3>
                                    <div className="mb-3">
                                        by <Link to="#">Craig Smith</Link> at Colorlib
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minus maiores,
                                        neque
                                        repellendus molestias! Odio voluptas, et fuga. Quae, animi.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="news-entry-item">
                                    <Link to="#" className="thumbnail">
                                        <img src="images/img_2.jpg" alt="Image" className="img-fluid"/>
                                        <div className="date">
                                            <span>3</span>
                                            <span>July</span>
                                        </div>
                                    </Link>
                                    <h3 className="mb-0"><Link to="#">Enim Ducimus molestiae digniss sunt</Link></h3>
                                    <div className="mb-3">
                                        by <Link to="#">Craig Smith</Link> at Colorlib
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minus maiores,
                                        neque
                                        repellendus molestias! Odio voluptas, et fuga. Quae, animi.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="news-entry-item">
                                    <Link to="#" className="thumbnail">
                                        <img src="images/img_3.jpg" alt="Image" className="img-fluid"/>
                                        <div className="date">
                                            <span>3</span>
                                            <span>July</span>
                                        </div>
                                    </Link>
                                    <h3 className="mb-0"><Link to="#">Enim Ducimus molestiae digniss sunt</Link></h3>
                                    <div className="mb-3">
                                        by <Link to="#">Craig Smith</Link> at Colorlib
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minus maiores,
                                        neque
                                        repellendus molestias! Odio voluptas, et fuga. Quae, animi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="site-section ftco-subscribe-1" style={{backgroundImage: "url('images/hero_2.jpg')"}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h2>Subscribe to us!</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                    Consonantia,</p>
                            </div>
                            <div className="col-lg-5">
                                <form action="" className="d-flex">
                                    <input type="text" className="rounded form-control mr-2 py-3"
                                           placeholder="Enter your email"/>
                                    <button className="btn btn-primary rounded py-3 px-4" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}