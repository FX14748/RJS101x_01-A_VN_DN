import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem,Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

  render() {
    return(
        <Navbar dark color="primary" expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                <NavItem>
                    <NavLink className="nav-link"  to='/stafflist'><span className="fa fa-user fa-lg"></span> Nhân viên</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link"  to='/department'><span className="fa fa-address-card fa-lg"></span> Phòng Ban</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link"  to='/payslip'><span className="fa fa-money fa-lg"></span> Bảng Lương</NavLink>
                </NavItem>
                </Nav>
                </Collapse>

        </div>
    </Navbar>
    );
  }
}

export default Header;