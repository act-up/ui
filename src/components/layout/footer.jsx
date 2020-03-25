import React, { StatelessComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap'

const Footer: React.StatelessComponent = () => {
  return (
      <footer className='footer mt-auto py-3 bg-dark text-white'>
        <Container fluid>
            <Row>
                <Col sm={8}>
                    <Nav>
                        <Nav.Item>
                          <Nav.Link><NavLink to='/about'>About</NavLink></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link><NavLink to='/contact'>Contact</NavLink></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link><NavLink to='/privacy'>Privacy</NavLink></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link><NavLink to='/impact'>Impact</NavLink></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={4}>
                    <p className="text-right">&copy; 2020</p>
                </Col>
            </Row>
        </Container>
      </footer>

  );
};

export default Footer;
