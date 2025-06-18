
import PropTypes from 'prop-types';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const AddServicesRow = ({ booking, handleDelete, handleEdit }) => {


    // service_name, _id, serviceImageUrl, date, price, description, area, providerEmail, providerImage, providerName
    const { service_name, _id, date, price, providerName, serviceImageUrl } = booking;


    return (
        <tr>
            <th>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        {serviceImageUrl && <img src={serviceImageUrl} alt="Avatar" />}
                    </div>
                </div>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div>
                        <div className="font-bold">{service_name}</div>
                        <div className="text-sm opacity-50">{date}</div>
                    </div>
                </div>
            </td>
            <td>
                <p>{providerName}</p>
            </td>
            <td>{price}</td>
            <th className='flex gap-4'>
                <button onClick={() => handleDelete(_id)} className="btn p-4 btn-circle tooltip " data-tip="double click here to delete" >
                    <MdDeleteForever />
                </button>
                <button onClick={() => handleEdit(booking)} className="btn p-4 btn-circle tooltip " data-tip="double click here to Edit" >
                    <FaRegEdit />
                </button>
            </th>
        </tr>
    );
};

AddServicesRow.propTypes = {
    booking: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleBookingConfirm: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
};

export default AddServicesRow;












// import PropTypes from 'prop-types';

// import { FaRegEdit } from "react-icons/fa";

// import { MdDeleteForever } from "react-icons/md";



// const AddServicesRow = ({booking, handleDelete,  handleBookingConfirm}) => {

//     const {service_name,_id, serviceImageUrl,date, price, description, area, providerEmail, providerImage, providerName} = booking;
//     return (
//         <tr>
//             <th>
//             <div className="avatar">
//                     <div className="mask mask-squircle w-12 h-12">
//                         { providerImage && <img src={providerImage} alt="Avatar Tailwind CSS Component" />}
//                     </div>
//                 </div>
//             </th>
//             <td>
//             <div className="flex items-center gap-3">
//                 <div>
//                     <div className="font-bold">{service_name}</div>
//                     <div className="text-sm opacity-50">{date}</div>
//                 </div>
//             </div>
//             </td>
//             <td>
//                 <p>{ providerName}</p>
//             </td>
//             <td>{price}</td>
//             <th className='flex gap-4'>
//                 <button onClick={()=> handleDelete(_id)} className="btn btn-circle">
//                 <MdDeleteForever />
//                 </button>
//                 <button className='btn btn-circle'>
//                     <FaRegEdit />
//                 </button>
//                 {/* {
//                     status === 'confirm' ? <span className="font-bold">Confirmed</span> :
//                     <button onClick={()=> handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">plz Confirm</button>
//                 } */}
//             </th>
//         </tr>
//     );
// };

// AddServicesRow.propTypes = {
//     booking: PropTypes.object, 
//     handleDelete: PropTypes.func,  
//     handleBookingConfirm: PropTypes.func
// }

// export default AddServicesRow;
