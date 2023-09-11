import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import zee from "../images/bruno-rodrigues-279xIHymPYY-unsplash.jpg";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./timing.css";
import sunny from "../images/sunny.png";
import cloud from "../images/clear-sky.png";
import axios from "../axios/Axios";
import { Button } from "react-bootstrap";

const Doctime = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    phone: "",
    doctorName: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const dateApi = [
    {
      id: 1,
      day: "Today",
      date: "26 March",
    },
    {
      id: 2,
      day: "Mon",
      date: "27 March",
    },
    {
      id: 3,
      day: "Tue",
      date: "28 March",
    },
    {
      id: 4,
      day: "Wed",
      date: "29 March",
    },
    {
      id: 5,
      day: "Thur",
      date: "30 March",
    },
    {
      id: 6,
      day: "Fri",
      date: "31 March",
    },
    {
      id: 7,
      day: "Sat",
      date: "1 April",
    },
    {
      id: 8,
      day: "Sun",
      date: "2 April",
    },
  ];
  const morning = ["10:00", "10:30", "11:00", "11:30", "11:45"];
  const afternoon = [
    "12:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
  ];
  const params = useParams();

  const submitBooking = async (e) => {
    e.preventDefault();
    const BookData = {
      date: date,
      time: time,
      ...patientDetails,
    };

    try {
      const response = await axios.post(`/booking`, BookData);
      console.log(response.data);
      if (response.data) {
        window.location.href = "/booked/" + response.data.id;
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.message);
    }
  };
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    getDoctor();
  }, [params]);

  const getDoctor = async () => {
    try {
      const response = await axios.get(`/doctor/${params.id}`);
      setDoctor(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const patienthandleChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails({ ...patientDetails, [name]: value });
  };

  const [modal, setmodal] = useState(false);
  return (
    <div>
      <div
        className="shifa  border w-75  "
        style={{
          display: "flex",
          margin: "40px auto",
          marginTop: "100px ",
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
              src={`http://localhost:4000/${doctor?.image}`}
              className="img-fluid my-auto"
              style={{ borderRadius: "50%" }}
              crossOrigin="anonymous"
            ></img>
          </div>
          <div className="test my-auto">
            <h2>
              {doctor?.firstName} {doctor?.lastName}
            </h2>

            <div className="experience d-flex justify-content-around">
              <div className="years ">
                <h5>{doctor?.experience} Years</h5>
                <p>Experience</p>
              </div>
              <div
                className=" mx-2 "
                style={{
                  height: "70px",
                  width: "2px",
                  border: "1px solid orange",
                }}
              >
                {" "}
              </div>
              <div className="reviews ">
                <h5> {doctor?.field}</h5>
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
            <button
              className="btn  px-5 mb-3 w-100 bg-dark text-white py-2 "
              onClick={() => setmodal(true)}
            >
              Book Appointment
            </button>
            
          </div>
        </div>
      </div>

      {/* Responsive for mobile */}

      <div
        className="shifa-m  abc  border     "
        style={{
          paddingLeft: "10px",
          margin: "40px auto",
          marginTop: "100px",
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
            <h2>Dr.Khushnood Iqbal</h2>
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
            {/* Open-Popup */}
            <Modal size="md" isOpen={modal} toggle={() => setmodal(!modal)}>
              <ModalHeader
                toggle={() => setmodal(!modal)}
                style={{ background: "#1177ca", color: "white" }}
              >
                Welcome to Tabeeb
              </ModalHeader>
              <ModalBody>
                <form onSubmit={submitBooking}>
                  <Row>
                    <Col>
                      <div>
                        <label>Doctor Name</label>
                        <input
                          style={{ height: "40px" }}
                          type="text"
                          className="form_control w-100 my-2 "
                          name="doctorName"
                          value={patientDetails.doctorName}
                          onChange={patienthandleChange}
                        ></input>
                        <label>Patient Name</label>
                        <input
                          style={{ height: "40px" }}
                          type="text"
                          className="form_control w-100 my-2 "
                          name="name"
                          value={patientDetails.name}
                          onChange={patienthandleChange}
                        ></input>
                        <label>Patient Phone Number</label>
                        <input
                          style={{ height: "40px" }}
                          type="text"
                          className="form_control w-100 my-2 "
                          name="phone"
                          value={patientDetails.phone}
                          onChange={patienthandleChange}
                        ></input>

                        <Button
                          className="w-100 mb-1 mt-3 bg-warning  "
                          style={{
                            height: "50px",
                            border: "none",
                            color: "black",
                            fontSize: "21px",
                          }}
                          type="submit"
                        >
                          Book Now
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  {errorMessage && (
                    <div
                      className="mt-2 alert alert-light text-danger fw-bold alert-dismissible fade show"
                      role="alert"
                    >
                      {errorMessage}
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  )}
                </form>
              </ModalBody>
            </Modal>
            <button
              className="btn   mt-4 w-100 "
              style={{ backgroundColor: "orange", height: "50px" }}
              onClick={() => setmodal(true)}
            >
              Book Appointment
            </button>

            {/* Close-Popup */}
            <button
              className="btn  text-white mt-2 w-100 "
              style={{ backgroundColor: "#0b65af", height: "50px" }}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Close_Doctor_Profile */}

      {/* Open_timing_Box */}

      <div
        className="Timing-box w-75  p-3"
        style={{ margin: "40px auto", marginBottom: "50px" }}
      >
        <h2>Select Date</h2>
        <div className="date">
          {dateApi.map((curData, index) => (
            <div
              onClick={() => setDate(curData.date)}
              key={index}
              className={`${
                date === curData.date
                  ? "bg-dark text-white border m-2 px-3 pb-2 text-center"
                  : "border m-2 px-3 pb-2 text-center"
              }`}
              style={{
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <h6>{curData.day}</h6>
              <p>{curData.date}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-4">Select Time</h2>
        <h6>
          <img src={cloud} className="pr-2" style={{ height: "30px" }}></img>
          Morning
        </h6>
        <div className="time">
          {morning.map((curElem, index) => (
            <div
              onClick={() => setTime(curElem)}
              key={index}
              className={`${
                time === curElem
                  ? "bg-dark text-white  border m-2 px-3 text-center"
                  : " border m-2 px-3 text-center"
              }`}
              style={{ borderRadius: "10px", cursor: "pointer" }}
            >
              <h6>{curElem} AM</h6>
            </div>
          ))}
        </div>

        <h6>
          <img src={sunny} style={{ height: "30px" }}></img>Afternoon
        </h6>
        <div className="time">
          {afternoon.map((curElem, idx) => (
            <div
              onClick={() => setTime(curElem)}
              key={idx}
              className={`${
                time === curElem
                  ? "bg-primary border m-2 px-3 text-center"
                  : " border m-2 px-3 text-center"
              }`}
              style={{
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <h6>{curElem} PM</h6>
            </div>
          ))}
        </div>
      </div>

      {/* Close_timing_Box */}

      {/* <Footer /> */}
    </div>
  );
};

export default Doctime;
