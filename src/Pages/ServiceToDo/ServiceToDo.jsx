import { Helmet } from "react-helmet-async";
import ServiceToDoRow from "./ServiceToDoRow";
import { useEffect, useState } from "react";
import '../../Styles/Fonts/GoogleFonts.css'
import MixHeader from "../../Components/MixHeader/MixHeader";


const ServiceToDo = () => {


     const [bookedServices, setProvider ] = useState([]);
//     const {user} = useAuth()
//   console.log(user);
  
  //get provider data from db
    useEffect( () =>{
      fetch('http://localhost:5000/bookings')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProvider(data);
      })
      .catch(error => {
        console.log(error);
      })
    } , [])

        console.log(bookedServices);

        // const p = provider.find(u => {
        //   if(u.email === user?.email){
        //     console.log(u.email);
        //     return u.email;
        //   }
        //   console.log(u);
        // })

        // console.log(p);

    const text = ['Services To Do', '']

    return (
        <div>
            <Helmet>
                <title>Service To Do</title>
            </Helmet>
            <div>
                 <MixHeader text={text}></MixHeader>
             </div>
             <h1>total booking: {bookedServices?.length}</h1>
            <div>
                <div className="overflow-x-auto p-4">
                    <table className="table table-xs nunito">
                        <thead>
                        <tr>
                            <th>product image</th> 
                            <th>user name</th> 
                            <th>product name</th> 
                            <th>service Id</th>
                            <th>date</th> 
                            <th>price</th>
                            <th>status</th>
                        </tr>
                        </thead> 
                        <tbody className="">
                            {
                                bookedServices?.map((bs, i) => <ServiceToDoRow key={i} bs={bs}></ServiceToDoRow>)
                            }
                        </tbody> 
                        <tfoot>
                        <tr>
                            <th>product image</th> 
                            <th>user name</th> 
                            <th>product name</th> 
                            <th>service Id</th>
                            <th>date</th> 
                            <th>price</th>
                            <th>status</th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceToDo;






// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import '../../Styles/Fonts/GoogleFonts.css'
// import BookedServiceRow from "./BookedServiceRow";
// import MixHeader from "../../Components/MixHeader/MixHeader";
// // import useAuth from "../../Hooks/useAuth";


// const BookedServices = () => {

   
//     const text= ['Booked Services',''];

//     return (
//         <div>
//             <Helmet>
//                 <title>Booked Services</title>
//             </Helmet>

//            
           
//         </div>
//     );
// };

// export default BookedServices;