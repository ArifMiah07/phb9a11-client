import { NavLink } from 'react-router-dom';
import  '../../../Styles/Fonts/GoogleFonts.css'
import brain_icon from '../../../assets/brain-icon-flat.png'
import './navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
const Nav = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then( ()=>{
            // console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }



    const navLinks = <>
        <li><NavLink to={'/'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Home</NavLink> </li>
        <li><NavLink to={'/pages'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Pages</NavLink> </li>
        <li><NavLink to={'/classes'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Classes</NavLink> </li>
        <li><NavLink to={'/blog'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Blogs</NavLink> </li>
        <li><NavLink to={'/search'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Search</NavLink> </li>
        {user?.email ? 
        <>
            {/* <li><NavLink to={'/bookings'}>Bookings</NavLink></li> */}
            <li><button className="text-black hover:text-yellow-400 hover:text-[21px]" onClick={handleLogOut}>Log Out</button></li>
        </> :
        <li><NavLink to={'/login'} className="text-black hover:text-yellow-400 hover:text-[21px] ">login</NavLink> </li>
        }
        
    </>
  return (
    <div className="navbar bg-[#FFFFFF] flex justify-between items-center px-4 py-2 text-white">
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
              <div className='flex'><span className='flex'><img className='w-8 h-8' src={brain_icon} alt="" /> <img className='w-2 h-2' src="https://ouch-cdn2.icons8.com/U0_RVUErdJV8HehKVPesHa6AesS-qD5rQI44pClMtH4/rs:fit:249:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjA4/L2YzMDNjZTQyLWZl/ODktNDNhZi04ZjY4/LTJjNzUwMTQyNjg1/OC5zdmc.png" alt="" /></span></div> <span className="flex gap-0 text-2xl font-bold"> <span className='text-[#09A24F]  '>Smart</span><span className='text-[#7763E5]  '> Kidz</span></span>
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
            <button className="admissionNow bg-yellow-400 text-gray-700 px-4 py-2  hover:bg-yellow-500">
            View More
        </button>
        </div>
    </div>
  );
};

export default Nav;