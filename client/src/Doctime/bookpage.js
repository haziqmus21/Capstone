import React, { useEffect, useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import Table from "react-bootstrap/Table";
import tick from "../images/images-removebg-preview.png";
import "./bookpage.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "../axios/Axios";

const Bookpage = () => {
  const [appointment, setAppointment] = useState({});
  const params = useParams();
  useEffect(() => {
    getBookingDetail();
  }, []);
  const getBookingDetail = async () => {
    try {
      const response = await axios.get(`/booking/${params.id}`);
      setAppointment(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div
        className="container kkk border w-50 text-center "
        style={{ margin: "180px auto", borderRadius: "5px" }}
      >
        <img className="fff" src={tick}></img>
        <Button
          className="w-100 my-3 bbb"
          style={{
            height: "50px",
            border: "none",
            background: "#0b65af",
            fontSize: "25px",
          }}
        >
          Your Appointment is Booked
        </Button>
        <Table striped bordered hover size="xl" className="text-center">
          <thead>
            <tr>
              <th>Patient Name</th>
              <td>{appointment.name}</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Patient Number</th>
              <td>{appointment.phone}</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Date</th>
              <td>{appointment.date} 2023</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Time</th>
              <td>{appointment.time}</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Doctor Name</th>
              <td>{appointment.doctorName}</td>
            </tr>
          </thead>
          {/* <thead>
            <tr>
              <th>Hospital</th>
              <td>Shifa International</td>
            </tr>
          </thead> */}
        </Table>
      </div>

      <Footer />
    </div>
  );
};

export default Bookpage;
