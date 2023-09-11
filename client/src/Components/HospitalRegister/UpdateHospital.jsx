import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "../../axios/Axios";
import student from "../../images/student.webp";

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
const UpdateHospital = () => {
  const params = useParams();
  const [errorMessage, setErrorMessage] = useState("");

  // Hospital Details /////////////////////////

  const [hospitalDetails, setHospitalDetails] = useState({
    name: "",
    city: "",
    address: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalDetails({ ...hospitalDetails, [name]: value });
  };

  useEffect(() => {
    getPrefilHospital();
  }, []);

  const getPrefilHospital = async () => {
    try {
      const response = await axios.get(`/hospital/${params.id}`);
      setHospitalDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const hospitalUpadate = async () => {
    try {
      const response = await axios.put(
        `/hospital/${params.id}`,
        hospitalDetails
      );
      const result = response.data;
      if (result) {
        window.location.href = "/mainn";
      }
      alert("Hospital Details updated");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <div
      style={{
        marginTop: "6rem",
      }}
    >
      <MDBContainer
        fluid
        className=" w-75 rounded "
        style={{
          marginTop: "10px",
          marginBottom: "50px",
        }}
      >
        <MDBRow className=" d-flex justify-content-center align-items-center h-70 ">
          <MDBCol>
            <MDBCard className="shifa my-4 bg-silver ">
              <MDBRow className="g-0">
                <MDBCol md="6" className="d-none d-md-block">
                  <MDBCardImage
                    style={{ height: "100%" }}
                    // src="https://img.freepik.com/premium-photo/interior-hospital-consulting-room-with-medical-eye-test-chart-wheelchair-service-office-ophthalmologic-clinic-visual-examination-equipment-devices-treatment-vision_35148-258.jpg?size=626&ext=jpg&ga=GA1.1.1661947102.1678828742&semt=ais"
                    src={student}
                    alt="Sample photo"
                    className="rounded"
                    fluid
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                    <h3 className="mb-5  fw-bold">Change Hospital Details</h3>

                    <MDBRow>
                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Hospital Name"
                        size="md"
                        id="form5"
                        type="text"
                        name="name"
                        value={hospitalDetails.name}
                        onChange={handleChange}
                      />
                    </MDBRow>

                    <MDBRow></MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Hospital City"
                      size="md"
                      id="form4"
                      type="text"
                      name="city"
                      value={hospitalDetails.city}
                      onChange={handleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Hospital Address"
                      size="md"
                      id="form5"
                      type="text"
                      name="address"
                      value={hospitalDetails.address}
                      onChange={handleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Hospital Contact Number"
                      size="md"
                      id="form5"
                      type="text"
                      name="phone"
                      value={hospitalDetails.phone}
                      onChange={handleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      size="md"
                      id="form6"
                      type="file"
                    />
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
                    <div className="d-flex justify-content-end pt-3">
                      {/* <MDBBtn color='light' size='lg'>Reset all</MDBBtn> */}
                      {/* <MDBBtn className='ms-2' color='warning' size='lg'>Submit Doctor form</MDBBtn> */}
                      <Button
                        onClick={hospitalUpadate}
                        className="btn btn-dark w-100 "
                        size="lg"
                      >
                        Update Hospital
                      </Button>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default UpdateHospital;
