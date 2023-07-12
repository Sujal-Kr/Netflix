import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function MovieCard(item) {
    const {id,type,title,synopsis,}=item.jawSummary
    const {url}=item.jawSummary.backgroundImage
    
  return (
    <div className='movie_card flex flex-col shadow-lg bg-slate-900 p-2  rounded-sm '>
        <div className="movie-img">
            <Image src={url} alt={title} width={400} height={200}/>
        </div>
        <h3 className='text-xl text-slate-300 mt-3'>{title.substring(0, 28)}</h3>
        <p className='text-slate-600'>{synopsis.substring(0,125)}...</p>
        <div className=''>
        <Link href={`/movie/${id}`} className=''>
            <button className=' border-solid border-2 bg-[#e50914] border-[#e50914] mt-6 py-3 w-fit px-8 hover:bg-transparent hover:text-white duration-300 ease-linear'>
                Read More
            </button>
        </Link>
        </div>
    </div>
  )
}

export default MovieCard
