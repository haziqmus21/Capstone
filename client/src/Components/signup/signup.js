import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { MDBRadio } from "mdb-react-ui-kit";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "../../axios/Axios";

const cookies = new Cookies();
const Signup = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    drugAllergy: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/register", register);
      let result = response.data;
      // console.log(result);
      cookies.set("user", result, { path: "/" });

      if (result.user.role === "admin") {
        alert("Admin Successfully Login In");
        window.location.href = "/mainn";
      } else {
        alert("User Successfully Login In");
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.message);
    }
  };
  useEffect(() => {
    animate();
  }, []);

  function animate() {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const particles = [];
    const particleSize = 8;
    const maxParticles = 375;
    const threshold = 0;

    for (let i = 0; i < maxParticles; i++) {
      let particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random(),
        vy: Math.random(),
      };
      particles.push(particle);
    }

    function line(particle, particle2) {
      context.beginPath();
      context.moveTo(particle.x, particle.y);
      context.lineTo(particle2.x, particle2.y);
      context.stroke();
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < maxParticles; i++) {
        let particle = particles[i];
        context.fillRect(
          particle.x - particleSize / 2,
          particle.y - particleSize / 2,
          particleSize,
          particleSize
        );
        for (let j = 0; j < maxParticles; j++) {
          if (i !== j) {
            let particle2 = particles[j];
            let distanceX = Math.abs(particle.x - particle2.x);
            let distanceY = Math.abs(particle.y - particle2.y);
            if (distanceX < threshold && distanceY < threshold) {
              context.lineWidth =
                (threshold * 2 - (distanceX + distanceY)) / 50;
              let color = 200 - Math.floor(distanceX + distanceY);
              context.strokeStyle =
                "rgb(" + color + "," + color + "," + color + ")";
              line(particle, particle2);
            }
          }
        }
        particle.x = particle.x + particle.vx;
        particle.y = particle.y + particle.vy;
        if (
          particle.x > canvas.width - particleSize ||
          particle.x < particleSize
        )
          particle.vx = -particle.vx;
        if (
          particle.y > canvas.height - particleSize ||
          particle.y < particleSize
        )
          particle.vy = -particle.vy;
      }
      window.requestAnimationFrame(animate);
    }

    context.fillStyle = "white";
    animate();
  }
  const canvasRef = useRef();

  return (
    <center>
      <canvas
        ref={canvasRef}
        width={1583}
        height={700}
        style={{ backgroundColor: "white" }}
      ></canvas>
      <Container
        style={{
          zIndex: "0",
          top: "10px",
          left: "120px",
          position: "absolute",
        }}
      >
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card
              style={{ marginTop: "100px" }}
              className="px-4 py-5 bg-black  text-white"
            >
              <Card.Body>
                <div className="mb-3">
                  <h1 className="fw-bold mb-4 text-center"> Signup Form</h1>

                  <div className="mb-3">
                    <Form>
                      <Form.Group
                        className="text-start fw-bold mb-3"
                        // controlId="formBasicEmail"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          style={{ height: "40px" }}
                          placeholder="Enter name"
                          name="name"
                          value={register.name}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group
                        className="text-start fw-bold mb-3"
                        // controlId="formBasicPassword"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          style={{ height: "40px" }}
                          placeholder="Enter email"
                          name="email"
                          value={register.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group
                        className="text-start fw-bold mb-3"
                        // controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          style={{ height: "40px" }}
                          placeholder="Enter password"
                          name="password"
                          value={register.password}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group
                        className="text-start fw-bold mb-3"
                        // controlId="formBasicPassword"
                      >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="number"
                          style={{ height: "40px" }}
                          placeholder="Enter Phone Number"
                          name="phone"
                          value={register.phone}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <div className="d-md-flex ustify-content-start align-items-center mb-2">
                        <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                        <MDBRadio
                          name="gender"
                          id="inlineRadio1"
                          value="female"
                          label="Female"
                          inline
                          onChange={handleChange}
                        />
                        <MDBRadio
                          name="gender"
                          id="inlineRadio2"
                          value="male"
                          label="Male"
                          inline
                          onChange={handleChange}
                        />
                      </div>
                      <Form.Group
                        className="text-start fw-bold mb-3"
                        // controlId="formBasicPassword"
                      >
                        <Form.Label>DateOfBirth</Form.Label>
                        <Form.Control
                          type="text"
                          style={{ height: "40px" }}
                          placeholder="Enter DateOfBirth"
                          name="dateOfBirth"
                          value={register.dateOfBirth}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <div className="d-md-flex ustify-content-start align-items-center mb-2">
                        <h6 class="fw-bold mb-0 me-4">Drug Allergy: </h6>
                        <MDBRadio
                          name="drugAllergy"
                          id="inlineRadio1"
                          value="yes"
                          label="Yes"
                          inline
                          onChange={handleChange}
                        />
                        <MDBRadio
                          name="drugAllergy"
                          id="inlineRadio2"
                          value="no"
                          label="No"
                          inline
                          onChange={handleChange}
                        />
                      </div>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="warning"
                          className="mt-2 w-100 bg-black text-white fw-bold shadow-none"
                          style={{ height: "40px", border: "1px solid white" }}
                          type="submit"
                          onClick={handlesubmit}
                        >
                          Create Account
                        </Button>
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
                      </div>
                      <p className="mt-3 text-end">
                        Already have an account?
                        <Link className="text-white ms-1" to="/Login">
                          Login
                        </Link>
                      </p>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </center>
  );
};

export default Signup;
