import { useEffect, useState } from "react";


const useAddedServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/add-services')
        .then(res => res.json())
        .then(data => {
            // //console.log(data);
            setServices(data);
        })
    }, [])
    return services;
};

export default useAddedServices;