import React from "react";
import {Link} from "react-router-dom";
import {Footer} from "./Footer";


export class Blog extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div className="intro-section small" style={{backgroundImage: "url('images/hero_1.jpg')"}}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 mx-auto text-center" data-aos="fade-up">
                            <div className="intro">
                                <h1>Blog</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.</p>
                                <p><Link to="#" className="btn btn-primary">Get Started</Link></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="site-section pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 mb-5">
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
                            <div className="col-lg-4 mb-5">
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
                            <div className="col-lg-4 mb-5">
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


                            <div className="col-lg-4 mb-5">
                                <div className="news-entry-item">
                                    <Link to="#" className="thumbnail">
                                        <img src="/mages/img_1.jpg" alt="Image" className="img-fluid"/>
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
                            <div className="col-lg-4 mb-5">
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
                            <div className="col-lg-4 mb-5">
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
            </div>

        )
    }
}

<Footer/>
