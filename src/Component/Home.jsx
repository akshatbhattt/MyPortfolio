import React from 'react'
import akshat  from "../Images/akshat.jpg";
import {Link} from "react-scroll"
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

const Home = () => {
  return (
    <div name ='Home' className='w-full h-[120vh] pt-12 sm:pt-0 block sm:flex sm:justify-center sm:items-center bg-gradient-to-b  from-black to to-gray-800  text-white'>
          <div className='  max-w-screen-lg  mx-auto flex flex-col  items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-4xl sm:text-7xl sm:mt-20 font-bold text-white'> 
                    I am a Full Stack Developer
                </h2>
                <p className='text-white text:xl max-w-md py-4'>   
                Hi I am Akshat Bhatt a full-stack web developer who combines creativity and technical expertise to build seamless, user-centric web experiences that drive results.
                 </p>   
                    <div>
                        <Link to='Skills' smooth suration={500} className=' text-xl group w-fit text-white my-2 px-6 py-3 items-center  flex rounded-md bg-gradient-to-r from-cyan-500 to-blue-500   cursor-pointer ' >
                            Skills
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-2 '/>
                            </span>
                        </Link>
                    </div>
                
            </div>
            <div>
                < img src={akshat } alt="my profile  " className=' rounded-2xl  mx-auto  w-2/3  mid:w-half  '/>
            </div>
          </div>
    </div>
  )
}

export default Home