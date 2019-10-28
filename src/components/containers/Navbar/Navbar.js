import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'

const ComicNavbar = (props) => {
  

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand>
                    <Link className="latest" to="/">Latest</Link>
                </NavbarBrand>
                <Nav>
                    <Link className="search" to="/search">Search</Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default ComicNavbar;