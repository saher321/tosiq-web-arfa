import React from "react";
import Sliders from "../components/Sliders";
import { Col, Container, Row } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";
import { SectionHeading } from "../components/SectionHeading";
import { NavLink } from "react-router";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
  function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
}
  var settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Sliders />
      <Container fluid="md">
        <section>
          <SectionHeading className="text-center my-5">Services</SectionHeading>
          <Row>
            <Col>
              <ServiceCard />
            </Col>

            <Col>
              <ServiceCard />
            </Col>

            <Col>
              <ServiceCard />
            </Col>
          </Row>
        </section>
      </Container>

      <Container fluid="md">
        <section>
          <SectionHeading className="text-center my-5">Reviews</SectionHeading>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
            </Slider>
          </div>
        </section>
      </Container>

      <Container fluid="md">
        <section>
          <SectionHeading className="text-center my-5">Staff</SectionHeading>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
              <div>
                  <ServiceCard />
              </div>
            </Slider>
          </div>
        </section>
      </Container>

      <section className="contact-section-home">
        <Container fluid="md">
            <div className="contact">
                <div className="contact-section-content">Book a Appointment for repairs</div>
                <div><NavLink className="btn btn-success" to={'/contact-us'}>Book appointment</NavLink></div>
            </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
