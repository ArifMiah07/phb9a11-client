import PropTypes from 'prop-types';
import './about.css'
import '../../../Styles/Fonts/GoogleFonts.css'

const AboutCard = ({data}) => {
    const {serial, imageLink, heading1, paragraph, style} = data;
    // console.log(data, imageLink, heading1, paragraph, style, backgroundColor);
    return (
        <div className={`aboutBorder flex flex-row gap-4 py-12 text-white ${serial === 1 ? 'bg-[#09A24F]' : serial === 2 ? 'bg-[#7763E5]' : ''} text-[#000] rounded-lg`}>
            <div className='p-6'>
                <img className='w-full h-full' src={imageLink} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
            <h1 className={`${style} nunito font-extrabold text-[26px] `}>{heading1}</h1>
            <p className='inter'>{paragraph}</p>
            </div>
        </div>
    );
};

AboutCard.propTypes = {
    data: PropTypes.object
}

export default AboutCard;
