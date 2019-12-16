import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import banner from '../../assets/banner.jpg';
import ComponentName from '../../randomFunctions/CoponentName';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { loginSubmit } from '../../redux/actions/userActions';

// const mapStateToProps = state => {
//     return { login: state.loginData }
// }

// function mapStateToProps(dispatch) {
//     return {
//         loginSubmit: value => dispatch(loginSubmit(value))
//     };
// }


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "", password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const type = event.target.type,
            value = event.target.value;

        this.setState({
            [type]: value
        })
        // this.props.loginSubmit(this.state);
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.email.length > 0 && this.state.password.length > 0) {
            const data = {
                userData: this.state.email,
                isLoggedIn: true
            }
            localStorage.setItem("user", JSON.stringify(data))
            this.props.history.push("/admin/dashboard", this.state);
        } else {
            console.log("WRONG");
        }
    }

    render() {
        return (
            <div className="content">
                <Row>
                    <Col md={10}>
                        {/* <ComponentName {...this.props}></ComponentName> */}
                        < Row >
                            <Col>
                                <img className="col d-flex align-items-center justify-content-center" alt={banner} src={banner} />
                            </Col>
                        </Row >

                        <Row className="main-sub-content">
                            <Col md={12}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="username" value={this.state.email} className="text-center" onChange={this.handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="password" value={this.state.password} className="text-center" onChange={this.handleChange} />
                                    </Form.Group>
                                    <Button variant="primary" value="Submit" type="submit">Login</Button>
                                 
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div >
        )
    }
}


export default Login;