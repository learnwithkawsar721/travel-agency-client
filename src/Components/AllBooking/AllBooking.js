import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import getApi from "../../Utility/getApi";

const AllBooking = () => {
  const [booking, setBooking] = useState([]);
  const [status, setStatus] = useState("");
  useEffect(() => {
    axios.get(getApi("booking/all")).then((res) => {
      setBooking(res.data);
    });
  }, []);

  const deleteBooking = (id) => {
    const confirm = window.confirm("are your Sure?");
    if (confirm) {
      axios.delete(getApi(`bookign/delete/${id}`)).then((res) => {
        const newData = booking.filter((book) => book._id !== id);
        setBooking(newData);
        alert(res.data);
      });
    }
  };

  // status update
  const handleStaus = (id) => {
    axios.put(getApi(`booking/staus/${id}`)).then((res) => {
      if (res.data.modifiedCount > 0) {
        setStatus("approved");
      }
    });
  };

  return (
    <Container>
      <Row>
        <Col className="col-12 my-5">
          <h2 className="text-center pb-4">All Booking List(Admin) </h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Images</th>
                  <th>price</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((book, index) => (
                  <tr key={Math.random()}>
                    <td>{index + 1}</td>
                    <td>{book.name}</td>
                    <td>{book?.services?.title}</td>
                    <td>
                      <img src={book?.services?.img} height="40" alt="" />
                    </td>
                    <td>
                      ${book.quantity * book.services.price}
                      <sub> x {book.quantity}</sub>
                    </td>
                    <td>{book.phone}</td>
                    {(book.status === "approved" && (
                      <td> {book.status}</td>
                    )) || (
                      <td onClick={() => handleStaus(book._id)}>
                        {status || "panding"}
                      </td>
                    )}
                    <td>
                      <button
                        onClick={() => deleteBooking(book._id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
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

export default AllBooking;
