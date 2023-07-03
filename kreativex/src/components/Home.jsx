import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <nav className='relative z-[1000]'>
            <Navbar />
        </nav>
        <div className='flex flex-col mt-[15rem] relative md:ml-28 mx-4'>
            <h1 className='text-4xl lg:text-7xl w-full md:w-[70%] text-white leading-[1.2] font-quicksand font-semibold text-center md:text-left'>Where Being Creative is the X Factor</h1>
            <p className='relative mt-8 text-xl lg:text-2xl text-white font-quicksand text-center md:text-left'>Elevate Your Brand With Our Digital Marketing Strategies</p>
            <button className='relative md:mx-0 mx-auto mt-10 bg-red-400 text-black font-quicksand md:w-36 w-[90%] h-auto p-1 md:p-3 rounded-lg'>
                <span>Learn More</span>
            </button>
        </div>
        <div className='relative mt-[15rem] flex flex-col md:ml-28'>
            <div>
                <h1 className='text-3xl lg:text-5xl text-white font-quicksand mx-auto text-center md:text-left'>Think Big. Go Digital. Be <span className='text-red-400 italic'>Kreative</span></h1>
                <p className='text-white font-quicksand w-[90%] lg:w-[50%] mt-8 mx-auto md:ml-2 text-base lg:text-xl text-center md:text-left'>
                    Kreative X is a full-service agency that helps businesses of all sizes 
                    increase their online presence and reach their target audience through effective 
                    digital marketing strategies
                </p>
                <p className='text-white font-quicksand w-[90%] lg:w-[50%] mt-5 mx-auto md:ml-2 text-base lg:text-xl text-center md:text-left'>
                    Whether you're looking to boost website traffic, generate leads or 
                    improve your brand awareness, we have the skills and experience to help you 
                    succeed in the digital space
                </p>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 mt-10 items-center'>
                <div className='bg-white p-2 h-64 w-64 rounded-lg'>
                    <h1></h1>
                    <p></p>
                </div>
                <div className='bg-white p-2 h-64 w-64 rounded-lg'>
                    <h1></h1>
                    <p></p>
                </div>
                <div className='bg-white p-2 h-64 w-64 rounded-lg'>
                    <h1></h1>
                    <p></p>
                </div>
                <div className='bg-white p-2 h-64 w-64 rounded-lg'>
                    <h1></h1>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home