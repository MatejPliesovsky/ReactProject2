import React, {Component} from 'react';
import AppBar2 from '../components/AppBar2.jsx';
import Footer from '../components/Footer.jsx'

export default class Login extends Component {
    render() {
        return (
            <div>
                <AppBar2 />
                <div>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
