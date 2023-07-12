"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div className='navbar text-white h-20 flex items-center backdrop-blur justify-between px-6 top-0 fixed w-full '>
        <div className="nav-logo mx-auto md:mx-0">
            <Link href='/' className='text-2xl '>
                <Image src='/logo.png' width={200} height={500} alt='netflix Logo'/>
            </Link>
        </div>
        <div className="navlist  gap-8 hidden md:flex" >
            <Link href='/' className='hover:text-[#e50914]'>Home</Link>
            <Link href='/about' className='hover:text-[#e50914]'>About</Link>
            <Link href='/movie' className='hover:text-[#e50914]'>Movie</Link>
            <Link href='/contact' className='hover:text-[#e50914]'>Contact</Link>
        </div>
    </div>
  )
}

export default Header
