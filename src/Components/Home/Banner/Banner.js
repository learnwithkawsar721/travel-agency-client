import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  // const bg_img = {
  //     backgroundImage:url('https://i.ibb.co/M1YKQnd/skiing-slider-img-1-100x50.jpg');
  // }
  return (
    <Container fluid className="m-0 p-0">
      <div className="banner-container">
        <div className="banner_item">
          <div className="banner_details text-center">
            <h1>Snow Adventure</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
