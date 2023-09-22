import React from 'react'
import htmll from '../Images/htmll.jpeg';
import cpp from '../Images/cpp.jpeg';
import css from '../Images/css.jpeg';
import githubb from '../Images/githubb.jpeg';
import reactt from '../Images/reactt.jpeg';
import ml from '../Images/ml.jpeg';
import sqll from '../Images/sqll.jpeg';
import Jscrpt from '../Images/Jscrpt.jpg'


const Experience = () => {

  const techs = [
    {
      id: 1,
      src: htmll,
      title: 'HTML',
      style: 'shadow-orange-500'

    },


    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'

    },

    {
      id: 3,
      src: cpp,
      title: 'C++',
      style: 'shadow-blue-300'

    },


    {
      id: 4,
      src: githubb,
      title: 'GitHub',
      style: 'shadow-gray-500'

    },

    {
      id: 5,
      src: ml,
      title: 'Machine Learning',
      style: 'shadow-green-300'

    },

    {
      id: 6,
      src: reactt,
      title: 'React',
      style: 'shadow-blue-300'

    },

    {
      id: 7,
      src: sqll,
      title: 'SQL',
      style: 'shadow-blue-500'

    },
    {
      id: 8,
      src: Jscrpt,
      title: 'JavaScript',
      style: 'shadow-yellow-500'

    }
  ]


  return (
    <div name='Skills' className='h-[180vh] sm:h-[100vh] pt-10 bg-gradient-to-b from-gray-800 to-black  w-full'>

      <div className='max-w-screen-lg mx-auto  p-4   flex flex-col  justify-center   text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500  p-2 inline '>Skills</p>
          <p className='py-6 text-xl'>The technologies I've worked with are:</p>



        </div>
      

      <div className='max-w-full grid grid-cols-2  sm:grid-cols-3 gap-8 text-center py-8  sm:px-0'>

        {
          techs.map(({id,src,title,style}) => (

            <div key={id} className={`shadow-md mb-6 ml-2 mr-2  hover:scale-100 duration-500 py-8 rounded-lg ${style} `} >
              <img src={src} alt="imgs" className='w-20  mx-auto rounded-lg h-auto max-w-full ' />
              <p className='mt-4'>{title}</p>
            </div>

          ))
        }

      </div>

      </div>
    </div>
  )
}

export default Experience