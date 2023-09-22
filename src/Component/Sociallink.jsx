import React from 'react'
import { BsGithub} from 'react-icons/bs'
import { AiFillLinkedin} from  'react-icons/ai'
import {  BiLogoGmail} from 'react-icons/bi';
import {    AiOutlineFileText} from 'react-icons/ai';
const Sociallink = () => {

  const links =[
    {
      id:1,
      child:(
      <>
       Linkedin  <AiFillLinkedin size={30}/> 
      </>
      ),
      href:'https://www.linkedin.com/feed/',  
      style: 'rounded-tr-md'
    },

    {
       id:2,
       child:(<> Github< BsGithub size={30} />  </>),
       href:'https://github.com/akshatbhattt'


    },

    {
       id:3,
       child:(<> Gmail < BiLogoGmail size={30} /> </>),
       href:'mailto:akshatbhatt73@gmail.com',
   

    },


    {
     id:4,
     child:(<>Resume < AiOutlineFileText size={30} /></>),
     href:'/Akshatbhatt_resume_.pdf',
     style:'rounded-br-md',
     download:true

    
    },

  ]
  return (
    
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed '>
    
        <ul >
          {links.map(({id ,child,href,style,download})=>(
            <li key={id} className={' flex justify-between items-center w-40 h-14 px-4   bg-gray-800  ml-[-100px] hover:ml-[-10px] hover:rounded-md   bg-gray-800 duration-300  bg-gray-500'+" "+style } >
                <a
                 href={ href }
                className=" text-xl flex justify-between items-center w-full text-white" 
                download={download} 
                target='_blank' 
                rel="noreferrer"  >   
               
               {child} 
                 </a>
            </li>

          ))}
            
        </ul>
    </div>
  )
}

export default Sociallink