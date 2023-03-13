import React ,{useState}from 'react'
import './about.css'
import {Container,Row,Col} from 'reactstrap'
import boys from '../../img/boys.png'
import Education from '../education/Education'
import Skills from '../skill/Skills'
import Award from '../award/Award'
const About = () => {

  const [aboutFilter,setAboutFilter]=useState('ABOUT')

  return <section id="about">
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
             <h2>About Me</h2>
            </Col>
            <Col lg='4' md='3'>
             <div className='about__btns d-flex flex-column align-items-center'>
                <button className={`about__btn ${aboutFilter==='ABOUT'?'about__btn-active':''}`} onClick={()=>setAboutFilter('ABOUT')}>About Me</button>
                <button className={`about__btn ${aboutFilter==='EDUCATION'?'about__btn-active':''}`} onClick={()=>setAboutFilter('EDUCATION')}>Education</button>
                <button className={`about__btn ${aboutFilter==='SKILLS'?'about__btn-active':''}`} onClick={()=>setAboutFilter('SKILLS')}>Skills</button>
                <button className={`about__btn ${aboutFilter==='AWARD'?'about__btn-active':''}`} onClick={()=>setAboutFilter('AWARD')}>Award and certificate</button>
              </div>
            </Col>
            <Col lg='8' md='9'>
              {aboutFilter==='ABOUT' && 
                <div className='about__content__wrapper d-flex align-items-center gap-5'>
                <div className='about__img w-25'>
                 <img src={boys} alt="" className='w-100 '/>    
                </div>
                <div className='about__content w-75'>
                    <h2>I'm prasanta kumar rout</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  <div className='social__link'>
                    <h6 className='mb-3'>Connect With Me:</h6>
                    <span><a href="#"><i class="ri-facebook-line"></i></a></span>
                    <span><a href="#"><i class="ri-instagram-line"></i></a></span>
                    <span><a href="https://www.linkedin.com/in/prasanta-kumar-rout-83a251210/"><i class="ri-linkedin-line"></i></a></span> 
                    <span><a href="https://github.com/prasantarout"><i class="ri-github-line"></i></a></span>
                    <span><a href="#"><i class="ri-twitter-line"></i></a></span>
                  </div>
                </div>
            </div>
              }
              {
                aboutFilter==='EDUCATION' && <Education/>
              }
               {
                aboutFilter==='SKILLS' && <Skills/>
              }
               {
                aboutFilter==='AWARD' && <Award/>
              }
            </Col>
        </Row>
    </Container>
  </section>
}

export default About