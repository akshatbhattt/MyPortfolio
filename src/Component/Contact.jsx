import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-[170vh] bg-gradient-to-b   from-black to to-gray-800 text-white '> 


   <div className='flex flex-col p-4  justify-center max-w-screen-lg mx-auto h-full'>
    <div className='pb-8'> 
        <p className='text-4xl font-bold border-b-4 border-gray-500  p-2 inline '>Contact</p>
        <p className='p-6 text:xl'>Fill the form to contact us</p>
    </div>


    <div className=' flex justify-center items-center'>

        <form action="https://getform.io/f/5f105971-a2ca-484d-8f8f-7224391edd90" method='POST' className=' flex flex-col  w-full  md:w-1/2 '>

            <input type="text" name='name' placeholder='enter your name' className='p-2 bg-transparent border-2  rounded-md  text-white focus:outline-none' />

            <input type="text" name='email' placeholder='enter your email' className='my-4 p-2 bg-transparent border-2  rounded-md  text-white focus:outline-none' />

            <textarea name="message" placeholder=' enter your message '  rows="10" className='p-2 bg-transparent border-2  rounded-md text-white focus:outline-none'></textarea>

            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  my-8 mx-auto flex items-center rounded-md  hover:scale-110 duration-300 '>lets talk</button>


        </form>

    </div>


   </div>

    </div>
  )
}

export default Contact;