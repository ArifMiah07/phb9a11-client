import PropTypes from 'prop-types';
import '../../Styles/Fonts/GoogleFonts.css'


const BookedServiceRow = ({bs}) => {

    // console.log(bs);
    

    
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
        <tr className='p-4 inter'>
            <th>{_id}</th> 
            <td>
                <img src={serviceImg} alt="" />
            </td>
            <td>{userName}</td> 
            <td>{sInstruction}</td> 
            <td>{serviceName}</td> 
            <td>{serviceId}</td> 
            <td>{date}</td> 
            <td>{price}</td>
            <td className=''>{status}</td>
        </tr>
    );
};

BookedServiceRow.propTypes = {
    bs: PropTypes.object
}

export default BookedServiceRow;
