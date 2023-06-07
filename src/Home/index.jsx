import React from 'react'
import img from "./Image.png"
function Home() {
  return (
    <div>
       <img src={img} alt="img_top" />
       <h1>The Nature Spot</h1> 
      <Categories />
    </div>
  )
}

export default Home