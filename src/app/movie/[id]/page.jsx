import Image from 'next/image';
import React from 'react'

async function page({params}) {
  const {id}=params
  const url=`https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2f76043895msh485799eebb62464p1cfda0jsn935d6bb41fd5',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options)
  if(!response.ok)throw new Error("Oops! Something went wrong")
	const result = await response.json()
  // console.log("hi i am result",result)
  const movie = result[0].details
  return (
    <div className='movie-cont bg-black text-white min-h-screen px-4 sm:px-10 pt-40 md:px-20 lg:px-40'>
      <h2 className='text-2xl'>Netflix \ <span className='text-[#e50914]'>{movie.type}</span></h2>
      <div className="movie grid grid-cols-1 md:grid-cols-2 my-8 gap-6">
        <div className="banner-cont ">
          <Image src={movie.backgroundImage.url} alt={movie.title} width={600} height={300}/>
        </div>
        <div>
          <h2 className='text-2xl text-slate-400'>{movie.title}</h2>
          <p className='max-w-[30rem] text-slate-600 my-3'>{movie.synopsis}</p>
        </div>
      </div>
     </div>
  )
}

export default page
