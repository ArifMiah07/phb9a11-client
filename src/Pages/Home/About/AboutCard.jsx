import PropTypes from 'prop-types';
import './about.css'

const AboutCard = ({data}) => {
    const {serial, imageLink, heading1, paragraph, style, backgroundColor } = data;
    console.log(data, imageLink, heading1, paragraph, style, backgroundColor);
    return (
        <div className={`aboutBorder flex flex-col gap-3 p-8 ${serial === 1 ? 'bg-[#09A24F]' : serial === 2 ? 'bg-[#7763E5]' : ''} text-[#000] rounded-lg`}>
            <div>
                <img src={imageLink} alt="" />
            </div>
            <h1 className={`${style} `}>{heading1}</h1>
            <p>{paragraph}</p>
        </div>
    );
};

AboutCard.propTypes = {
    data: PropTypes.object
}

export default AboutCard;
