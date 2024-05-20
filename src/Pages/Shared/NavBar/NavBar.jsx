import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState, } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import  '../../../Styles/Fonts/GoogleFonts.css'
import brain_icon from '../../../assets/brain-icon-flat.png'
import './navbar.css'
import DashboardDropdown from '../../../Components/DashboardDropdown/DashboardDropdown';
import DarkColorThem from '../../../Components/Them/DarkColorThem';

const NavBar = () => {
    
    const {user, logOut} = useContext(AuthContext);

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    
    const handleToggle = (e)=> {
        if(e.target.checked){
            setTheme('dark');
        }else{
            setTheme('light')
        }
    }
    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme); 
    } , [theme])





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
        {/* <li><NavLink to={'/pages'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Pages</NavLink> </li>
        <li><NavLink to={'/classes'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Classes</NavLink> </li>
        <li><NavLink to={'/blog'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Blogs</NavLink> </li> */}
        <li><NavLink to={'/all-services'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Services </NavLink> </li> 
        <li><NavLink to={'/search'} className="text-black hover:text-yellow-400 hover:text-[21px] ">Search</NavLink> </li>
        {user?.email ? 
        <>  
            {/* <li><NavLink to={'/bookings'}>Bookings</NavLink></li> */}

            <DashboardDropdown />
            
            <li><button className="text-black hover:text-yellow-400 hover:text-[21px]" onClick={handleLogOut}>Log Out</button></li>
        </> :
        <li><NavLink to={'/login'} className="text-black hover:text-yellow-400 hover:text-[21px] ">login</NavLink> </li>
        }
    
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
            <div className='w-[100px]'>
                <label className="swap swap-rotate">
                    <input onClick={handleToggle} type="checkbox" />
                    <svg className="btn w-[60px] h-[60px] swap-on fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    <svg className="btn w-[60px] h-[60px] swap-off fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                </label>
            </div>
            <button className="glow-effect admissionNow bg-yellow-400 text-gray-700 px-4 py-2 rounded-3xl hover:bg-yellow-500">
            Admission Now
        </button>
        </div>
    </div>
  );
};

export default NavBar;