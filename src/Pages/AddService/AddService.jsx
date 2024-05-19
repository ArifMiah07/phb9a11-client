import { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Nav from "../Shared/NavBar/Nav";
import SubBanner from "../../Components/SubBanner/SubBanner";
import ContactNav from "../../Components/ContactNav/ContactNav";
import { Helmet } from "react-helmet-async";

const AddService = () => {

    // const service = useLoaderData();

    const {user} = useContext(AuthContext);

    //console.log(service);
    // const {title, _id, price, img} = service;


    const handleOrderNow = (e)=>{
        e.preventDefault();

        const form = e.target;
        const service_name = form.service_name.value;
        const email = user?.email;
        const date = form.date.value;
        const price = form.price.value;
        const description = form.description.value;
        const imageUrl = form.imageUrl.value;
        const area = form.area.value;
        const providerEmail = user?.email;
        const providerImage = user?.photoURL;
        const providerName = user?.displayName;


        const bookOrderData ={
            service_name,
            email, 
            date, 
            price,
            description,
            imageUrl,
            area,
            providerEmail,
            providerImage,
            providerName
        }

        console.log(bookOrderData);

        fetch('http://localhost:5000/add-service',{
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bookOrderData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('service book successfully!')
                // form.reset();
            }
        })
        .catch(error =>{
            console.log(error)
        })

    }


    return (
        <div className="card shrink-0 w-full shadow-2xl bg-[#F3F3F3] ">
            <Helmet>
                <title>Add Services</title>
            </Helmet>
            <div className="w-full">
                <ContactNav></ContactNav>
                <Nav></Nav>
                <div className="relative">
                    <SubBanner></SubBanner>
                    <div className="absolute flex items-center w-full h-full text-white top-0 bg-gradient-to-r from-[#151515bf] to-[rgba(21, 21, 21, 0.00) 100%)]  ] ">
                    {/* <p>{data._id}</p> */}
                    <h1 className=" text-4xl font-bold ml-12">Add Service!</h1>
                    {/* <p>{data.serial}</p> */}
                    </div>
                </div>
            </div>
            <h2 className="text-center text-3xl font-bold">Check Out: {''}</h2>
            <form onSubmit={handleOrderNow} className="card-body">
                <div className="grid md:grid lg:grid lg:grid-cols-2 gap-8">
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" defaultValue={user?.displayName} type="text" placeholder="First Name" className="input input-bordered" required />
                    </div> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input name="imageUrl" type="text" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input name="date" type="Date" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input name="service_name" type="text" placeholder="Service name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  name="email" type="email" defaultValue={user?.email} placeholder="Your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name="price" type="text" defaultValue={'$'+ ''}  placeholder="Your Amount" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Area</span>
                        </label>
                        <input name="area" type="text" defaultValue={''}  placeholder="Service Area" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    {/* <input  type="email" placeholder="Your email" className="input input-bordered" required /> */}
                    <textarea className="p-6" cols="30" rows="10" type="text" placeholder="Your Massage"   name="description" id=""></textarea>
                </div>
                
                <div className="form-control mt-6">
                    {/* <button>Login</button> */}
                    <input  className="btn text-white text-[20px] font-semibold bg-[#FF3811]" type="submit" value={'Add'} />
                </div>
            </form>
        </div>
    );
};

export default AddService;



