import PropTypes from 'prop-types';
import '../../../Styles/Fonts/GoogleFonts.css'



const AboutCard = ({data}) => {
    const {serial, imageLink, heading1, paragraph, date,time, location} = data;
    console.log(data, imageLink, heading1, paragraph, date, location);
    return (
        <div className={` p-8 aboutBorder flex flex-row gap-4 text-white ${serial === 1 ? 'bg-[#09A24F]' : serial === 2 ? 'bg-[#7763E5]' : serial === 3 ? 'bg-[#FF6D1C]' : serial === 4 ? 'bg-[#B54CCA]' : ''} text-[#000] rounded-lg`}>
            <div className='flex items-center'>
                <img className='relative w-[200px] h-[200px]' src={imageLink} alt="" />
                <ul className='absolute flex flex-col items-center justify-center text-black'>
                    {
                        date.map((d, i) => <li className=' text-xl font-extrabold' key={i}>{d}</li>)
                    }
                </ul>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className={` nunito font-extrabold text-[26px] `}>{heading1}</h1>
                <p className='inter'>{paragraph}</p>
                <p>{time}</p>
                <p>{location}</p>
            </div>
        </div>
    );
};

AboutCard.propTypes = {
    data: PropTypes.object
}

export default AboutCard;
