import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import '../../Styles/Fonts/GoogleFonts.css'
import BookedServiceRow from "./BookedServiceRow";
import MixHeader from "../../Components/MixHeader/MixHeader";
// import useAuth from "../../Hooks/useAuth";


const BookedServices = () => {

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
    const text= ['Booked Services',''];

    return (
        <div>
            <Helmet>
                <title>Booked Services</title>
            </Helmet>

            <div>
                <MixHeader text={text}></MixHeader>
            </div>
            <h1>total booking: {bookedServices?.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs nunito">
                        <thead>
                        <tr>
                            <th>service id: </th> 
                            <th>product image</th> 
                            <th>user name</th> 
                            <th>instructions</th> 
                            <th>product name</th> 
                            <th>service Id</th>
                            <th>date</th> 
                            <th>price</th>
                            <th>status</th>
                        </tr>
                        </thead> 
                        <tbody>
                            {
                                bookedServices?.map((bs, i) => <BookedServiceRow key={i} bs={bs}></BookedServiceRow>)
                            }
                        </tbody> 
                        <tfoot>
                        <tr>
                            <th>service id: </th> 
                            <th>product image</th> 
                            <th>user name</th> 
                            <th>instructions</th> 
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

export default BookedServices;