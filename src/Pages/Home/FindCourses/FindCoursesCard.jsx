import PropTypes from 'prop-types';
import '../../../Styles/Fonts/GoogleFonts.css'

const FindCoursesCard = ({data}) => {
    const {serial, imageLink, heading1, paragraph, subjects } = data;
    // console.log(data, imageLink, heading1, paragraph, subjects, backgroundColor);
    return (
        <div className={`aboutBorder flex flex-col gap-4   text-white ${serial === 1 ? 'bg-[#7763E5]' : serial === 2 ? 'bg-[#FF6D1C]' : serial === 3 ? 'bg-[#B54CCA]' : ''} text-[#000] rounded-lg`}>
            <div className='w-full '>
                <img className='w-full h-full rounded-l-lg rounded-r-lg' src={imageLink} alt="" />
            </div>
            <div className='flex flex-col gap-5 p-6 '>
                <h1 className={`nunito font-extrabold text-[20px] `}>{heading1}</h1>
                <p className='inter text-[18px] text-center '>{paragraph}</p>
                <ul className='flex  space-x-8'>
                    {
                        subjects.map((s, i)=> <li className='flex items-center space-x-2 list-disc' key={i} >{s}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

FindCoursesCard.propTypes = {
    data: PropTypes.object
}

export default FindCoursesCard;
