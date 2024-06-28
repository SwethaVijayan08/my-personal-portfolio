import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center"id='contact'>
        <div className="max-w-[1200px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
                <h1 className="text-4x1 sm: text-5xl text-white">
                        Contact <span>Me</span>
                </h1>
                <p className="text-normal text-lg font-medium text-gray-400 mt-2">
                    Let's connect on LinkedIn <br/>
                    or send me an Email
                </p>
                
                <div className="flex items-center mt-2 text-gray-400" >
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="3 817.89 5.26a:"/>
                    </ svg>
                    <div className="m1-4 text-md tracking-wide font-semibold w-40">
                        <p>Swetha Vijayan</p>
                    </div>
                </div>
            </div>

            <form action="" method="post" className="p-6 flex flex-col justify-center max-w-[700px]">
                <div className="flex flex-col">
                <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3"/>
                </div>
                
                <div className="flex flex-col mt-2">
                <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3"/>
                </div>
                <div className="flex flex-col mt-2">
                    <textarea name="message" id="message" placeholder="Your Message" className="w-100 mt-2 py-3 px-3"/>
                </div>
                
                <button type="submit" class="md:w-32 bg-primary-color text-white py-3 px-6 rounded-1g mt-3">
                        Submit
                </button>
            </ form>
        </div>
        </div>
    </div>
  )
}

export default Contact