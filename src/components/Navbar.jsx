import React , {useState}from "react";
import { AiOutlineClose,AiOutlineMenu, AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineDatabase, AiOutlineMail} from "react-icons/ai";

const Navbar = () => {



    const[nav, setNav]= useState(false)

    const handleNav=() =>[
        setNav(!nav)
    ]


    return(
        <div className="text-gray-400 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-lg fixed w-full bg-[#202121] z-50">
      
            <h1 className="text-3xl font-bold primary-color ml-4">Swetha Vijayan
            </h1>
            <ul className="hidden md:flex">
                <li className="p-5"><a href="#home" className="flex items-center"><AiOutlineHome size={25} /><span className="ml-2 text-gray-400 text-xs">Home</span></a></li>
                <li className="p-5"><a href="#about" className="flex items-center"><AiOutlineUser size={25} /><span className="ml-2 text-gray-400 text-xs">About me</span></a></li>
                <li className="p-5"><a href="#project" className="flex items-center"><AiOutlineProject size={25} /><span className="ml-2 text-gray-400 text-xs">Projects</span></a></li>
                <li className="p-5"><a href="#experience" className="flex items-center"><AiOutlineDatabase size={25} /><span className="ml-2 text-gray-400 text-xs">Experience</span></a></li>
                <li className="p-5"><a href="#contact" className="flex items-center"><AiOutlineMail size={25} /><span className="ml-2 text-gray-400 text-xs">Contact</span></a></li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={30}/>}
            </div>
            <div className={nav ?'text-gray-300 fixed h-full left-0 top-0 w[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500'
                :"fixed left-[-100%]"}>
                
            <h1 className="text-3xl primary-color m-4">Swetha Vijayan
            </h1>
                <ul className="flex md:hidden flex-col">
                    <li className="p-5"><a href="#home" className="flex items-center"><AiOutlineHome size={25} /><span className="ml-2 text-gray-400 text-xs">Home</span></a></li>
                    <li className="p-5"><a href="#about" className="flex items-center"><AiOutlineUser size={25} /><span className="ml-2 text-gray-400 text-xs">About me</span></a></li>
                    <li className="p-5"><a href="#project" className="flex items-center"><AiOutlineProject size={25} /><span className="ml-2 text-gray-400 text-xs">Projects</span></a></li>
                    <li className="p-5"><a href="#experience" className="flex items-center"><AiOutlineDatabase size={25} /><span className="ml-2 text-gray-400 text-xs">Experience</span></a></li>
                    <li className="p-5"><a href="#contact" className="flex items-center"><AiOutlineMail size={25} /><span className="ml-2 text-gray-400 text-xs">Contact</span></a></li>
                </ul>
            </div>
        </div>
    ) 
}

export default Navbar