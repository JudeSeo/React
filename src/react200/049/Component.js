import React, {Component, useState} from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);
    return (<>
        <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2"/>
            <Collapse isOpen={collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="#">react</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="http://example.com">200</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </>)
}

export default NavBar;
