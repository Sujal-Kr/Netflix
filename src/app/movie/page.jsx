
import React from 'react'
export const metadata = {
  title:"Movie Page"
}
import MovieCard from '../Components/MovieCard';
async function page () {
  
  const url=process.env.RAPID_KEY
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
  const movies = result.titles

  return (
    <div className='movie-cont py-16 bg-black text-white lg:px-20'>
      <h1 className='text-4xl text-center my-8'>Movies and Series</h1>
        <div className="movie-wrapper grid grid-cols-1 px-8 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {
          movies.map((item)=>{
            return <MovieCard key={item.id} {...item}/>
          })
        }
        </div>
    </div>
  )
}

export default page
