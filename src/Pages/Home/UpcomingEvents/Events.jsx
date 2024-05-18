
import { useEffect, useState } from 'react';

import EventsCard from './EventsCard';
import '../../../Styles/Fonts/GoogleFonts.css'
import img1 from '../../../assets/images/auth/01 (2).svg'
import img2 from '../../../assets/images/auth/02 (2).svg'
import img3 from '../../../assets/images/auth/03 (3).svg'
import img4 from '../../../assets/images/auth/04 (2).svg'
import img5 from '../../../assets/images/auth/05 (2).svg'
import img6 from '../../../assets/images/auth/06 (3).svg'
import Marquee from 'react-fast-marquee';

const Events = () => {


    const [aboutData, setAboutData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => {
            // console.log(data); 
            setAboutData(data);
        
        })
        .catch(error => console.error('Error fetching:', error));

    }, [])


    
    return (
        <div className='p-4 border border-red-400 w-full flex flex-col  justify-between gap-6 '>
                <div className='text-center'>
                    <h1 className='font-semibold mt-6 text-[20px] inter flex items-center justify-center text-center'><span><img src="https://html.themewant.com/studykids/assets/images/banner/title-img.svg" alt="" /></span>Event</h1>
                    <h1 className='nunito text-[48px] my-5 font-extrabold  '>Upcoming Events</h1>
                    <p className='inter text-[rgb(115_116_119)] mb-6 '>We are thrilled to announce our upcoming event, Explorers Day a celebration of knowledge.</p>
                </div>
                <div className='grid lg:grid-cols-2 gap-6'>
                    {
                        aboutData.map((data, idx) => <EventsCard key={idx} data={data}></EventsCard>)
                    }
                </div>
                {/* <div className='my-12'>
                    <button className='aboutBorder bg-yellow-400 text-gray-700 px-4 py-2 rounded-3xl hover:bg-yellow-500'>About More</button>
                </div> */}
            <div className='h-full w-full mt-24  border border-red-400 flex flex-row'>
                <Marquee speed={30} pauseOnHover={true} className='flex h-full w-full gap-5 p-2 border border-green-600'>
                    <div><img className='w-[120px] h-[120px] ml-12 ' src={img1} alt="" /></div>
                    <div><img className='w-[120px] h-[120px] ml-12 ' src={img2} alt="" /></div>
                    <div><img className='w-[120px] h-[120px] ml-12 ' src={img3} alt="" /></div>
                    <div><img className='w-[120px] h-[120px] ml-12 ' src={img4} alt="" /></div>
                    <div><img className='w-[120px] h-[120px] ml-12 ' src={img5} alt="" /></div>
                    <div><img className='w-[120px] h-[120px] ml-12 ' src={img6} alt="" /></div>
                </Marquee>
            </div>
        </div>
    );
};

export default Events;