import React from 'react'
import './award.css'
import '../education/education.css'
const Award = () => {
  return <table className='table'>
  <thead>
      <tr>
          <th>Certificate</th>
          <th>Organization</th>
          <th>Year</th>
          <th>Details</th>
      </tr>
  </thead>
  <tbody>
        <tr>
            <td>Complete web development bootcamp</td>
            <td>Udemy</td>
            <td>2021</td>
            <td><button className='btns'><a href="https://www.udemy.com/certificate/UC-19234969-0147-40d4-88a6-cd9d5c4bab17/">View</a></button></td>
        </tr>
        <tr>
            <td>Responsive Web Design</td>
            <td>Freecodecamp</td>
            <td>2021</td>
            <td><button className='btns'><a href="https://freecodecamp.org/certification/prasanta123/responsive-web-design">View</a></button></td>
        </tr>
        <tr>
            <td>Frontend development libraries</td>
            <td>Freecodecamp</td>
            <td>2021</td>
            <td><button className='btns'><a href="https://freecodecamp.org/certification/prasanta123/front-end-development-libraries">View</a></button></td>
        </tr>
        <tr>
            <td>Google ux design</td>
            <td>Coursera</td>
            <td>2021</td>
            <td><button className='btns'><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/WCP3G6Z3R8FT">View</a></button></td>
        </tr>
    </tbody>
  </table>
}

export default Award