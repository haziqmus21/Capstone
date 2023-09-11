import React from "react";
import "./footer.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
// import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className="">
      <footer className="text-center text-sm-start bg-black text-muted py-3">
        <section>
          <div className="row">
            <div className="col-md-4 p-5">
              <h4 className="text-light">EMERGENCY SERVICES</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                sapiente at quas eos debitis doloremque magni fugit quod
                cupiditate autem.
              </p>
              <button
                style={{
                  background: "white",
                  border: "none",
                  color: "black",
                }}
                className="btn"
              >
                
               <Nav.Item>
                  <Link to="/islamabad" className="nav-link text-dark">
                    Hospitals
                  </Link>
                </Nav.Item>
              </button>
            </div>

            <div className="col-md-4 p-5">
              <h4 className="text-light">DO YOU WANT TO MAKE AN APPOINTMENT</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <button
                style={{
                  background: "white",
                  border: "none",
                  color: "black",
                }}
                className="btn"
              >
                <Nav.Item>
                  <Link to="/User" className="nav-link text-dark">
                    Bookings
                  </Link>
                </Nav.Item>
              </button>
            </div>

            <div className="col-md-4 p-5">
              <h4 className="text-light">OPENING HOURS</h4>
              <p>Monday - Friday</p>
              <p>Saturday - Sunday</p>
              <button
                style={{
                  background: "white",
                  border: "none",
                  color: "black",
                }}
                className="btn"
              >
                See More
              </button>
            </div>
          </div>
        </section>

        <div className="text-center p-4 text-white">
          © 2023 Copyright:
          <a className="text-reset fw-bold text-white">Usermanagementsystem</a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
