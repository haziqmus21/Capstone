import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import "./header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
import Cookies from "universal-cookie";
import "react-phone-number-input/style.css";
import axios from "../axios/Axios";
// import { NavLink } from "react-bootstrap";
const cookies = new Cookies();

const Header = () => {
  const [modal, setmodal] = useState(false);
  const user = cookies.get("user");
  const logout = () => {
    console.log(user);
    axios
      .post("/auth/logout", { refreshToken: user?.tokens?.refresh?.token })
      .then((res) => {
        cookies.remove("user", { path: "/" });
        window.location.href = "/";
      })
      .catch((err) => {
        alert(err?.response?.data?.message);
      });
  };

  return (
    <div>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="position-sticky"
          style={{
            backgroundColor: "black",
            top: "0",
            width: "100%",
            zIndex: "1",
            boxShadow: "0px 0px 16px black",
          }}
        >
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img
                  src={logo}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                    borderRadius: "50%",
                  }}
                  alt="Logo"
                ></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`navbarNav-${expand}`} />
            <Navbar.Collapse
              id={`navbarNav-${expand}`}
              className="justify-content-between"
            >
              <Nav>
                {" "}
               
                <Nav.Item>
                  <Link to="/islamabad" className="nav-link text-white">
                    Hospitals
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/User" className="nav-link text-white">
                    Bookings
                  </Link>
                </Nav.Item>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/mainn" style={{ textDecoration: "none" }}>
                  <Nav.Link href="#action1" className="fs-6 fw-bold text-white">
                    DASHBOARD
                  </Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
            <Form className="d-flex">
              <Modal size="md" isOpen={modal} toggle={() => setmodal(!modal)}>
                <ModalHeader
                  toggle={() => setmodal(!modal)}
                  style={{ background: "#1177ca", color: "white" }}
                >
                  Welcome to Our Hospital
                </ModalHeader>
                <ModalBody>
                  <form>
                    <Row>
                      <Col>
                        <div>
                          <label>Patient Name</label>
                          <input
                            style={{ height: "40px" }}
                            type="text"
                            className="form_control w-100 my-2"
                          ></input>
                          <label>Patient Phone Number</label>
                          <input
                            style={{ height: "40px" }}
                            type="number"
                            name="mobile"
                            className="form_control w-100 my-2"
                          ></input>
                          <Button
                            className="w-100 mb-1 mt-3 bg-warning"
                            style={{
                              height: "50px",
                              border: "none",
                              color: "black",
                              fontSize: "21px",
                            }}
                          >
                            Login
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </ModalBody>
              </Modal>
              {!user ? (
                <>
                  <Link to="/Singup">
                    <Button
                      className="jbf btn fw-bold px-3"
                      style={{
                        background: "black",
                        border: "1px solid white",
                      }}
                    >
                      Signup
                    </Button>
                  </Link>
                  <Link to="/Login">
                    <Button
                      className="jbf btn mx-3 fw-bold px-3"
                      style={{
                        background: "black",
                        border: "1px solid white",
                        color: "white",
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <button
                    style={{
                      background: "black",
                      border: "1px solid white",
                    }}
                    Button
                    className="jbf btn fw-bold px-3"
                  >
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to="/profile"
                    >
                      Profile
                    </Link>
                  </button>
                  <Button
                    onClick={logout}
                    Button
                    className="jbf btn mx-3 fw-bold px-3"
                    style={{
                      background: "black",
                      border: "1px solid white",
                    }}
                  >
                    Logout
                  </Button>
                </>
              )}
            </Form>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
