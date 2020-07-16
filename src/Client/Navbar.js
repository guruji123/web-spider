import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './navbar.css';
class Navbar extends Component {
    render () {
        return (
            <ul className="d-flex">
            <li ><Link to="/">Sign up</Link></li>
            <li ><Link to="/login">Log In</Link></li>
            <li ><Link to="/fileManager"></Link></li>
            </ul>

        )
    }
     
}

export default withRouter(Navbar);