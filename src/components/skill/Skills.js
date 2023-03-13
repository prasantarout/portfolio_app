import React from 'react'
import './skill.css'
const Skills = () => {
    const frontend=[
        {
            title:'Javascript',
            width:'85%',
            percentage:'85%'
        },
        {
            title:'React.Js',
            width:'85%',
            percentage:'85%'
        },
        {
            title:'React-Native',
            width:'95%',
            percentage:'85%'
        },
        {
            title:'Redux',
            width:'85%',
            percentage:'85%'
        },
        {
            title:'Tailwind Css',
            width:'75%',
            percentage:'75%'
        },
        {
            title:'Css3',
            width:'85%',
            percentage:'85%'
        },
      
    ]
    const backend=[
        {
            title:'Node.js',
            width:'75%',
            percentage:'75%'
        },
        {
            title:'Express.Js',
            width:'85%',
            percentage:'85%'
        },
        {
            title:'MongoDb',
            width:'75%',
            percentage:'85%'
        },
        {
            title:'Restful Api',
            width:'85%',
            percentage:'85%'
        },
        {
            title:'gitLab',
            width:'75%',
            percentage:'75%'
        },
        {
            title:'Git',
            width:'85%',
            percentage:'85%'
        },
       
    ]
  return <div className='skills__wrapper d-flex justify-content-between gap-5'>
    <div className='frontend__skills w-50'>
        {
            frontend.map((item,index)=>(
                <div className='skill__data mb-3' key={index}>
                    <div className='skill__title d-flex align-items-center justify-content-between'>
                        <h6>{item.title}</h6>
                        <span>{item.percentage}</span>
                    </div>
                    <div className='skill__bar'>
                        <span className='skill__bar-percentage' style={{width:`${item.width}`}}></span>
                    </div>
                </div>
            ))
        }
    </div>
    <div className='backend__skills w-50'>
     {backend.map((item,index)=>(
         <div className='skill__data mb-3' key={index}>
         <div className='skill__title d-flex align-items-center justify-content-between'>
             <h6>{item.title}</h6>
             <span>{item.percentage}</span>
         </div>
         <div className='skill__bar'>
             <span className='skill__bar-percentage' style={{width:`${item.width}`}}></span>
         </div>
     </div>
     ))}
    </div>
  </div>
}

export default Skills