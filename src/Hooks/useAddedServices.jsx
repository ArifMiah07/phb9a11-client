import { useEffect, useState } from "react";


const useAddedServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://smart-kidz-server-liard.vercel.app/add-services')
        .then(res => res.json())
        .then(data => {
            // //console.log(data);
            setServices(data);
        })
    }, [])
    return services;
};

export default useAddedServices;