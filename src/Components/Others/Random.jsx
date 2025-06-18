import { useState } from 'react';
import { LuMenuSquare, LuFacebook, LuYoutube, } from "react-icons/lu";
import { FaArtstation } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Random.css'



const Random = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const navigationLinks = <>
  
    <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>Home <span></span> </Link> </li>
    <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>Science <span><MdScience /></span> </Link> </li>
    <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>Commerce <span></span> </Link> </li>
    <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>Arts <span></span>  <span><FaArtstation /></span></Link> </li>
    <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>WorkAboutHome <span></span> </Link> </li>
    <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>BlogHome <span></span> </Link> </li>
    <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>FacebookHome <span></span> </Link> </li>
    <li className='flex items-center gap-3' > <Link  className='flex items-center gap-3'  to={'/'}>Youtube <span></span> </Link> </li>
  </>
// [
//     { name: 'Home Page', href: '#' },
//     { name: '', href: '#' },
//     { name: '', href: '#' },
//     { name: '', href: '#' },
//     { name: '', href: '#' },
//     { name: '', href: '#' },
//     { name: '', href: '#' },
//     { name: '', href: '#' },
//     { name: '', href: '#' },
//   ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const content = (
    <div className="border-cyberpunk border-x-8 flex flex-col bg-[#ffca93] h-screen w-screen">
      <div className="flex justify-center mt-10 mb-10">
        <h2 className="text-center text-3xl text-white font-bold">Elysium(An Imaginary Kingdom)</h2>
      </div>
      <div className="flex flex-wrap p-4">
        <p className="text-center text-white text-lg pb-4">Ones upon a time, an adventurous man found a Fairyland.</p>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-row  border-[#23bfac]">
        <button  onClick={toggleMenu} className="absolute flex items-center mb-4">
          {isMenuOpen ? (
            <svg
              className="h-6 w-6 text-white hover:text-gray-200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-black hover:text-gray-200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      <div
        className={`w-1/4  bg-[#f4c669] h-screen px-4 py-4 lg:p-12 transition duration-300 ease-in-out ${
          isMenuOpen ? '' : 'hidden'
        }`}
      >
        <ul className='menu flex flex-col gap-4'>
            {navigationLinks}
        </ul>
        {/* {navigationLinks.map((link) => (
          <a key={link.name} href={link.href} className="block py-2 text-white hover:text-gray-200 text-xl font-bold">
            {link.name}
          </a>
        ))} */}
      </div>
      {content}
      <div className="w-1/4 bg-blue-700 h-screen px-4 py-2"></div>
    </div>
  );
};

export default Random;
