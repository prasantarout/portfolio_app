import React from 'react'
import './experience.css'
import { Container,Row,Col } from 'reactstrap'

const Development=[
    {
        year:'2020-2021',
        title:''
    }
]

const Experience = () => {
  return <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <h2>Experience</h2>
            </Col>
            <Col lg='6' className='md-5'>
                <div className='single__experience-container'>
                    <div className='single__experience'>
                        <span className='experience__icon'><i class="ri-briefcase-line"></i></span>
                        <h6>Atraya Technologies , Bangalore , 2021-Present</h6>
                        <h5>React Developer</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Experience