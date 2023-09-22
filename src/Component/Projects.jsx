import React from 'react'
import port from '../Images/port.jpeg';

const Projects = () => {
    const portfolios = [

        {
        id:1,
        src:port,
        title:"Fake News Detection"
        },

        {
            id:2,
            src:port,
            title:"ChatBot"
        },

        {
            id:3,
            src:port,
            title:"Dynamic Card management app"
        },

        {
            id:4,
            src:port,
            title:"Cartoonify"
        },

    ]
  return (
    
    <div   name='Projects' className='bg-gradient-to-b  from-black to to-gray-800 w-full text-white md:h-screen'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full'> 
            <div className='pb-8'> 
                <p className='text-4xl font-bold  inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6 text-xl'>Check out some of my work here:</p>
            </div>

            

            <div className='grid sm:grid-cols-2 sm:grid-cols-3 gap-8 px-8 sm:px-0'>

            {
                portfolios.map(({id,src,title})=>(<div  key={id} className='shadow-md shadow-gray-600  rounded-lg'>
                <img src={src } alt="" className='rounded-md  duration-200 hover:scale-105'/>
                <p className='flex items-center justify-center text-2xl hover:scale-105' >{title}</p>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>Code</button>
                </div>
            </div>))
            }

                
            </div>

        </div>
    </div>
  )
}

export default Projects