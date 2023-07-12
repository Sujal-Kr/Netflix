
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero({title,image}) {
  return (
    <div className='hero-cont bg-black  text-white h-screen px-4 grid grid-cols-1 md:grid-cols-2 gap-9  lg:px-40'>
      <div className="content flex flex-col  justify-end md:justify-center mx-auto gap-3">
        <h1 className='text-4xl max-w-md text-slate-400 '>{title}</h1>
        <p className='max-w-lg text-slate-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ab eaque non ducimus veritatis amet numquam dolore quos qui quidem.</p>
        <button type="button" className='border-solid border-2 bg-red-600 border-red-600 mt-6 py-3 w-full sm:w-fit px-8 hover:bg-black hover:text-white duration-300 ease-linear'><Link href="/movie">Exlpore</Link> </button>
      </div>
      <div className="image-cont flex justify-center items-center ">
        <Image src={image} height={400} width={500} alt='watching movies'/>
      </div>
    </div>
  )
}

export default Hero
