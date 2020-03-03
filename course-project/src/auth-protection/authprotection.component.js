import React, { Component } from 'react';
import { checkLogin } from '../services';


class AuthProtection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            loginverified: false
        }
    }

    changeLoginStatus(status) {
        this.setState({ loggedIn: status, loginverified: true })
    }

    componentDidMount() {
        checkLogin((status, data) => {
            this.changeLoginStatus(status, data)
        });
    }
    render() {
        console.log('Props', this.props);
        let { loggedIn, loginverified } = this.state;
        return (<div>
            {
                !loginverified && <div>Loading route .Please wait..</div>
            }
            {
                loginverified &&
                <div>
                    {loggedIn && React.cloneElement(this.props.authview, this.props.routeprops)}
                    {(!loggedIn && !this.props.authview) && <div>Not Autherised</div>}
                    {(!loggedIn && this.props.authview) && this.props.noAuthview}
                </div>
            }
        </div>
        )
    }
}

export default AuthProtection;