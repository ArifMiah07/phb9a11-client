// import PrimaryCard from '../../../Components/Cards/PrimaryCard/PrimaryCard';
import { useEffect, useState } from 'react';
import '../../../Styles/Fonts/GoogleFonts.css'
import FindCoursesCard from './FindCoursesCard';
// import FindCoursesCard from './FindClassesCard';

const FindCourses = () => {


    const [aboutData, setAboutData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/about-courses')
        .then(res => res.json())
        .then(data => {
            // console.log(data); 
            setAboutData(data);
        
        })
        .catch(error => console.error('Error fetching :', error));

    }, [])


    
    return (
        <div className='relative bg-[#FFD9EF] border border-red-400 w-full flex flex-col justify-between lg:gap-28 '>
            <div className='mb-28'>
                <img className='absolute top-0 ' src="https://html.themewant.com/studykids/assets/images/banner/banner-bg-2.png" alt="" />
            </div>
            <div className='p-3 lg:mb-28 border border-red-400 flex flex-col md:flex md:flex-col lg:flex lg:flex-col'>
                <div className='text-center'>
                    <h1 className='font-semibold mt-6 text-[20px] inter flex items-center justify-center'><span><img src="https://html.themewant.com/studykids/assets/images/banner/title-img.svg" alt="" /></span>Courses</h1>
                    <h1 className='nunito text-[48px] my-5 font-extrabold  '>Kids Courses at SmartKidz</h1>
                    <p className='inter text-[rgb(115_116_119)] mb-6 '>Discover the exciting and enriching courses tailoredfor young minds at SmartKidz<br /></p>
                </div>
                <div className='flex flex-col lg:flex lg:flex-row gap-6 p-3 '>
                    {
                        aboutData.map((data, idx) => <FindCoursesCard key={idx} data={data}></FindCoursesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FindCourses;