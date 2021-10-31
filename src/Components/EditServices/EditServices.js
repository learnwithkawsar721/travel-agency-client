import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import getApi from "../../Utility/getApi";
const EditServices = () => {
  // const history = useHistory();
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    axios.get(getApi(`services/${id}`)).then((res) => {
      setService(res.data);
    });
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // axios.put(getApi("services"), data).then((res) => {
    //   if (res.data.insertedId) {
    //     history.push("/services");
    //     reset();
    //   }
    // });
  };
  return (
    <Container>
      <Row className="py-5">
        <Col>
          <h1 className="text-center pb-4">Edit Services (not-working) </h1>
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
                  defaultValue={service.title}
                  {...register("title")}
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
                  defaultValue={service?.price}
                  {...register("price")}
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
                  defaultValue={service?.destination}
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
                  defaultValue={service?.departure}
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
                  defaultValue={service?.departuretime}
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
                  defaultValue={service?.returntime}
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
                  defaultValue={service?.img}
                />
                <img src={service?.img} className="w-100 h-50 pt-3" alt="" />
              </div>
              <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                <label htmlFor="disctiption">
                  Discripton<sup className="text-danger">*</sup>
                </label>
                <textarea
                  className="form-control mt-2"
                  id="disctiption"
                  rows="5"
                  {...register("disctiption")}
                  defaultValue={service?.disctiption}
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-sm btn-primary mt-3">
                Edit Service
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditServices;
