// import PrimaryCard from '../../../Components/Cards/PrimaryCard/PrimaryCard';
import { useEffect, useState } from 'react';
import aboutUsImg from '../../../assets/images/about-us.png'
// import PrimaryCard from '../../../Components/Cards/PrimaryCard/PrimaryCard';
import AboutCard from './AboutCard';

const AboutUs = () => {


    const [aboutData, setAboutData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/about-us')
        .then(res => res.json())
        .then(data => {
            console.log(data); 
            setAboutData(data);
        
        })
        .catch(error => console.error('Error fetching about-us:', error));

    }, [])


    
    return (
        <div className='w-full p-8 flex flex-col md:flex md:flex-row lg:flex lg:flex-row '>
            <div className='lg:w-1/2'>
                <img src={aboutUsImg} alt="" />
            </div>
            <div className='p-8 flex flex-col md:flex md:flex-col lg:flex lg:flex-col'>
                <div>
                <h1>About us</h1>
                    <h1>Discover Our Mission for <br />SmartKizs Academy</h1>
                    <p>Welcome to Sutdykids, where education meets inspiration, and every <br />
                        childs journey is a story of growth and discovery.</p>
                </div>
                <div className='flex flex-col  gap-4'>
                    {
                        aboutData.slice(-2).map((data, idx) => <AboutCard key={idx} data={data}></AboutCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutUs;