"use client"
import React,{useState}from 'react'
import {MdAlternateEmail} from 'react-icons/md'
import {AiOutlineUser,AiOutlineNumber} from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast'
function ContactForm() {
    
    const [user ,setUser]=useState({
        name:"",
        mail:"",
        phone:"",
        message:""
    }) 
    const handeChange=(e)=>{
        const key=e.target.name
        const value=e.target.value
        setUser({...user,[key]:value})
    }
    const handleSubmit =async(e)=>{
        e.preventDefault()
        try{
          const res=await fetch('http://localhost:3000/api/contact',{
            method:"POST",
            headers:{"content_Type": "application/json"},
            body:JSON.stringify({
              name:user.name,
              email:user.mail,
              phone:user.phone,
              message:user.message
            })
          })
          if(res.status===200){
            toast('Message sent successfully');
            setStatus("success")
            setUser({
              name:"",
              mail:"",
              phone:"",
              message:""
            }) 
          }
          else setStatus("error")
        }catch(err){
          console.error(err.message)
        }
        
        
    }
  return (
    <form className=' rounded-sm bg-slate-900 contact-form max-w-sm py-10 shadow-lg px-5 my-10' onSubmit={handleSubmit}>
      <div className="input-cont flex flex-col gap-3">
        <div className="name-cont relative">
            <div className="icon-cont absolute text-2xl top-2 left-2 text-red-600">
            <AiOutlineUser/>
            </div>
            <input autoComplete='off'onChange={handeChange} value={user.name} name="name"className='border-solid border-red-600 outline-none border-b-2 bg-transparent  py-2 px-9 rounded-sm  w-full'  placeholder="Jhon Doe"type="text" />
        </div>
        <div className="name-cont relative">
            <div className="icon-cont  absolute text-2xl top-2 left-2 text-red-600">
            <MdAlternateEmail/>
            </div>
            <input required onChange={handeChange} value={user.mail} name='mail' className='border-solid border-red-600 outline-none border-b-2 bg-transparent  py-2 px-9 rounded-sm  w-full' placeholder='jhon@xyz.com' type="email" />
        </div>
        <div className="name-cont relative">
            <div className="icon-cont absolute text-2xl top-2 left-2 text-red-600">
            <AiOutlineNumber/>
            </div>
            <input required onChange={handeChange} value={user.phone} name="phone" className='border-solid border-red-600 outline-none border-b-2 bg-transparent  py-2 px-9 rounded-sm  w-full'placeholder='892221XXXX' type="tel" />
        </div>
      </div>
      <textarea  id="" value={user.message} onChange={handeChange} spellCheck="false" name="message" className='w-full border-solid border-red-600 border-2 outline-none bg-transparent mt-5 py-2 h-20 px-2' placeholder='Write Your Message '></textarea>
      <div className="btn-cont">
      <button className='border-solid border-2 bg-[#e50914] text-white border-[#e50914] mt-6 py-3 w-full px-8 hover:bg-transparent   duration-300 ease-linear'>Send Message</button>
      </div>
      <Toaster/>
    </form>
  )
}

export default ContactForm
