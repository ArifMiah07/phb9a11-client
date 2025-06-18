import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Tooltip } from 'react-tooltip'

const EditServiceModal = ({ booking, onSave, onClose }) => {

    //manage service

    const {user} = useContext(AuthContext);
    const [formData, setFormData] = useState({ ...booking });





    useEffect(() => {
        setFormData({ ...booking });
    }, [booking]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };
//
    return (
        <dialog id="editServiceModal" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Edit Service</h3>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">Service Name</label>
                        <input 
                            type="text" 
                            name="service_name" 
                            value={formData.service_name} 
                            onChange={handleChange} 
                            className="input input-bordered" 
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">Price</label>
                        <input 
                            type="number" 
                            name="price" 
                            value={formData.price} 
                            onChange={handleChange} 
                            className="input input-bordered" 
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">Description</label>
                        <textarea 
                            name="description" 
                            value={formData.description} 
                            onChange={handleChange} 
                            className="textarea textarea-bordered" 
                        />
                    </div>
                    <div className="modal-action">
                        <button  type="submit" className="tooltip btn btn-primary" data-tip="click to save edit! wait, it will take few sec." > Save </button>
                        <button type="button" onClick={onClose} className="btn">Close</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default EditServiceModal;


{/* <form onSubmit={handleSubmit} className="p-4 inter">
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
                        <img src={} alt="" />
                        </div>
                    </div>
                    <div>
                        <label>Provider Email</label>
                        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='providerEmail' value={user?.email} type="email" className="w-full p-2  outline-none border border-gray-700 my-3" />
                    </div>
                    <div>
                        <label>Provider Name</label>
                        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='providerName' value={user?.displayName} readOnly type="text" className="w-full p-2  outline-none border border-gray-700 my-3" />
                    </div>
                    <div>
                        <label>Current User Email</label>
                        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='userEmail' type="email" value={user?.email} readOnly className="w-full p-2  outline-none border border-gray-700 my-3" />
                    </div>
                    <div>
                        <label>Current User Name</label>
                        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} required  name='userName' readOnly type="text" value={user ? user.displayName : 'user name not found. plz write ur name'} className="w-full p-2  outline-none border border-gray-700 my-3" />
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
                        <input style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}   name='price' type="text" value={'$'+ ''} className="w-full p-2 outline-none border border-gray-700 my-3" />
                    </div>
                    <div className='flex items-center justify-center w-full'>
                    <button style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}  type="submit" className="btn px-6 bg-blue-500 hover:bg-[#FFD335] text-white p-2 mt-4">
                        Purchase
                    </button>
                    </div>
                    </form> */}