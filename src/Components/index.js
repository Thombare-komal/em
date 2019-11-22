import React, { Component } from 'react';
import Header from './Layouts/Header';
import Sidebar from './Layouts/Sidebar';
import Footer from './Layouts/Footer';
import Main from './Layouts/Main';
import { Container, Row, Col } from 'react-bootstrap';

class Layouts extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={12} xs={12}>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={6}>
                        <Main />
                    </Col>
                </Row>
                {/* <Row>
                    <Col md={12} xs={12}>
                        <Footer />
                    </Col>
                </Row> */}
            </div >
        )
    }
}

export default Layouts;
