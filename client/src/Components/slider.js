import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import { Link } from "react-router-dom";
import "./slider.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import crown from "../images/crown.png";

const Arrow = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    try {
      const response = await axios.get("/doctor");
      setDoctors(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div class="Container mt-5">
        <h2 className="text-center  fw-bold">Our Best Doctors</h2>

        <ul class="cards container">
          {doctors?.map((item, idx) => (
            <li
              key={idx}
              class="card"
              style={{ boxShadow: "1px 1px 7px 1px rgba(0, 0, 0, 0.2)" }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src={`http://localhost:4000/${item.image}`}
                  className="img-fluidd rounded-circle"
                  style={{ width: "80px", height: "80px" }}
                  crossOrigin="anonymous"
                ></img>
                <div class="card-content">
                  <h3
                    className=" text-center"
                    style={{ marginTop: "30px", marginRight: "-25px" }}
                  >
                    {item.firstName} {item.lastName}
                  </h3>
                  <p style={{ marginTop: "-5px", marginRight: "-25px" }}>
                    {item.experience} Years Experience
                  </p>
                  <p style={{ marginTop: "-20px", marginRight: "-25px" }}>
                    {item.field}
                  </p>
                </div>
              </div>
              <div class="card-link-wrapper">
                <Link to={`/select_time/${item.id}`} class="card-link appointment">
                  Book Appointment
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Arrow;
