import React from 'react'



const About = ()=>{
    return(
         <div name="About" className=" h-[120vh] sm:h-[100vh] flex justify-center items-center bg-gradient-to-b  from-gray-800 to to-black w-full  md:h-screen text-white">


            <div  className=" max-w-screen-lg  p-4 mx-auto  flex flex-col justify-center ">
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500' >About</p>
                </div>
                <p className='text-xl mt-15'>Hi, I'm a passionate full-stack web developer skilled in crafting responsive and user-friendly web solutions. 

My skillset includes proficiency in a wide range of technologies, including JavaScript, React, Python, SQL, and more. I specialize in creating dynamic websites and optimizing web applications for peak performance.

I approach each project with a problem-solving mindset, striving to write clean, efficient code that exceeds client expectations. I enjoy collaborating with cross-functional teams to create seamless web experiences.


</p>
                <br />
                <p className='text-xl mt-15'>
                Outside of coding, I'm an avid hiker and have a keen interest in learning about new technologies of the automobile industry. I believe that the same attention to detail and creativity I apply to web development carries over into my hobbies.

If you're looking for a dedicated developer who is passionate about creating exceptional web solutions, I can help bring your web project to life.
                </p>
            </div>


        </div>
 )
}

export default About