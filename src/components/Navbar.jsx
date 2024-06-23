import React , {useState}from "react";
import { AiOutlineClose,AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    const[nav, setNav]= useState(false)

    const handleNav=() =>[
        setNav(!nav)
    ]


    return(
        <div className="bg-white flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l ">

            <h1 className="text-3xl font-bold primary-color ml-4">Swetha Vijayan
            </h1>
            <ul className="hidden md:flex">
                <li className='p-2'>Home</li>
                <li className='p-2'>About me</li>
                <li className='p-2'>Projects</li>
                <li className='p-2'>Resume</li>
                <li className='p-2'>Contact</li>
            </ul>

            <div onclick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ?'':"fixed left-[-100%]"}>
                <h1 className="text-3xl font-bold primary-color ml-4">Swetha Vijayan
                </h1>
                <ul className="hidden md:flex">
                    <li className='p-2'>Home</li>
                    <li className='p-2'>About me</li>
                    <li className='p-2'>Projects</li>
                    <li className='p-2'>Resume</li>
                    <li className='p-2'>Contact</li>
                </ul>
            </div>
        </div>
    ) 
}

export default Navbar