import PropTypes from 'prop-types';
import '../../Styles/Fonts/GoogleFonts.css'

const ServiceToDoRow = ({bs}) => {

    
    console.log(bs);
    

    
    const {_id,
        serviceId,
        serviceName,
        serviceImg,
        userName,
        date,
        sInstruction,
        price,
        status,} = bs;
    
    return (
        <tr className='p-12 nunito'>
            <td>
                <img className='w-12' src={serviceImg} alt="" />
            </td>
            <td>{userName}</td> 
            <td>{serviceName}</td> 
            <td>{serviceId}</td> 
            <td>{date}</td> 
            <td>{price}</td>
            <td className=''>{status}</td>
        </tr>
    );
};

ServiceToDoRow.propTypes = {
    bs: PropTypes.object
}

export default ServiceToDoRow;