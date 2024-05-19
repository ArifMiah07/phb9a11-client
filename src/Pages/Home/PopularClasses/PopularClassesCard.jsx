import PropTypes from 'prop-types';
import '../../../Styles/Fonts/GoogleFonts.css';
import { MdOutlineStarRate, MdStarRate } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { BsCake } from "react-icons/bs";
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const PopularClassesCard = ({ c }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.pathname);

    const a = [];
    for (let i = 0; i < 4; i++) {
        a.push(<MdStarRate key={i} />);
    }

    const { sl, imgT, ages, time, rating, teacher, price, imgLink, heading1 } = c;

    const handleSeeDetails = () => {
        if (user) {
            navigate('/course-details');
        } else {
            navigate('/login', { state: { from: location.pathname } });
            //  <Navigate state={location.pathname} to={'/login'} replace></Navigate>
        }
    };

    const handleShowAll = () => {
        if (user) {
            navigate('/all-services');
        } else {
            navigate('/login', { state: { from: location.pathname } });
            //  <Navigate state={location.pathname} to={'/login'} replace></Navigate>
        }
    };

    return (
        <div className={`aboutBorder rounded-none flex flex-col gap-4 text-white ${sl === 1 ? 'bg-[#7763E5]' : sl === 2 ? 'bg-[#FF6D1C]' : sl === 3 ? 'bg-[#B54CCA]' : sl === 4 ? 'bg-[#09A24F]' : sl === 5 ? 'bg-[#C29663]' : sl === 6 ? 'bg-[#A89222]' : sl === 7 ? 'bg-[#FF4E41]' : sl === 8 ? 'bg-[#20AD96]' : ''} `}>
            <div className='w-full'>
                <img className='w-full h-full' src={imgLink} alt="" />
            </div>
            <div className='flex flex-col gap-5 p-5'>
                <h1 className='flex'>
                    <span className='flex items-center gap-2'><BsCake />{ages}</span><span className='flex items-center gap-2'><IoMdTime />{time}</span>
                </h1>
                <h1 className={`nunito font-extrabold text-[20px]`}>{heading1}</h1>
                <p className='inter text-[18px] flex items-center'>
                    <span className='flex items-center font-black text-2xl text-[rgb(255_211_53)]'>{a} <MdOutlineStarRate className='font-black text-2xl text-[rgb(255_211_53)]' /></span> <span>{rating}</span>
                </p>
                <div className="flex items-center justify-between">
                    <div className='flex gap-4 items-center'>
                        <img className='w-[40px] h-[40px]' src={imgT} alt="" />
                        <h1 className='font-extrabold nunito'>{teacher}</h1>
                    </div>
                    <p className='text-[20px] font-extrabold nunito'>{price}</p>
                </div>
                <div className='flex gap-4'>
                    <button
                        onClick={handleSeeDetails}
                        className="glow-effect admissionNow bg-yellow-400 text-black font-bold inter px-4 py-2 rounded-md hover:bg-yellow-500">
                        See Details
                    </button>
                    <button onClick={handleShowAll} className="glow-effect admissionNow bg-yellow-400 text-black font-bold inter px-4 py-2 rounded-md hover:bg-yellow-500">
                        Show All
                    </button>
                </div>
            </div>
        </div>
    );
};

PopularClassesCard.propTypes = {
    c: PropTypes.object.isRequired
};

export default PopularClassesCard;
