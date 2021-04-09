import React from 'react';

export class PageHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="masthead" style={{backgroundImage: "url('/images/img_1.jpg')"}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{this.props.h1}</h1>
                                <span className="subheading">Проект группы 0201</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}