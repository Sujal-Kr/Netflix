import React from 'react'
import Hero from '../Components/Hero'

export const metadata={
  title: 'About Page'
}
function page() {
  return (
    <div>
      <Hero title={"Our Story"} image={"/about.svg"}/>
    </div>
  )
}

export default page
