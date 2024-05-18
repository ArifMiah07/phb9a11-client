// import PrimaryCard from '../../../Components/Cards/PrimaryCard/PrimaryCard';
import { useEffect, useState } from 'react';
import '../../../Styles/Fonts/GoogleFonts.css'
import FindClassesCard from './FindClassesCard';
import { Link } from 'react-router-dom';

const FindClasses = () => {


    const [aboutData, setAboutData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/about-classes')
        .then(res => res.json())
        .then(data => {
            // console.log(data); 
            setAboutData(data);
        
        })
        .catch(error => console.error('Error fetching:', error));

    }, [])


    
    return (
        <div className=' border border-red-400 w-full flex flex-col justify-between gap-6 p-6'>
            <div className=' border border-red-400 flex flex-col md:flex md:flex-col lg:flex lg:flex-col'>
                <div className='text-center'>
                    <h1 className='font-semibold mt-6 text-[20px] inter flex items-center justify-center'><span><img src="https://html.themewant.com/studykids/assets/images/banner/title-img.svg" alt="" /></span> Classes</h1>
                    <h1 className='nunito text-[48px] my-5 font-extrabold  '>Find Classes For Every Age</h1>
                    <p className='inter text-[rgb(115_116_119)] mb-6 '>Marked by significant growth and exploration as <br /> toddlers transition from infancy<br /></p>
                </div>
                <div className='flex flex-col lg:flex lg:flex-row gap-6 p-3 '>
                    {
                        aboutData.map((data, idx) => <FindClassesCard key={idx} data={data}></FindClassesCard>)
                    }
                </div>
                <div className='my-12 w-full flex flex-col justify-center items-center'>
                    <Link to={'/classes-details'}>
                        <button className='aboutBorder bg-yellow-400 text-gray-700 px-4 py-2 rounded-3xl hover:bg-yellow-500'>See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FindClasses;