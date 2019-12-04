import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import banner from "../assets/banner.jpg";
import ComponentName from "../randomFunctions/CoponentName";
import FontAwesome from "react-fontawesome";
import { Card, CardBody, CardTitle, Table } from "reactstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("this.state", this.state);
    return (
      <div className="content">
        <Row>
          <Col md={10}>
            <ComponentName {...this.props} />
            <Row>
              <Col>
                <img
                  className="col d-flex align-items-center justify-content-center"
                  alt="banner"
                  src={banner}
                />
              </Col>
            </Row>
            <Card>
              <CardBody>
                <div className="d-flex align-items-center">
                  <div>
                    <CardTitle>
                      <h1>Business Overview</h1>
                    </CardTitle>
                  </div>
                </div>
                <Table className="no-wrap v-middle h-center" responsive>
                  <thead>
                    <tr className="border-0">
                      <th className="border-0">Revenue</th>
                      <th className="border-0">Invoiced</th>
                      <th className="border-0">Collection</th>
                      <th className="border-0">Pending</th>
                    </tr>
                  </thead>
                  <tbody className="h-center">
                    <tr>
                      <td>
                        <div className="d-flex no-block align-items-center mb-0 font-16 font-medium justify-items-center">
                          {/* <div className=""> */}
                          {/* <span className=""> */}
                          All Customers
                          {/* </span> */}
                          {/* </div> */}
                        </div>
                      </td>
                      <td>
                        <FontAwesome name="inr" /> 42,000.00
                      </td>

                      <td>
                        <FontAwesome name="inr" /> 36,000.00
                      </td>
                      <td>
                        <FontAwesome name="inr" /> 6,000.00
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <Table className="no-wrap v-middle h-center" responsive>
                  <thead>
                    <tr className="border-0">
                      <th className="border-0">Cost</th>
                      <th className="border-0">Invoiced</th>
                      <th className="border-0">Paid</th>
                      <th className="border-0">Due</th>
                    </tr>
                  </thead>
                  <tbody className="h-center">
                    <tr>
                      <td>
                        <div className="d-flex no-block align-items-center justify-items-center">
                          {/* <div className=""> */}
                          <h5 className="mb-0 font-16 font-medium">
                            All Suppliers
                          </h5>
                          {/* </div> */}
                        </div>
                      </td>
                      <td>
                        <FontAwesome name="inr" /> 15,000.00
                      </td>

                      <td>
                        <FontAwesome name="inr" /> 10,500.00
                      </td>
                      <td>
                        <FontAwesome name="inr" /> 4,500.00
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Dashboard;
