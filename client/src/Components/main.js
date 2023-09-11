import React, { useState } from "react";
import "./main.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import home from "../images/home.jpg";
import axios from "../axios/Axios";
import { Link } from "react-router-dom";

const Main = () => {
  const [doctor, setDoctor] = useState([]);
  const searchHandle = async (e) => {
    let key = e.target.value;
    console.log(key);
    if (key) {
      let res = await axios.get(`/doctor/search/${key}`);
      console.log(res.data);
      const result = res.data;
      if (result) {
        setDoctor(result);
      }
    } else {
      setDoctor([]);
    }
  };
  return (
    <div>
      <main className="App-main flex-column">
        <div className="main-1">
          <div>
            <div className="Search text-white">
              <h1 className="text-center fw-bold">Welcome to Our Hospital</h1>
              <p className="text-center my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, qui eaque facere dolorem beatae perferendis laboriosam
                quidem omnis repellat id!
              </p>
              <input
                type="text"
                className="search-bar"
                placeholder="Search here..."
                // style={{ marginTop: "100px" }}
                onChange={searchHandle}
              />
            </div>
            <ul class="cards d-flex">
              {doctor?.map((item, idx) => (
                <li
                  key={idx}
                  class="card search_card"
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
                    <Link to={`/select_time/${item.id}`} className="card-link appointment">
                      Book Appointment
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
