import { Helmet } from "react-helmet-async";
import PopularClassesCard from "./PopularClassesCard";
import { useEffect, useState } from "react";


const PopularClasses = () => {

    const [pcd, setPcd] = useState([]);

    useEffect(()=>{
        fetch('https://smart-kidz-server-liard.vercel.app/category')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setPcd(data);
        })
    }, [])
    const pc = pcd.length > 0 ? pcd[0].content : [];

    // console.log(pc);

    return (
        <div className=' w-full flex flex-col justify-between gap-6 p-6'>
            {/* <Helmet>
                <title>Popular Classes</title>
            </Helmet> */}
            <div className=' flex flex-col md:flex md:flex-col lg:flex lg:flex-col'>
                <div className='text-center'>
                    <h1 className='font-semibold mt-6 text-[20px] inter flex items-center justify-center'><span><img src="https://html.themewant.com/studykids/assets/images/banner/title-img.svg" alt="" /></span> Category</h1>
                    <h1 className='nunito text-[48px] my-5 font-extrabold  '>Popular class topics</h1>
                    <p className='inter text-[rgb(115_116_119)] mb-6 '>marked by significant growth and exploration as <br />toddlers transition from infancy</p>
                </div>
                <div className='flex flex-col lg:flex lg:flex-row gap-6 p-3 '>
                    {
                        pc.slice(4, 8).map((c, idx) => <PopularClassesCard key={idx} c={c}></PopularClassesCard>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default PopularClasses;