import React from 'react'
import  {useState} from "react";
import {BiAlignLeft} from 'react-icons/bi'
import {ImCross} from 'react-icons/im'
import {Link}        from 'react-scroll';


const Navbar = () => {

   const [nav,setNav] =useState(false);




    const links=[
        {
            id:1,
            link:'Home'

        },
        {
            id:2,
            link:'About'

        },
        {
            id:3,
            link:'Projects'
        },
        {
            id:4,
            link:'Skills'
        },
        {
            id:5,
            link:'Contact'
        },
    ]
  return (
    <div className=" flex justify-between items-center w-full  text-white fixed px-4 bg-black h-[8vh]  ">
           <div>
            <h1 className='text-3xl'>Akshat Bhatt</h1></div> 
            
             
               

                <ul className="hidden md:flex"> 
                    {links.map(({id,link})=>(
                        
                    <li key={id}  className=' px-5 cursor-pointer text-gray-100 hover:scale-110 duration-300'> 
                   
                    <Link to={link}  smooth duration={500} >{link}</Link>

                     </li>
                    
                  

                    ))}
                </ul>

                <div  onClick={() => setNav(!nav)}
                className="cursor-pointer  p-3 hover:scale-120 md:hidden ">
               {nav ? < BiAlignLeft size={30} />  : <ImCross size={20}/>}
                </div>


                {nav &&(
                <ul className="  flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen  bg-gradient-to-b  from-black to-gray-700  text-gray-300">
                   

                    {links.map(({id,link})=>(
                    <li  key={id} className='px-5 cursor-pointer py-10 text-2xl'> 

                    <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500} >{link}</Link>

                      </li>)
                    )}
 
                </ul>
                )}  
               
        </div>
    
  )
}

export default Navbar