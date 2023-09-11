import React from "react";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function ProfileStatistics() {
  const data = cookies.get("user");
  const profile = data.user;

  return (
    <div className="vh-100 " style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-center">
                <h2 className="fw-bold">User Profile</h2>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <MDBTypography tag="h4" className="font-weight-bold">
                    Username:
                  </MDBTypography>
                  <MDBTypography tag="h5">{profile.name}</MDBTypography>
                </div>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <MDBTypography tag="h4" className="font-weight-bold">
                    Email:
                  </MDBTypography>
                  <MDBTypography tag="h5">{profile.email}</MDBTypography>
                </div>{" "}
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <MDBTypography tag="h4" className="font-weight-bold">
                    Phone:
                  </MDBTypography>
                  <MDBTypography tag="h5">{profile.phone}</MDBTypography>
                </div>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <MDBTypography tag="h4" className="font-weight-bold">
                    Gender:
                  </MDBTypography>
                  <MDBTypography tag="h5">{profile.gender}</MDBTypography>
                </div>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <MDBTypography tag="h4" className="font-weight-bold">
                    Date Of Birth:
                  </MDBTypography>
                  <MDBTypography tag="h5">{profile.dateOfBirth}</MDBTypography>
                </div>{" "}
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <MDBTypography tag="h4" className="font-weight-bold">
                    Drug Allergy:
                  </MDBTypography>
                  <MDBTypography tag="h5">{profile.drugAllergy}</MDBTypography>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
