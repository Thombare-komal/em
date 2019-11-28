import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import banner from '../../assets/banner.jpg';
import ComponentName from '../../randomFunctions/CoponentName';
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="content">
                <Row>
                    <Col md={10}>
                        <ComponentName {...this.props}></ComponentName>
                        < Row >
                            <Col>
                                <img className="col d-flex align-items-center justify-content-center" alt={banner} src={banner} />
                            </Col>
                        </Row >

                        <Row>
                            <Col md={{ offset: 2, span: 8 }}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="username" className="text-center" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="password" className="text-center" />
                                    </Form.Group>
                                    <Button variant="primary" block type="submit">
                                        Login
                            </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>);
            </div >
        )
    }
}


export default Login;