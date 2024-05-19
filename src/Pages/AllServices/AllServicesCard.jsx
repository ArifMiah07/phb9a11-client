import PropTypes from 'prop-types';
import AllServicesPost from './AllServicesPost';
// import '../../../Styles/Fonts/GoogleFonts.css'


const AllServicesCard = ({cData}) => {
    console.log(cData);
    const {content} =cData;
    console.log(content);
    return (
        <div className='w-full fle flex-col gap-6'>
            <h1 className='text-3xl my-6'>{cData.heading1}</h1>
            <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 ">
                {
                    content.map((c, i) => <AllServicesPost key={i} c={c}></AllServicesPost>)
                }
        </div>
        </div>
    );
};
AllServicesCard.propTypes = {
    cData: PropTypes.object
}
export default AllServicesCard;
