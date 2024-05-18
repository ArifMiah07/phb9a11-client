// import PrimaryCard from '../../../Components/Cards/PrimaryCard/PrimaryCard';
import { useEffect, useState } from 'react';
import aboutUsImg from '../../../assets/images/about-us.png'
// import PrimaryCard from '../../../Components/Cards/PrimaryCard/PrimaryCard';
import AboutCard from './AboutCard';
import '../../../Styles/Fonts/GoogleFonts.css'
import { Link } from 'react-router-dom';

const AboutUs = () => {


    const [aboutData, setAboutData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/about-us')
        .then(res => res.json())
        .then(data => {
            // console.log(data); 
            setAboutData(data);
        
        })
        .catch(error => console.error('Error fetching about-us:', error));

    }, [])


    
    return (
        <div className='border border-red-400 w-full flex flex-col md:flex md:flex-row lg:flex lg:flex-row justify-between gap-6 '>
            <div className='flex justify-center items-center border border-red-400 lg:w-1/2'>
                <img src={aboutUsImg} alt="" />
            </div>
            <div className=' border border-red-400 flex flex-col justify-center items-center md:flex md:flex-col lg:flex lg:flex-col'>
                <div className='text-center'>
                    <h1 className='font-semibold mt-6 text-[20px] inter flex items-center justify-center'><span><img src="https://html.themewant.com/studykids/assets/images/banner/title-img.svg" alt="" /></span> About us</h1>
                    <h1 className='nunito text-[48px] my-5 font-extrabold  '>Discover Our Mission for <br />SmartKizs Academy</h1>
                    <p className='inter text-[rgb(115_116_119)] mb-6 '>Welcome to Smartkiz, where education meets inspiration, and every <br />
                        childs journey is a story of growth and discovery.</p>
                </div>
                <div className='flex w-full flex-col gap-6 p-6'>
                    {
                        aboutData.slice(-2).map((data, idx) => <AboutCard key={idx} data={data}></AboutCard>)
                    }
                </div>
                <div className='my-12'>
                    <Link to={'/about'}>
                    <button className='aboutBorder bg-yellow-400 text-gray-700 px-4 py-2 rounded-3xl hover:bg-yellow-500'>About More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;