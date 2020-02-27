import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom';

import '../App.css';

class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar navbar-inverse" >
                <div className="container-fluid">
                    <div className="navbar navbar-expand-lg navbar-light">

                        <a className="navbar-brand" href="/">Logotipo</a>

                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                           <li className={this.getNavLinkClass("/")}><NavLink to="/" >Home</NavLink></li>
                           <li className={this.getNavLinkClass("/agregar")}><NavLink to="/agregar">Agregar</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;