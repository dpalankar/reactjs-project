import React, { Component } from 'react';
export default class UserDashboard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log('Route ', this.props);
        return <div>User dashboard works!</div>
    }
}