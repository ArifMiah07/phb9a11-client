import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineStarRate,  MdStarRate} from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { BsCake } from "react-icons/bs";
import { Link } from 'react-router-dom';



const SingleService = () => {


    
    const loadedData = useLoaderData();
    const { id } = useParams();

    // Ensure `id` is converted to an integer
    const intId = parseInt(id);

    // Log the loaded data structure for debugging
    console.log("loadedData:", loadedData);

    // Find the specific service that contains the content with the matching `id`
    const data = loadedData.find(d => 
        d.content.some(dc => dc.sl === intId)
    );

    // If data is found, find the specific content with the matching `sl`
    const matchedContent = data ? data.content.find(dc => dc.sl === intId) : null;

    // Log the found data for debugging
    console.log("id:", id, "data:", data, "matchedContent:", matchedContent);
    const a = [];
    for (let i = 0; i < 4; i++) {  
        a.push(<MdStarRate key={i} />);
    }
// console.log(a);
// const {sl, imgT, ages, time, rating, teacher, price, imgLink: imgLink, heading1,} = c;

    return (
        <div>
            <h1>Service {id}</h1>
            {matchedContent ? (
                <div className={`aboutBorder rounded-none flex flex-col gap-4 text-white ${matchedContent.sl === 1 ? 'bg-[#7763E5]' : matchedContent.sl === 2 ? 'bg-[#FF6D1C]' : matchedContent.sl === 3 ? 'bg-[#B54CCA]' : matchedContent.sl === 4 ? 'bg-[#09A24F]' : matchedContent.sl === 5 ? 'bg-[#C29663]' : matchedContent.sl === 6 ? 'bg-[#A89222]' : matchedContent.sl === 7 ? 'bg-[#FF4E41]' : matchedContent.sl === 8 ? 'bg-[#20AD96]' : ''} `}>
                <div className='w-full   '>
                    <img className='w-full h-full' src={matchedContent.imgLink} alt="" />
                </div>
                <div className='w-full h-full flex flex-col justify-between gap-5 p-5'>
                    <h1 className='flex'>
                        <span className='flex items-center gap-2'><BsCake />{matchedContent.ages}</span><span className='flex items-center gap-2'><IoMdTime />{matchedContent.time}</span>
                    </h1>
                    <h1 className={`nunito font-extrabold text-[20px] `}>{matchedContent.heading1}</h1>
                    <p className='inter text-[18px] flex items-center '>
                        <span className='flex items-center font-black text-2xl text-[rgb(255_211_53)]'>{a} <MdOutlineStarRate className='font-black text-2xl text-[rgb(255_211_53)]' /></span> <span>{matchedContent.rating}</span>
                    </p>
                    <div className="flex items-center justify-between ">
                        <div className='flex gap-4 items-center'>
                        <img className='w-[40px] h-[40px]' src={matchedContent.imgT} alt="" />
                        <h1 className='font-extrabold nunito'>{matchedContent.teacher}</h1>
                        </div>
                        <p className='text-[20px] font-extrabold nunito '>{matchedContent.price}</p>
                    </div>
                    <div className="flex items-center gap-3">        
                        <Link to={'/course-details'}>
                            <button className="glow-effect admissionNow bg-yellow-400 text-black font-bold inter px-4 py-2 rounded-md hover:bg-yellow-500">
                                Book Now
                            </button>
                        </Link>
                        <Link to={'/course-details'}>
                            <button className="glow-effect admissionNow bg-yellow-400 text-black font-bold inter px-4 py-2 rounded-md hover:bg-yellow-500">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            ) : (
                <p>Service not found</p>
            )}
        </div>
    );
};

export default SingleService;

