import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const gallerys = [
  "https://i.ibb.co/bQZmWLt/1.png",
  "https://i.ibb.co/S7C5W5s/2.jpg",
  "https://i.ibb.co/HBBcgDq/3.jpg",
  "https://i.ibb.co/dbJpkPB/4.jpg",
  "https://i.ibb.co/vHrWBCT/5.jpg",
  "https://i.ibb.co/Lv4zcnk/6.jpg",
];
const Gallery = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        <h1 className="text-center text-capitalize mb-5">Most POPULAR HOTELS Gallery</h1>
        {gallerys.map((_, index) => (
          <Col key={index} className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="gallery">
              <img src={gallerys[index]} className="w-100 rounded" alt="" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
