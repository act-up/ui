import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap'
import IssueContext from './context'

class Navigation extends Component {

    static contextType = IssueContext;

    render() {
        let value = this.context;
        console.log(value.selected_issue)

        return(
            <IssueContext.Consumer>
                {value, ({updateIssue}) => (
                    <Navbar bg="light" variant="light">
                        <Navbar.Brand>
                            <NavLink to='/'
                                value={0}
                                onClick={() => updateIssue(0)}>
                                Act.Up
                            </NavLink>
                        </Navbar.Brand>
                      <Nav className="justify-content-end">
                        <Nav.Item>
                            <Button variant="info"><NavLink to='/suggestions'>Suggest a Campaign</NavLink></Button>{' '}
                        </Nav.Item>
                        <Nav.Item>
                            <Button variant="info"><NavLink to='/donate'>Donate</NavLink></Button>{' '}
                        </Nav.Item>
                      </Nav>
                    </Navbar>
                )}
            </IssueContext.Consumer>
        )
    }
};

export default Navigation;
