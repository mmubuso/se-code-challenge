import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'

const ComicNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand>
                    <Link to="/">Home</Link>
                </NavbarBrand>
                <Nav>
                    <Link to="/search">Search</Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default ComicNavbar;