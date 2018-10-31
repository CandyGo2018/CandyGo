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
 import tete from './tete.png';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        console.log('t',this.props.location)
        return (
            <div>
                <Navbar className="na" light expand="md">
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
                            <img src={tete} width="35" height="45" alt="icone"/>
                           <NavItem className="navb">
                            <NavLink className="navbid" href="/">{this.props.name || 'Identifiant'}</NavLink>
                           </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;