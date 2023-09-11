import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import map from "../images/8350944451595341180-128.png";
import doc from "../images/12336740611595341300-128.png";
import "./islamabad.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import { Button } from "react-bootstrap";

const Islamabad = () => {
  const [hospitlas, setHospitals] = useState([]);
  useEffect(() => {
    getHospitals();
  }, []);

  const getHospitals = async () => {
    try {
      const response = await axios.get("/hospital");
      console.log(response.data);
      setHospitals(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div
        class="w-75 mb-5  d-none d-sm-none d-lg-block d-md-block d-xl-block   "
        style={{
          height: "470px",
          margin: "100px auto",
          backgroudAttachment: "fixed",
        }}
      >
        <h1 class="">Hospitals in Singapur </h1>

        <img
          class="img-fluid pt-2 pb-5 w-100 h-100 "
          style={{ backgroundAttachment: "fixed" }}
          src=" https://cdn.pixabay.com/photo/2021/05/22/13/45/faisal-mosque-6273607__340.jpg"
        ></img>
      </div>

      {/* Responsive for Mobile */}
      <div
        class="  mb-5  d-block d-sm-block d-lg-none d-md-none d-xl-none "
        style={{
          height: "320px",
          width: "96%",
          margin: "100px auto",
          backgroudAttachment: "fixed",
        }}
      >
        <h3 class="ml-2">Hospitals in Singapur </h3>

        <img
          class="img-fluid pt-2 pb-5 w-100 h-100 "
          style={{ backgroundAttachment: "fixed" }}
          src=" https://cdn.pixabay.com/photo/2021/05/22/13/45/faisal-mosque-6273607__340.jpg"
        ></img>
      </div>

      {/* Al-Shifa-Hospital */}
      {hospitlas?.map((item, idx) => (
        <div
          className="shifa w-75 border m-auto mb-4    "
          style={{
            display: "flex",
            paddingLeft: "10px",
            justifyContent: "space-between",
            padding: "10px ",
          }}
        >
          <div className="shifa-1 d-flex">
            <div
              className="img my-auto"
              style={{ borderRadius: "50%", border: "2px solid orange" }}
            >
              <img
                // src={shifa}
                src={`http://localhost:4000/${item.image}`}
                className="img-fluid my-auto"
                style={{ borderRadius: "50%" }}
                crossOrigin="anonymous"
              ></img>
            </div>
            <div className="text my-auto">
              <h2>{item.name}</h2>
              <h6>{item.address}</h6>
              <Link to={`/Shifa/${item.id}`}>
                <Button>View details</Button>
              </Link>
            </div>
          </div>
          <div
            className="shifa-2 my-auto"
            style={{ borderLeft: "3px solid Orange", marginRight: "20px" }}
          >
            <div className="">
              <div className="d-flex p-3">
                <img src={map} class="mx-3" style={{ height: "40px" }}></img>
                <h5>{item.city}</h5>
              </div>
              <div className="d-flex p-3">
                <img src={doc} class="mx-3" style={{ height: "40px" }}></img>
                <h5>98 doctors</h5>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Responsive for mobile */}
      {hospitlas?.map((item, idx) => (
        <div
          className="shifa-m  border m-auto mb-4     "
          style={{
            paddingLeft: "10px",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px ",
          }}
        >
          <div className="shifa-1 d-flex">
            <div
              className="img my-auto"
              style={{ borderRadius: "50%", border: "2px solid orange" }}
            >
              <img
                src={`http://localhost:4000/${item.image}`}
                className="img-fluid my-auto"
                style={{ borderRadius: "50%" }}
                crossOrigin="anonymous"
              ></img>
            </div>
            <div className="text my-auto">
              <h2>{item.name}</h2>
              <h6>{item.address}</h6>
              <Link to="/Shifa">
                <Button>View details</Button>
              </Link>
            </div>
          </div>
          <div
            className="shifa-2 my-auto"
            style={{ borderLeft: "3px solid Orange", marginRight: "20px" }}
          >
            <div className="">
              <div className="d-flex p-3">
                <img src={map} class="mx-3" style={{ height: "40px" }}></img>
                <h5>{item.city}</h5>
              </div>
              <div className="d-flex p-3">
                <img src={doc} class="mx-3" style={{ height: "40px" }}></img>
                <h5>98 doctors</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Islamabad;
