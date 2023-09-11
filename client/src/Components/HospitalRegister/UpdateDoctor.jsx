import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "../../axios/Axios";
import teacher from "../../images/teacher.jpeg";

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
const UpdateDoctor = () => {
  const [doctorFile, setDoctorFile] = useState(null);
  const doctorFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDoctorFile(file);
    }
  };
  const params = useParams();
  const [errorMessage, setErrorMessage] = useState("");

  const [doctorsDetails, setDoctorsDetails] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    field: "",
    experience: "",
  });

  const doctorHandleChange = (e) => {
    const { name, value } = e.target;
    setDoctorsDetails({ ...doctorsDetails, [name]: value });
  };

  useEffect(() => {
    getPrefilDoctor();
  }, []);

  const getPrefilDoctor = async () => {
    try {
      const response = await axios.get(`/doctor/${params.id}`);
      console.log(response.data);
      setDoctorsDetails(response.data);
      setDoctorFile(response.data.image);
      console.log(response.data.image);
    } catch (error) {
      console.error(error);
    }
  };

  const doctorUpadate = async () => {
    try {
      const response = await axios.put(`/doctor/${params.id}`, doctorsDetails);
      const result = response.data;
      console.log(result);
      if (result) {
        window.location.href = "/mainn";
      }
      alert("Doctor Details updated");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.message);
    }
  };
  return (
    <div>
      <MDBContainer fluid className=" w-75 rounded mb-5" style={{marginTop:"5rem"}}>
        <MDBRow className="d-flex justify-content-center align-items-center h-70 ">
          <MDBCol>
            <MDBCard className="my-4 shifa ">
              <MDBRow className="g-0">
                <MDBCol md="6" className="d-none d-md-block">
                  <MDBCardImage
                    style={{ height: "100%" }}
                    // src="https://img.freepik.com/premium-photo/interior-hospital-consulting-room-with-medical-eye-test-chart-wheelchair-service-office-ophthalmologic-clinic-visual-examination-equipment-devices-treatment-vision_35148-258.jpg?size=626&ext=jpg&ga=GA1.1.1661947102.1678828742&semt=ais"
                    src={teacher}
                    alt="Sample photo"
                    className="rounded"
                    fluid
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                    <h3 className="mb-5  fw-bold">Change Doctor Details</h3>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          placeholder="First Name"
                          size="md"
                          id="form1"
                          type="text"
                          name="firstName"
                          value={doctorsDetails.firstName}
                          onChange={doctorHandleChange}
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          placeholder="Last Name"
                          size="md"
                          id="form2"
                          type="text"
                          name="lastName"
                          value={doctorsDetails.lastName}
                          onChange={doctorHandleChange}
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Specialist Field"
                      size="md"
                      id="form4"
                      type="text"
                      name="field"
                      value={doctorsDetails.field}
                      onChange={doctorHandleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      placeholder="Years Experience"
                      size="md"
                      id="form5"
                      type="number"
                      name="experience"
                      value={doctorsDetails.experience}
                      onChange={doctorHandleChange}
                    />
                    <div className="d-md-flex ustify-content-start align-items-center mb-4">
                      <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                      <MDBRadio
                        name="gender"
                        id="inlineRadio1"
                        value="female"
                        label="Female"
                        inline
                        onChange={doctorHandleChange}
                      />
                      <MDBRadio
                        name="gender"
                        id="inlineRadio2"
                        value="male"
                        label="Male"
                        inline
                        onChange={doctorHandleChange}
                      />
                    </div>
                    <MDBInput
                      wrapperClass="mb-4"
                      size="md"
                      id="form6"
                      type="file"
                      onChange={doctorFileInputChange}
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
                      <Button
                        onClick={doctorUpadate}
                        className="btn btn-dark w-100 "
                        size="lg"
                      >
                        Update Doctor
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

export default UpdateDoctor;
