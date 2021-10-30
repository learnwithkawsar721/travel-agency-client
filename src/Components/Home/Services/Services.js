import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import getApi from "../../../Utility/getApi";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get(getApi("services")).then((res) => setServices(res.data));
  }, []);
  return (
    <Container fluid className="py-5">
      <Row className="g-4">
        <h1 className="text-center my-4">Tour Package</h1>
        {services.map((ser, index) => (
          <Col key={index} className="col-12 col-sm-12 col-md-4 col-lg-3">
            <Card>
              <Card.Img variant="top" src={ser.img} />
              <Card.Body>
                <Card.Title>{ser.title}</Card.Title>
                <Card.Text>{ser.discription.substring(0, 50)}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <h5>${ser.price} </h5>
                {/* <p>
                  <i className="fas fa-star"></i>
                  <span>5</span>
                </p> */}
                <NavLink
                  to={`/booking/${ser._id}`}
                  className="btn btn-sm btn-primary"
                >
                  Booking Now
                </NavLink>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
