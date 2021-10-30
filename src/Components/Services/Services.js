import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import getApi from "../../Utility/getApi";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get(getApi("services")).then((res) => {
      setServices(res.data);
    });
  }, []);
  const handelDelete = (id) => {
    const confirm = window.confirm("Are you Sure???");
    confirm &&
      axios.delete(getApi(`services/${id}`)).then((res) => {
        if (res.data.deletedCount > 0) {
          const filterServices = services.filter((ser) => ser._id !== id);
          setServices(filterServices);
          alert("Services deletedt Successfully");
        }
      });
  };
  return (
    <Container className="my-5">
      <Row>
        <Col className="col-12 ">
          <h1 className="text-center">All Services List (Admin) </h1>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Images</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{service.title}</td>
                    <td>
                      <img src={service.img} height="40" alt="" />
                    </td>
                    <td>
                      {/* <NavLink to={`/services/edit/${service._id}`} className="btn btn-sm btn-primary">
                        Edit
                      </NavLink> */}
                      <Button
                        onClick={() => handelDelete(service._id)}
                        className="btn btn-sm btn-danger ms-2"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
