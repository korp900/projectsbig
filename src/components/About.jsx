import React from "react";
import {Link} from "react-router-dom";

export class About extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div className="intro-section small" style={{backgroundImage: "url('images/hero_1.jpg')"}}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                            <div className="intro">
                                <h1>About Us</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.</p>
                                <p><Link to="#" className="btn btn-primary">Get Started</Link></p>
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


                <div className="site-section pb-0">
                    <div className="container">
                        <div className="row mb-5 justify-content-center text-center">
                            <div className="col-lg-4 mb-5 text-center">
                                <span className="caption">Our Team</span>
                                <h2 className="title-with-line mb-2 text-center">Our Leadership</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">

                                <div className="feature-1 border person text-center">
                                    <img src="images/person_1.jpg" alt="Image" className="img-fluid"/>
                                    <div className="feature-1-content">
                                        <h2>Craig Daniel</h2>
                                        <span className="position mb-3 d-block">Co-Founder, CEO</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                                <div className="feature-1 border person text-center">
                                    <img src="images/person_2.jpg" alt="Image" className="img-fluid"/>
                                    <div className="feature-1-content">
                                        <h2>Taylor Simpson</h2>
                                        <span className="position mb-3 d-block">Co-Founder, CEO</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                                <div className="feature-1 border person text-center">
                                    <img src="images/person_3.jpg" alt="Image" className="img-fluid"/>
                                    <div className="feature-1-content">
                                        <h2>Jonas Tabble</h2>
                                        <span className="position mb-3 d-block">Co-Founder, CEO</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">

                                <div className="feature-1 border person text-center">
                                    <img src="images/person_4.jpg" alt="Image" className="img-fluid"/>
                                    <div className="feature-1-content">
                                        <h2>Craig Daniel</h2>
                                        <span className="position mb-3 d-block">Co-Founder, CEO</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                                <div className="feature-1 border person text-center">
                                    <img src="images/person_2.jpg" alt="Image" className="img-fluid"/>
                                    <div className="feature-1-content">
                                        <h2>Taylor Simpson</h2>
                                        <span className="position mb-3 d-block">Co-Founder, CEO</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-5 mb-lg-5">
                                <div className="feature-1 border person text-center">
                                    <img src="images/person_3.jpg" alt="Image" className="img-fluid"/>
                                    <div className="feature-1-content">
                                        <h2>Jonas Tabble</h2>
                                        <span className="position mb-3 d-block">Co-Founder, CEO</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit
                                            elit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="intro-section small" style={{backgroundImage: "url('images/hero_1.jpg')"}}>
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


                <div className="site-section ftco-subscribe-1" style={{backgroundIimage: "url('images/hero_2.jpg')"}}>
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
