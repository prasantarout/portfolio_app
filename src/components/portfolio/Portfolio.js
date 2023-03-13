import React from 'react'
import './portfolio.css'
import { Container,Row,Col } from 'reactstrap'
import img1 from '../../img/img1.jpeg'
import img2 from '../../img/img2.jpeg'
import img3 from '../../img/img3.jpeg'
import img4 from '../../img/img4.jpeg'

const portfolioData=[
    {
    imgUrl:img1,
    title:'React Landing Page',
    url:'#'
    },
    {
    imgUrl:img2,
    title:'Food Order App',
    url:'#'
    },
    {
    imgUrl:img3,
    title:'Enterprise app',
    url:'#'
    },
    // {
    // imgUrl:img4,
    // title:'Grocery App',
    // url:'#'
    //  }
]

const Portfolio = () => {
  return <section id="portfolio">
    <Container>
        <Row>
            <Col lg='12' className='portfolio__top mb-5'>
             <h6>Explore my work and give a feedback</h6>
             <h2>Portfolio</h2>
            </Col>
            {portfolioData.map((item,index)=>(
            <Col lg='4'md='6' sm='6'>
            <div className='portfolio__card' key={index}>
                <div className='portfolio__img'>
                 <img src={item.imgUrl} alt="" className='w-100'/>
                </div>
                <div className='portfolio__content'>
                 <h5>{item.title}</h5>
                 <a href={item.url}>View LiveDemo</a>
               </div>
             </div>
              </Col>
             ))}
        </Row>
    </Container>
  </section>
}

export default Portfolio