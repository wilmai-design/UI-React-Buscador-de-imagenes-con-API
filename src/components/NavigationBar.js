import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';

const Styles = styled.div`
    .navbar {
        background-color: #fff;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #222;
        transition: .4s;

        &:hover {
            color: #222;
            opacity: .5;
        }
    }

    .navbar-toggler {
        border: 0px solid transparent;
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
            <img
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo App"
                title="Logo App"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)