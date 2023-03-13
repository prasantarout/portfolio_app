import React, { Fragment } from 'react'
import Header from '../header/Header'
import Hero_Section from '../hero_section/Hero_Section'
import About from '../about/About'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import Testimonal from '../testimonal/Testimonal'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
const Layout = () => {
  return <Fragment>
      <Header/>
      <Hero_Section/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Testimonal/>
      <Contact/>
      <Footer/>
  </Fragment>
}

export default Layout