import React from 'react'
import Todo from './Todo.png'
import wings from './wings.png'
import quiz from './quiz.png'


const Projects = () => {
  return (
    <div className='py-6 max-w-[1200px] mx-auto'id='project'>
        <div className='mx-auto px-8 md:px-8'>
            <div className='mb-4 flex items-center justify-between gap-8'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl lg:text-3xl text-white'>
                        My<span>Projects</span>
                    </h2>
                    <p className='text-gray-600'>
                        These are a few projects of mine
                    </p>
                </div>
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>
                    <a href='https://github.com/SwethaVijayan08/TO-DO-List-App' className='group relative flex h-48 items-end shadow-lg md:h-80'>
                        <img src={Todo} loading='her' alt='' className='absolite inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>
                        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'>
                        </div>
                    </a>

                    <a href='https://github.com/SwethaVijayan08/Quiz-app' className='group relative flex h-48 items-end shadow-lg md:h-80'>
                        <img src={quiz} loading='her' alt='' className='absolite inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>
                        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'>
                        </div>
                    </a>

                    <a href='https://github.com/jubinjacob03/wings_airlines' className='group relative flex h-48 items-end shadow-lg md:h-80'>
                        <img src={wings} loading='her' alt='' className='absolite inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>
                        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'>
                        </div>
                    </a>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects