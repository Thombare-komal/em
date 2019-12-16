// import React, { Component } from "react";
// import { Row, Col, Button } from "react-bootstrap";
// import FontAwesome from "react-fontawesome";
// import { Card, CardBody, CardTitle, Table } from "reactstrap";
// import banner from "../assets/banner.jpg";

// class InvoiceDetail extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     console.log("this.state", this.state);
//     return (
//       <div className="content">
//         <Row>
//           <Col md={10}>
//             <Row>
//               <Col>
//                 <img
//                   className="col d-flex align-items-center justify-content-center"
//                   alt="banner"
//                   src={banner}
//                 />
//               </Col>
//             </Row>
//             <Card>
//               <CardBody>
//                 <div className="d-flex align-items-center">
//                   <div>
//                     <CardTitle>
//                       <h1>Your Invocie has been Sent</h1>
//                     </CardTitle>
//                   </div>
//                 </div>
//                 <Table className="no-wrap v-middle h-center" responsive>
//                   <tbody className="h-center">
//                     <tr>
//                       <td>
//                         <div className="d-flex no-block align-items-center mb-0 font-16 font-medium justify-items-center">
//                           Invoice Number :
//                         </div>
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <FontAwesome name="inr" /> 42,000.00
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <FontAwesome name="inr" /> 36,000.00
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>
//                         <FontAwesome name="inr" /> 6,000.00
//                       </td>
//                     </tr>
//                   </tbody>
//                 </Table>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     title: state.title
//   };
// };
// export default connect(mapStateToProps)(MyComponent);
