import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Profile from "./components/Profile";
import I18n from "./components/I18n";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={4} lg={4}>
          <Profile />
        </Col>
        <Col lg={1}>
          <I18n />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
