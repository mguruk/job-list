import React,{Component} from 'react';
import {Navbar,Nav,NavItem,NavLink,NavbarBrand} from 'reactstrap';
import SearchBar from './SearchBar';
class Header extends Component{

    render(){
        return(
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
                        <SearchBar   />
                        <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        </Nav>
                    </Navbar>
                </div>
        );
    }
}
export default Header;