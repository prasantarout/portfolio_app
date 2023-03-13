import React,{useState} from 'react'
import './form.css'
const Form = () => {

    const  [name,setName]=useState('')
    const  [email,setEmail]=useState('')
    const  [message,setMessage]=useState('')

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log('submit')
    }

  return <form className='form' onSubmit={submitHandler}>
    <div className='form__input'>
        <input type="text" placeholder='Your Name' value={name} onChange={e=>setName(e.target.value)}/>
    </div>
    <div className='form__input'>
        <input type="email" placeholder='Your Email' value={email} onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div className='form__input'>
       <textarea   placeholder='Write Message' value={message} onChange={e=>setMessage(e.target.value)}></textarea>
    </div>
    <button className='submit__btn' type="submit" >Submit</button>
  </form>
}

export default Form