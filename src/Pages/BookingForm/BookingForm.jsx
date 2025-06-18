import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';


const BookingForm = ({loaderData, heading1, sl, targetObject}) => {


  const { user} = useContext(AuthContext);

  const [provider, setProvider ] = useState([]);
  
  
  //get provider data from db
    useEffect( ()=>{
      fetch('https://smart-kidz-server-liard.vercel.app/serviceProviderInfo')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProvider(data);
      })
      .catch(error => {
        console.log(error);
      })
    } , [])

        console.log(provider);

        // const provider = provider.find(u => {
        //   if(u?.email === user?.email){
        //     console.log(u?.email);
        //     return u?.email;
        //   }
        //   console.log(u);
        // })

        // console.log(provider);


//submit
  const handleSubmit = (e) => {

    e.preventDefault();
    

    const from = e.target;
    const serviceId = sl; 
    const serviceName = heading1; 
    const serviceImg = targetObject.imgLink;
    const providerEmail = provider.email; 
    const providerName = provider.name; 
    const userEmail = from.userEmail.value; 
    const userName = user.displayName; 
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
    fetch('https://smart-kidz-server-liard.vercel.app/bookings',{
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(data =>{
          // console.log(data);
          if(data.insertedId){
            toast.success('service book successfully!')
            from.reset();
          }
        })
        .catch(error =>{
          toast.error('fail to book service!',error)
          console.log(error)
        })
        // console.log(bookingInfo);
      };
      
  
  

  return (
    <form onSubmit={handleSubmit} className="relative  p-4 inter">
      
      <div>
        <label>Service ID {provider.length} </label>
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
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='providerEmail' value={provider?.email} readOnly type="email" className="w-full p-2  outline-none border border-gray-700 my-3" />
      </div>
      <div>
        <label>Provider Name</label>
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='providerName' value={provider?.name} readOnly type="text" className="w-full p-2  outline-none border border-gray-700 my-3" />
      </div>
      <div>
        <label>Current User Email</label>
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='userEmail' type="email" value={user?.email} readOnly className="w-full p-2  outline-none border border-gray-700 my-3" />
      </div>
      <div>
        <label>Current User Name</label>
        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} required  name='userName'  type="text" value={user? user.displayName : 'user name not found. plz write ur name'} className="w-full p-2  outline-none border border-gray-700 my-3" />
      </div>
      <div className='absolute top-0'>
      <ToastContainer></ToastContainer>
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