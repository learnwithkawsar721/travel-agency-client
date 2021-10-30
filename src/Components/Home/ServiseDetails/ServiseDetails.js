import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import getApi from "../../../Utility/getApi";

const ServiseDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    axios.get(getApi(`services/${id}`)).then((res) => {
      setService(res.data);
    });
  });
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const booking = data;
    booking.serviceId = id;
    booking.email = user.email;
    booking.name = user.displayName;
    booking.services = service;
    axios.post(getApi("bookign"), booking).then((res) => {
      if (res.data.insertedId) {
        history.push("/mybooking");
        alert("Booking Successfully");
        reset();
      } else {
        alert(`${res.data}`);
        history.push("/mybooking");
      }
    });
  };
  return (
    <Container>
      <Row>
        <Col className="col-12 col-sm-12 col-md-8 col-lg-8 ">
          <div className="card">
            <img
              src={service?.img}
              className="card-img-top"
              alt={service.title}
            />
            <div className="card-body">
              <h3 className="card-title">{service.title}</h3>
              <h4 className="card-subtitle">$ {service.price}/ per-person</h4>
              <p className="card-text">{service.discription}</p>
              <ul>
                <li>Destination: {service?.destination} </li>
                <li>Departure : {service?.departure} </li>
                <li>Departure Time : {service?.departuretime} </li>
                <li>Return Time : {service?.returntime} </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Book This Ture</h5>
              <p className="card-text">
                Arrange your trip in advance - book this tour now!
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fas fa-user"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Username"
                        defaultValue={user?.displayName}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Username"
                        defaultValue={user?.email}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Phone Number"
                        {...register("phone")}
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fas fa-calendar-alt"></i>
                      </div>
                      <input
                        type="date"
                        className="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Phone Number"
                        {...register("date")}
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fas fa-user-tag"></i>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="autoSizingInputGroup"
                        placeholder="quantity"
                        defaultValue="1"
                        {...register("quantity")}
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="fas fa-comments"></i>
                      </div>
                      <textarea
                        rows="2"
                        className="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Message..."
                        {...register("message")}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button href="#home" className="btn btn-primary">
                    Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiseDetails;
