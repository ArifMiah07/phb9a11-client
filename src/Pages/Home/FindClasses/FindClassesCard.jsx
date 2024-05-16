import PropTypes from 'prop-types';
import '../../../Styles/Fonts/GoogleFonts.css'

const FindClassesCard = ({data}) => {
    const {serial, imageLink, heading1, paragraph, style, backgroundColor } = data;
    console.log(data, imageLink, heading1, paragraph, style, backgroundColor);
    return (
        <div className={`aboutBorder flex flex-col gap-4 p-6  text-white ${serial === 1 ? 'bg-[#7763E5]' : serial === 2 ? 'bg-[#FF6D1C]' : serial === 3 ? 'bg-[#B54CCA]' : serial === 4 ? 'bg-[#09A24F]': ''} text-[#000] rounded-lg`}>
            <div className='w-[100px]   '>
                <img className='w-full h-full' src={imageLink} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
            <h1 className={`${style} nunito font-extrabold text-[26px] `}>{heading1}</h1>
            <p className='inter'>{paragraph}</p>
            </div>
        </div>
    );
};

FindClassesCard.propTypes = {
    data: PropTypes.object
}

export default FindClassesCard;
