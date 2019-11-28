import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';

class ComponentName extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Row>
                <Col md={4} >
                    <p className="component-header"> {this.props.componentName} </p>
                </Col>
            </Row>
        );
    }
}

export default ComponentName;