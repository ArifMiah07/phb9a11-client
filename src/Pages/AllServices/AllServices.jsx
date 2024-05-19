
import  { useState, useEffect } from 'react';
import AllServicesCard from './AllServicesCard';
import MixHeader from '../../Components/MixHeader/MixHeader';
import { Helmet } from 'react-helmet-async';

const AllServices = () => {
    
      const [data, setData] = useState([]);
      const text = 'All Services'
    
      useEffect(() => {

        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setData(data);
        })
        .catch(error => {
          console.log(error)
        })
      }, []);
      // if (error) return <p>Error: {error}</p>;
    
      return (
        <div className="w-full">
          <Helmet>
                <title>All Services</title>
          </Helmet>
          <MixHeader text={text} ></MixHeader>
          <div className="p-4 ">
            {
                 data.map((cData, i) => <AllServicesCard key={i} cData={cData}></AllServicesCard>)
            }
          </div>
        </div>
      );
    };

export default AllServices;