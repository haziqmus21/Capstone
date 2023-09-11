import React, { useState, useEffect } from "react";
import axios from "../axios/Axios";
import Footer from "../Components/footer";
// import shifa from "../images/download2.png";
import { Link } from "react-router-dom";
// import { Button } from 'react-bootstrap'
import map from "../images/8350944451595341180-128.png";
import doc from "../images/12336740611595341300-128.png";
// import a from "../images/1282918811595341174-128.png";
// import b from "../images/1453445921638178181-128.png";
// import c from "../images/4379486051644993421-128.png";
// import d from "../images/8350944451595341180-128.png";
// import e from "../images/8516007241595341170-128.png";
// import f from "../images/9251414541647350902-128.png";
// import g from "../images/9963330951595341179-128.png";
// import h from "../images/10295499861529659195-128.png";
import "./shifa.css";
import zee from "../images/bruno-rodrigues-279xIHymPYY-unsplash.jpg";
import { useParams } from "react-router-dom";

const Shifa = () => {
  const params = useParams();
  const [hospital, setHospital] = useState({});
  useEffect(() => {
    getHospital();
  }, [params]);

  const getHospital = async () => {
    try {
      const response = await axios.get(`/hospital/${params.id}`);
      setHospital(response.data);
    } catch (error) {
      console.error(error);
    }
  };
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
      <div
        className="shifa w-75 border  mb-4    "
        style={{
          display: "flex",
          paddingLeft: "10px",
          justifyContent: "space-between",
          padding: "10px ",
          margin: "100px auto",
          marginTop: "100px",
        }}
      >
        <div className="shifa-1 d-flex">
          <div
            className="img my-auto"
            style={{ borderRadius: "50%", border: "2px solid orange" }}
          >
            <img
              src={`http://localhost:4000/${hospital?.image}`}
              alt="uploaded image"
              className="img-fluid my-auto"
              style={{ borderRadius: "50%" }}
              crossOrigin="anonymous"
            ></img>
          </div>
          <div className="text my-auto">
            <h2>{hospital?.name}</h2>
            <h6>{hospital?.address}</h6>
            <button
              className="btn bg-primary text-white w-75"
            >
              Call Helpline
            </button>
          </div>
        </div>
        <div
          className="shifa-2 my-auto"
          style={{ borderLeft: "3px solid Orange", marginRight: "20px" }}
        >
          <div className="">
            <div className="d-flex p-3">
              <img src={map} class="mx-3" style={{ height: "40px" }}></img>
              <h5>{hospital?.city}</h5>
            </div>
            <div className="d-flex p-3">
              <img src={doc} class="mx-3" style={{ height: "40px" }}></img>
              <h5>98 doctors</h5>
            </div>
          </div>
        </div>
      </div>


     


      {/* <div className="disease d-flex">
        <div className="abcd sp-inner w-75">
          <h3>View Disease Doctors</h3>
          <p>Find best doctors for your disease</p>
          <div className="specialist-doc">
            <div className="circles">
              <a href="/#" className="cir-name">
                <img src={a} alt="sv"></img>
              </a>
              <a href="/#" className="text">
                <p>Diabetes</p>
              </a>
            </div>
            <div className="circles">
              <a href="/#" className="cir-name">
                <img src={b} alt="sv"></img>
              </a>
              <a href="/#" className="text">
                <p>Coronavirus</p>
              </a>
            </div>
            <div className="circles">
              <a href="/#" className="cir-name">
                <img src={c} alt="sv"></img>
              </a>
              <a href="/#" className="text">
                <p>Blood Pressure</p>
              </a>
            </div>
            <div className="circles">
              <a href="/#" className="cir-name">
                <img src={d} alt="sv"></img>
              </a>
              <a href="/#" className="text">
                <p>Anxiety</p>
              </a>
            </div>
            <div className="circles">
              <a href="/#" className="cir-name">
                <img src={e} alt="sv"></img>
              </a>
              <a href="/#" className="text">
                <p>Constipation</p>
              </a>
            </div>
            <div className="circles">
              <a href="/#" className="cir-name">
                <img src={f} alt="sv"></img>
              </a>
              <a href="/#" className="text">
                <p>Diagnostic</p>
              </a>
            </div>
            <div className="circles">
              <a href="/#" className="cir-name">
                <img src={g} alt="sv"></img>
              </a>
              <a href="/#" className="text">
                <p>Pain</p>
              </a>
            </div>
            <div className="circles">
              <a href="//#" className="cir-name">
                <img src={h} alt="sv"></img>
              </a>
              <a href="/#" className="text">
                <p>Diabetes</p>
              </a>
            </div>
          </div>
        </div>
      </div> */}


      <div>
        <h1
          className="text-center my-5 "
          style={{ textShadow: "2px 2px 3px grey" }}
        >
          Doctors In  Singapur Hospital
        </h1>
      </div>
      {doctors?.map((item, idx) => (
        <div
          key={idx}
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
                src={`http://localhost:4000/${item.image}`}
                className="img-fluid my-auto"
                style={{ borderRadius: "50%" }}
                crossOrigin="anonymous"
              ></img>
            </div>
            <div className="test my-auto">
              {/* <h2>Dr.Javed Iqbal</h2> */}
              <h2>
                {item.firstName} {item.lastName}
              </h2>
              <h6>{item.field}</h6>
              {/* <h6>Diabetologist, Consultant Physician, Endocrinologist</h6> */}
              {/* <h6>MBBS, MRCPS (UK), MD (USA)</h6> */}

              <div className="experience d-flex justify-content-around">
                <div className="years ">
                  <h5>{item.experience} Years</h5>
                  <p>Experience</p>
                </div>
                <div
                  className="  "
                  style={{
                    height: "70px",
                    width: "2px",
                    border: "1px solid orange",
                  }}
                >
                  {" "}
                </div>
                <div className="reviews ">
                  <h5> 90% Reviews</h5>
                  <p>Satisfied Patients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-50 " style={{ position: "relative" }}>
            <div
              className="text-right "
              style={{
                position: "absolute",
                marginBottom: "10px",
                right: "0",
                bottom: "0",
              }}
            >
              <Link to={`/select_time/${item.id}`}>
                <button
                className="btn  mb-3 py-2 text-white px-5 h-100 w-100 "
                  style={{ backgroundColor: "orange",}}
                >
                  Book Appointment
                </button>
              </Link>
              <button
                className="btn bg-primary py-2 text-white px-5 h-100 w-100 "

              >
                View Doctor details
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Responsive for mobile */}

      <div
        className="shifa-m  abc  border m-auto mb-4     "
        style={{
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
              src={zee}
              className="img-fluid my-auto"
              style={{ borderRadius: "50%" }}
            ></img>
          </div>
          <div className="test my-auto">
            <h2>Dr.Javed Iqbal</h2>
            <h6>Diabetologist, Consultant Physician, Endocrinologist</h6>
            <h6>MBBS, MRCPS (UK), MD (USA)</h6>

            <div className="experience d-flex justify-content-around">
              <div className="years ">
                <h5>15 Years</h5>
                <p>Experience</p>
              </div>
              <div
                className="  "
                style={{
                  height: "70px",
                  width: "2px",
                  border: "1px solid orange",
                }}
              >
                {" "}
              </div>
              <div className="reviews ">
                <h5> 90% Reviews</h5>
                <p>Satisfied Patients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="acc w-100 ">
          <div className="text-right ">
            <Link to="/select_time">
              <button
                className="btn   mt-4 w-100 "
                style={{ backgroundColor: "orange", height: "50px" }}
              >
                Book Appointment
              </button>
            </Link>
            <button
              className="btn  text-white mt-2 w-100 "
              style={{ backgroundColor: "#0b65af", height: "50px" }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Shifa;
