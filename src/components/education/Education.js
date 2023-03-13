import React from 'react'
import './education.css'

const Education = () => {
  return <table className='table'>
    <thead>
        <tr>
            <th>Degree</th>
            <th>Department</th>
            <th>Institute</th>
            <th>Year</th>
            <th>Marks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>MCA</td>
            <td>Computer Application</td>
            <td>Khallikote Auto. College</td>
            <td>2018-21</td>
            <td>74%</td>
        </tr>
        <tr>
            <td>Bsc</td>
            <td>Biological Science</td>
            <td>dharmasala Degree College</td>
            <td>2015-18</td>
            <td>65%</td>
        </tr>
        <tr>
            <td>CHSE,Odisha</td>
            <td>Science</td>
            <td>Anchalika Mahavidyalaya</td>
            <td>2013-15</td>
            <td>56.83%</td>
        </tr>
        <tr>
            <td>HSE,Odisha</td>
            <td>Matriculation</td>
            <td>B.C high scholl</td>
            <td>2013</td>
            <td>65%</td>
        </tr>
    </tbody>
  </table>
}

export default Education