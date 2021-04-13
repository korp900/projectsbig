import React from 'react';

export class PageHeader extends React.Component {
    constructor() {
        super();
        this.changeH1 = this.changeH1.bind(this);
        this.state = {
            h1: ""
        }
    }

    changeH1(title) {
        this.setState({
            h1: title
        })
    }

    render() {
        return (<h1 className="text-center">Welcome</h1>
        )
    }

}