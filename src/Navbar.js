import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="na" dark expand="md">
                    <NavbarBrand className="nav">Candy Go</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="navb">
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem className="navb">
                                <NavLink href="/Bonbondex/">Bonbondex</NavLink>
                            </NavItem>
                           <NavItem className="navb">
                                <NavLink href="/">identifiant</NavLink>
                           </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;