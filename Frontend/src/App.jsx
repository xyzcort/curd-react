import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link text-white">
                Home 🏠
              </Link>
              <Link to="/product/create" className="nav-link text-white">
                Add Disini!! 🛍️
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5 mb-5">
        <Row>
          <Col md={12}>
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route path="/product/create" element={<CreateProduct />} />
              <Route path="/product/edit/:id" element={<EditProduct />} />
            </Routes>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center p-3 mt-5 fixed-bottom">
        Made with ❤️ by <a href="">127.0.0.1</a>
      </footer>
    </Router>
  );
}

export default App;
