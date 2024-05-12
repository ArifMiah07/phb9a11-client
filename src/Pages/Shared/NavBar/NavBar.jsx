import { NavLink } from 'react-router-dom';
import  '../../../Styles/Fonts/GoogleFonts.css'
import './navbar.css'
const NavBar = () => {

    const navLinks = <>
        <li><NavLink to={'/home'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Home</NavLink> </li>
        <li><NavLink to={'/pages'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Pages</NavLink> </li>
        <li><NavLink to={'/classes'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Classes</NavLink> </li>
        <li><NavLink to={'/blog'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Blogs</NavLink> </li>
        <li><NavLink to={'/contact'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Contact</NavLink> </li>
    </>
  return (
    <div className="navbar  rounded-[85px]  custom-box-shadow bg-[#FFFFFF] flex justify-between items-center px-4 py-2 text-white">
        <div className="navbar-start flex gap-5">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <div className="flex items-center">
               {/* <img src="/logo.png" alt="Studykids" className="h-8 mr-2" /> */}
               <span className="flex gap-0 text-2xl font-bold"> <span className='text-[#09A24F]  '>Smart</span><span className='text-[#7763E5]  '> Kidz</span></span>
           </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navLinks}
            </ul>
        </div>
        <div>
        </div>
        <div className="navbar-end">
            <button className="glow-effect admissionNow bg-yellow-400 text-gray-700 px-4 py-2 rounded-3xl hover:bg-yellow-500">
            Admission Now
        </button>
        </div>
    </div>
    // <div className=" rounded-[85px] custom-box-shadow bg-[#FFFFFF] flex justify-between items-center px-4 py-2 text-white">
    //   <div className="navbar-start">
    //         <div className="dropdown">
    //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //             </div>
    //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
    //                 {navLinks}
    //             </ul>
    //         </div>
    //         <div className="flex items-center">
    //             {/* <img src="/logo.png" alt="Studykids" className="h-8 mr-2" /> */}
    //             <span className="flex gap-0 text-2xl font-bold"> <span className='text-[#09A24F]  '>Smart</span><span className='text-[#7763E5]  '> kids</span></span>
    //         </div>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //         <ul className="menu menu-horizontal px-1">
    //             {navLinks}
    //         </ul>
    //     </div>                
    //   <div className='navbar-end'>
    //     <button className="bg-yellow-400 text-gray-700 px-4 py-2 rounded hover:bg-yellow-500">
    //         Admission Now
    //     </button>
    //   </div>
    // </div>
  );
};

export default NavBar;