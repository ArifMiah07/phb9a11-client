import PropTypes from 'prop-types';
import '../../../Styles/Fonts/GoogleFonts.css'
import { Link } from 'react-router-dom';

const CategoryCard = ({data}) => {
    
    const {serial, imageLink, heading1, _id } = data;
    console.log(data, imageLink, heading1);
    return (
        <div className='w-full flex flex-col gap-12'>
            <div className={` w-[200px] h-[200px] aboutBorder rounded-full flex items-center justify-center gap-4 p-6  text-white ${serial === 1 ? 'bg-[#C29663]' : serial === 2 ? 'bg-[#FF6D1C]' : serial === 3 ? 'bg-[#7763E5]' : serial === 4 ? 'bg-[#B54CCA]' : serial === 5 ? 'bg-[#09A24F]'  : ''} text-[#000] rounded-full`}>
                <img className='w-[100px] h-full' src={imageLink} alt="" />
            </div>
            <Link to={`/category/${_id}`}>
                <div className={`aboutBorder p-4 rounded-full flex items-center justify-center w-[200px] text-white ${serial === 1 ? 'bg-[#C29663]' : serial === 2 ? 'bg-[#FF6D1C]' : serial === 3 ? 'bg-[#7763E5]' : serial === 4 ? 'bg-[#B54CCA]' : serial === 5 ? 'bg-[#09A24F]'  : ''} text-[#000]`}>
                <   button>{heading1}</button>
                </div>
            </Link>
        </div>
    );
};

CategoryCard.propTypes = {
    data: PropTypes.object
}

export default CategoryCard;
