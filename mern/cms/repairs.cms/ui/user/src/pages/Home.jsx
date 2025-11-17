import React from 'react'
import Sliders from '../components/Sliders'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceCard from '../components/ServiceCard'
import { SectionHeading } from '../components/SectionHeading'

const Home = () => {
  return (
    <>
        <Sliders />
        <section>
            <Container fluid="md">
                <SectionHeading>
                    Services
                </SectionHeading>
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
            </Container>
        </section>
    </>
  )
}

export default Home