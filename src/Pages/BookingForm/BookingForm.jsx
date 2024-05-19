import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';


const BookingForm = ({loaderData, heading1, sl, targetObject}) => {


  const { user } = useContext(AuthContext);
  console.log(targetObject)

  const serviceData = targetObject
  
const tEmail = 'smartkidz@gmail.com'

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const from = e.target;
    const serviceId = sl; 
    const serviceName = heading1; 
    const serviceImg = targetObject.imgLink;
    const providerEmail = from.providerEmail.value; 
    const providerName = targetObject.teacher; 
    const userEmail = from.userEmail.value; 
    const userName = from.userName.value; 
    const date = from.date.value;
    const sInstruction = from.instruction.value;
    const price = targetObject.price;


    const bookingInfo = {
      serviceId,
      serviceName,
      serviceImg,
      providerEmail,
      providerName,
      userEmail,
      userName,
      date,
      sInstruction,
      price,
      status: 'pending',
    };
    fetch('http://localhost:5000/bookings',{
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('service book successfully!')
                from.reset();
            }
        })
        .catch(error =>{
            console.log(error)
        })


  

    console.log(bookingInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 inter">
      <div>
        <label>Service ID</label>
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='serviceId' value={sl} readOnly type="text" className="w-full p-2  outline-none border border-gray-700 my-3" />
      </div>
      <div>
        <label>Service Name</label>
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='serviceName' value={heading1} readOnly type="text" className="w-full p-2  outline-none border border-gray-700 my-3" />
      </div>
      <div>
        <label>Service Image</label>
        <div className='w-full flex items-center justify-center p-4'>
        <img src={targetObject.imgLink} alt="" />
        </div>
      </div>
      <div>
        <label>Provider Email</label>
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='providerEmail' value={tEmail} type="email" className="w-full p-2  outline-none border border-gray-700 my-3" />
      </div>
      <div>
        <label>Provider Name</label>
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='providerName' value={targetObject.teacher} readOnly type="text" className="w-full p-2  outline-none border border-gray-700 my-3" />
      </div>
      <div>
        <label>Current User Email</label>
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='userEmail' type="email" value={user?.email} readOnly className="w-full p-2  outline-none border border-gray-700 my-3" />
      </div>
      <div>
        <label>Current User Name</label>
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} required  name='userName' type="text" value={user ? user.DisplayName : 'user name not found. plz write ur name'} className="w-full p-2  outline-none border border-gray-700 my-3" />
      </div>
      <div>
        <label>Service Taking Date </label>
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='date' type="date" className=' outline-none border border-gray-700 my-3 p-2' />
      </div>
      <div>
        <label>Special Instruction</label>
        <textarea style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} required rows={5}  name='instruction' type="text"  className="w-full p-2  outline-none border border-gray-700 my-3" />
      </div>
      <div>
        <label>Price</label>
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='price' type="text" value={targetObject.price} className="w-full p-2 outline-none border border-gray-700 my-3" />
      </div>
      <div className='flex items-center justify-center w-full'>
      <button style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}  type="submit" className="btn px-6 bg-blue-500 hover:bg-[#FFD335] text-white p-2 mt-4">
        Purchase
      </button>
      </div>
    </form>
  );
};

export default BookingForm;