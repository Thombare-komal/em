import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import banner from '../../assets/banner.jpg';
import './Login.css';

class Login extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <img src={banner} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="username" className="text-center" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="password" className="text-center"  />
                            </Form.Group>
                            <Button variant="primary"  block type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Login;