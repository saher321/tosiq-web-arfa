import React from "react";
import Sliders from "../components/Sliders";
import { Col, Container, Row } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";
import { SectionHeading } from "../components/SectionHeading";
import { NavLink } from "react-router";
import SlickCarousel from "../components/SlickCarousel";

const Home = () => {
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
          <SlickCarousel>
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
          </SlickCarousel>
        </section>
      </Container>

      <Container fluid="md">
        <section>
          <SectionHeading className="text-center my-5">Staff</SectionHeading>
          <SlickCarousel>
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
          </SlickCarousel>
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
