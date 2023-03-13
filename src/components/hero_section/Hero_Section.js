import React,{useRef,useEffect} from 'react'
import './hero.css'
import {Container,Row,Col} from 'reactstrap'
import boys from '../../img/boys.png'
import {init} from 'ityped'


  const Hero_Section = () => {

    const textRef = useRef(null);
    useEffect(()=>{
       init(textRef.current,{
        backDelay:1500,
        showCursor:true,
        strings:[
            'Prasanta Ku. Rout',
            'a Full Stack Developer',
            'a Web Developer',
            'a React Developer'
         ]
       })
    },[])

      const onButtonClick = () => {
       fetch('prasanta.pdf').then(response => {
              response.blob().then(blob => {
                  const fileURL = window.URL.createObjectURL(blob);
                  let alink = document.createElement('a');
                  alink.href = fileURL;
                  alink.download = 'prasanta.pdf';
                  alink.click();
              })
          })
        }
  return <section className='hero__section' id="home">
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='hero__content'>
                    <p className='mb-3'>Welcome To My World!🙌</p>
                    <h2 className='hero__title mb-4'>I'm <span ref={textRef}></span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                   <div className='mt-5 hero__btns d-flex align-items-center gap-4'>
                    <button className='btn hire__btn'><a href="#">Hire Me</a></button>
                    <button className='btn hire__btn1' onClick={onButtonClick}><a href="#"><span className='text'>Download Resume</span></a></button>
                   </div>
                </div>
            </Col>
            <Col lg='6' md='6'>
                <div className='hero__img'>
                 <img src={boys} alt="hero-image" className='w-100'/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Hero_Section