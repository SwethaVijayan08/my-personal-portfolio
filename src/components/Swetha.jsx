import React from 'react'
import img from './img.jpg'
import {TypeAnimation} from 'react-type-animation';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'

const Swetha = () => {
  return (
    <div id='home py-24'>
      <div className='my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center' >
          <div className= 'flex-col my-auto mx-auto'>
            <div className='my-auto pt-24 '>
                  <img className="w-[300px] sm:w-[500px] mx-auto-h-auto rounded-full py-5" src={img} alt="mybg"/>
              </div>
              <p className= 'md:text-3x1 sm:text-3xl text-xl py-5 font-bold text-gray-300'>
                Hello!I am Swetha Vijayan
              </p>
              <h1 className= 'md:text-5xl sm:text-5xl text-3xl font-bold md:py-6'>
              <TypeAnimation
              sequence={[
                "Student",
                1000, 
                "Frontend Developer",
                1000, 
                "A Fresher",
                1000, 
              ]}
              wrapper="span" 
              speed= {50} 
              repeat= {Infinity}
              />
              </h1>
              <div className='flex justify-center items-center'>
                <p className= 'md:text-5x1 sm:text-4x1 text-xl font-bold'>
                </p>
              </div>
              <div className="text-[30px] flex justify-start gap-16 my-7 text-purple-800">
                  <a href='https://www.linkedin.com/in/swetha-vijayan-323602285/'><AiFillLinkedin/></a>
                  <a href='https://github.com/SwethaVijayan08'><AiFillGithub/></a>
                  <a href='https://www.instagram.com/_swetha_vijayan/'><AiFillInstagram/></a>
              </div>
              <div class="relative inline-flex group my-3">
                  <div class=" absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] _via-[#FF44EC] to-[#FF675E] rounded-xl 
                  blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">

                  </div>

                  <a href="https://www.canva.com/design/DAGG0IQ9ZR0/XEEZ9TqJMlmO3cmJG-GV6Q/edit?utm_content=DAGG0IQ9ZR0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
                  title="Download CV" role="button" class="w-[220px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-1g font-bold text-white transition-all duration-200 
                  bg-primary-color font-pj rounded-xl focus outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Download Resume
                  </a>
              </div>
             
          </div>
      </div>
    </div>
  )
}

export default Swetha
