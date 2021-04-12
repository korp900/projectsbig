import React from 'react';
import {Link} from "react-router-dom";

export class Footer extends React.Component {
    render() {
        return (<div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <p className="mb-4"><img src="images/logo_footer.png" alt="Image" className="img-fluid"/>
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor,
                                iusto iure.</p>
                            <p><Link to="#">Learn More</Link></p>
                        </div>
                        <div className="col-lg-3">
                            <h3 className="footer-heading"><span>Solutions</span></h3>
                            <ul className="list-unstyled">
                                <li><Link to="#">Investment Bonds</Link></li>
                                <li><Link to="#">Financial Funds</Link></li>
                                <li><Link to="#">Growth Business</Link></li>
                                <li><Link to="#">Lifetime Support</Link></li>
                                <li><Link to="#">Advanced Accounting</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3 className="footer-heading"><span>Services</span></h3>
                            <ul className="list-unstyled">
                                <li><Link to="#">Investment Bonds</Link></li>
                                <li><Link to="#">Financial Funds</Link></li>
                                <li><Link to="#">Growth Business</Link></li>
                                <li><Link to="#">Lifetime Support</Link></li>
                                <li><Link to="#">Advanced Accounting</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3 className="footer-heading"><span>Contact</span></h3>
                            <ul className="list-unstyled">
                                <li><Link to="#">Help Center</Link></li>
                                <li><Link to="#">Support Community</Link></li>
                                <li><Link to="#">Press</Link></li>
                                <li><Link to="#">Share Your Story</Link></li>
                                <li><Link to="#">Our Supporters</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="copyright">
                                <p>
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | This template is made with <i className="icon-heart"
                                                                                        aria-hidden="true"></i> by <Link
                                    to="https://colorlib.com" target="_blank">Colorlib</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}