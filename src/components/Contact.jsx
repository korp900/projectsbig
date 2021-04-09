import React from 'react';

export class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container m-5">
                <div className="row m-5">
                    <div className="col-lg-8 col-md-10 mx-auto m-5">
                        <form name="sentMessage" id="contactForm m-5" noValidate>
                            <div className="control-group m-5">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Name" id="name" required
                                           data-validation-required-message="Please enter your name."/>

                                </div>
                            </div>
                            <div className="control-group m-5">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="Email Address" id="email"
                                           required
                                           data-validation-required-message="Please enter your email address."/>

                                </div>
                            </div>
                            <div className="control-group m-5">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Phone Number</label>
                                    <input type="tel" className="form-control" placeholder="Phone Number" id="phone"
                                           required data-validation-required-message="Please enter your phone number."/>

                                </div>
                            </div>
                            <div className="control-group m-5">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Message</label>
                                    <textarea rows="5" className="form-control" placeholder="Message" id="message"
                                              required
                                              data-validation-required-message="Please enter a message."/>

                                </div>
                            </div>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}