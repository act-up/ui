import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap'
import {SocialMediaIconsReact} from 'social-media-icons-react';

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
                        <Nav.Item>
                            <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="0" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(251,251,251,0)" iconSize="4" roundness="32%" url="https://www.twitter.com/#" size="25" />
                        </Nav.Item>
                        <Nav.Item>
                            <SocialMediaIconsReact borderColor="rgba(255,255,255,1)" borderWidth="0" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(251,251,251,0)" iconSize="4" roundness="32%" url="https://www.instagram.com/#" size="25" />
                        </Nav.Item>
                        <Nav.Item>
                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,0)" iconSize="5" roundness="20%" url="https://github.com/act-up" size="25" />
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
