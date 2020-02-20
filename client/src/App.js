import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feeds from "./components/Rss-feeds";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col
            md={{ span: true }}
            style={{ textAlign: "center", paddingTop: "250px" }}
          >
            <h3>Welcome to rss-feeds</h3>
          </Col>
          <Col md={{ span: true }} style={{ textAlign: "center" }}>
            <Feeds />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
