import React from 'react'
import {MdAttachEmail,MdOutlineForum} from 'react-icons/md'
import {BsChatLeftQuote,BsArrowRightShort} from 'react-icons/bs'
function ContactCard() {
  return (
    <div className='contact grid sm:grid-cols-2 lg:grid-cols-3 lg:px-40  gap-12 px-4 '>
        <div className="card p-9 shadow-lg flex flex-col justify-center bg-slate-900 items-center">
            <div className='text-red-600 text-3xl'><MdAttachEmail /></div>
            <h4 className='text-xl'>Email</h4>
            <p className='text-gray-400'>We respond within 2-3 hrs</p>
            <div className='text-sm mt-2 text-gray-300 flex items-center'>
                <span>Email us</span>
                <BsArrowRightShort/>
            </div>
        </div>
        <div className="card p-9 shadow-lg flex flex-col justify-center bg-slate-900 items-center">
            <div className='text-red-600 text-3xl'><BsChatLeftQuote /></div>
            <h4 className='text-xl'>Live Chat</h4>
            <p className='text-gray-400'>Weekdays: 9:00 a.m - 6:00 p.m</p>
            <p className='text-gray-400'>Weeends: 12:00 noon - 6:00 p.m</p>
            <div className='text-sm mt-2 text-gray-300 flex items-center'>
                <span>Chat Now</span>
                <BsArrowRightShort/>
            </div>

        </div>
        <div className="card p-9 shadow-lg flex flex-col justify-center bg-slate-900 items-center">
            <div className='text-red-600 text-3xl'><MdOutlineForum /></div>
            <h4 className='text-xl'>Community Forum</h4>
            <p className='text-gray-400 text-center'>Monday to Friday Expected Response time 72 hrs</p>
            <div className='text-sm mt-2 text-gray-300 flex items-center'>
                <span>Ask the Community</span>
                <BsArrowRightShort/>
            </div>
        </div>
    </div>  
  )
}

export default ContactCard
