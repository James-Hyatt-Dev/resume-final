import Image from 'next/image'
import React from 'react'
import FloatingHeadHalf from '../../public/floatingHeadHalf.png'

function index() {
  return (
    <div className='headerContainer'>
        <a href="/"><h2>James Hyatt</h2></a>
        <div className="floatingHead">
            <Image src={FloatingHeadHalf} width={115} height={100} />
        </div>

        <div className="nav">
            <a href="/about-james">Meet James</a>
            <a href="/my-brain">My Brain</a>  
            <a href="/resume">Traditional Resume</a>         
        </div>        
    </div>
  )
}

export default index