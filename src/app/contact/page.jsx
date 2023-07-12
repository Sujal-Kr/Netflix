import React from 'react'
import ContactCard from '../Components/ContactCard'
import ContactForm from '../Components/ContactForm'


export const metadata={
  title:"Contact Page"
}
function page() {
  return (
    <div className='contact-cont bg-black py-16 text-white '>
      <h1 className='text-center text-3xl py-8'>Contact Us</h1>
      <div className="contact-cont">
        <ContactCard/>
      </div>
      <h2 className='text-2xl my-10 text-center'>We would like to hear from you</h2>
      <div className="from-cont px-2 lg:px-40">
        <ContactForm/>
      </div>
    </div>
  )
}

export default page
