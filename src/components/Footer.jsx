import React from 'react'
import { FaGithubSquare,FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-12 w-max-[800] border-t border-gray-500 text-center'>
        <p className='my-5 text-gray-500'>
            @swetha_vijayan
        </p>
        <div>
            <FaGithubSquare/>
            <FaInstagramSquare/>
            <FaGithubSquare/>
            <FaInstagramSquare/>
        </div>
    </div>
  )
}

export default Footer