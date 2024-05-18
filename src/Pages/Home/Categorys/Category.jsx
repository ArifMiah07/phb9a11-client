import { useEffect, useState } from 'react';
import '../../../Styles/Fonts/GoogleFonts.css'
import CategoryCard from './CategoryCard';

const Category = () => {


    const [aboutData, setAboutData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => {
            // console.log(data); 
            setAboutData(data);
        
        })
        .catch(error => console.error('Error fetching :', error));

    }, [])


    
    return (
        <div className=' border border-red-400 w-full flex flex-col justify-between gap-6 p-6'>
            <div className=' border border-red-400 flex flex-col md:flex md:flex-col lg:flex lg:flex-col'>
                <div className='text-center'>
                    <h1 className='font-semibold mt-6 text-[20px] inter flex items-center justify-center'><span><img src="https://html.themewant.com/studykids/assets/images/banner/title-img.svg" alt="" /></span> Category</h1>
                    <h1 className='nunito text-[48px] my-5 font-extrabold  '>Popular class topics</h1>
                    <p className='inter text-[rgb(115_116_119)] mb-6 '>marked by significant growth and exploration as <br />toddlers transition from infancy</p>
                </div>
                <div className='border border-red-500 w-full  grid grid-cols-1 items-center justify-center md:grid-cols-3 lg:grid-cols-4 gap-6 '>
                    {
                        aboutData.map((data, idx) => <CategoryCard key={idx} data={data}></CategoryCard>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Category;