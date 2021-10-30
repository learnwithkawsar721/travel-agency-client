import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import getApi from "../../Utility/getApi";
const AddServices = () => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post(getApi("services"), data).then((res) => {
      if (res.data.insertedId) {
        history.push("/");
        reset();
      }
    });
  };
  return (
    <Container>
      <Row className="pt-5">
        <Col>
          <h1 className="text-center pb-4">Add Services</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="title">
                  Service Title <sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="service Title..."
                  id="title"
                  {...register("title")}
                  required
                />
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="price">
                  Service Price <sup className="text-danger">*</sup>
                </label>
                <input
                  type="number"
                  step="0.001"
                  className="form-control mt-2"
                  placeholder="Service Price $0.01"
                  id="price"
                  {...register("price")}
                  required
                />
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="destination">
                  Destination<sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Destination"
                  id="destination"
                  {...register("destination")}
                  required
                />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="departure">
                  Departure <sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="departure..."
                  id="departure"
                  {...register("departure")}
                  required
                />
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="departuretime">
                  Departure Time<sup className="text-danger">*</sup>
                </label>
                <input
                  type="datetime-local"
                  className="form-control mt-2"
                  placeholder="H:M:S"
                  id="departuretime"
                  {...register("departuretime")}
                  required
                />
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="returntime">
                  Return Time<sup className="text-danger">*</sup>
                </label>
                <input
                  type="datetime-local"
                  className="form-control mt-2"
                  placeholder="H:M:S"
                  id="returntime"
                  {...register("returntime")}
                  required
                />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="img">
                  Image Url<sup className="text-danger">*</sup>
                </label>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Image Url..."
                  id="img"
                  rows="5"
                  {...register("img")}
                  required
                />
              </div>
              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                <label htmlFor="disctiption">
                  Discripton<sup className="text-danger">*</sup>
                </label>
                <textarea
                  className="form-control mt-2"
                  id="disctiption"
                  rows="5"
                  {...register("discription")}
                  required
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-sm btn-primary mt-3">
                Add Service
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddServices;
