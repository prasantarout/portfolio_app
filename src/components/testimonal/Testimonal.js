import React from 'react'
import './testimonal.css'
import { Container,Row,Col } from 'reactstrap'
import Slider from 'react-slick'
const Testimonal = () => {

    const setting={
        dots:false,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        swipeToSlide:true
    }

  return <section>
    <Container>
        <Row>
            <Col lg='12' className='mb-5 text-center'>
             <h2>What my clients says</h2>
            </Col>
            <Col lg='6' className='m-auto'>
               <Slider {...setting}>
                <div className='single__testimonal'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                 <h6>Martin Copper</h6>
                 <p className='title'>Web Developer</p>
                </div>
                <div className='single__testimonal'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                 <h6>Martin Copper</h6>
                 <p className='title'>Web Developer</p>
                </div>
                <div className='single__testimonal'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                 <h6>Martin Copper</h6>
                 <p className='title'>Web Developer</p>
                </div>
                <div className='single__testimonal'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                 <h6>Martin Copper</h6>
                 <p className='title'>Web Developer</p>
                </div>
               </Slider>
            </Col>
        </Row>
    </Container>
  </section>
  
}

export default Testimonal