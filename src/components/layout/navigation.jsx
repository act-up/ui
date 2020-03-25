import React, { StatelessComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap'

const Navigation: React.StatelessComponent = () => {
    return(
        <Navbar bg="light" variant="light">
          <Navbar.Brand><NavLink to="/campaigns">Empower2Act</NavLink></Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Item>
                <Button variant="info"><NavLink to='/suggestions'>Suggest a Campaign</NavLink></Button>{' '}
            </Nav.Item>
            <Nav.Item>
                <Button variant="info"><NavLink to='/donate'>Donate</NavLink></Button>{' '}
            </Nav.Item>
          </Nav>
        </Navbar>
    );
};

export default Navigation;
