

import  { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Contexts/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import AddServicesRow from "./AddServicesRow";
import EditServiceModal from "../../Components/EditServiceModal/EditServiceModal";
import MixHeader from "../../Components/MixHeader/MixHeader";
// import EditServiceModal from "./EditServiceModal";

const ManageService = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [editBooking, setEditBooking] = useState(null);
    const axiosSecure = useAxiosSecure();
    const url = `/add-services?email=${user?.email}`;

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setBookings(res.data))
            .catch(error => console.error(error));
    }, [url, axiosSecure]);

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete?')) {
            axiosSecure.delete(`/add-services/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        alert('Deleted successfully!');
                        setBookings(prev => prev.filter(booking => booking._id !== id));
                    }
                })
                .catch(error => console.error(error));
        }
    };

    const handleBookingConfirm = (id) => {
        axiosSecure.patch(`/add-services/${id}`, { status: 'confirm' })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setBookings(prev => prev.map(booking => 
                        booking._id === id ? { ...booking, status: 'confirm' } : booking
                    ));
                }
            })
            .catch(error => console.error(error));
    };

    const handleEdit = (booking) => {
        setEditBooking(booking);
        document.getElementById('editServiceModal').showModal();
    };

    const handleSave = (updatedBooking) => {
        axiosSecure.patch(`/add-services/${updatedBooking._id}`, updatedBooking)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setBookings(prev => prev.map(booking => 
                        booking._id === updatedBooking._id ? updatedBooking : booking
                    ));
                    setEditBooking(null);
                    document.getElementById('editServiceModal').close();
                }
            })
            .catch(error => console.error(error));
    };

    const text =["Manage Your Service", ``]
    return (
        <div>
            <Helmet>
                <title>Manage Services</title>
            </Helmet>
            <div>
                <MixHeader text={text}></MixHeader>
            </div>
            <div className="overflow-x-auto">
                <h1>Total bookings: {bookings.length}</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Images</th>
                            <th>Services</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <AddServicesRow 
                                key={booking._id} 
                                booking={booking} 
                                handleDelete={handleDelete} 
                                handleBookingConfirm={handleBookingConfirm}
                                handleEdit={handleEdit}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            {editBooking && (
                <EditServiceModal 
                    booking={editBooking} 
                    onSave={handleSave} 
                    onClose={() => {
                        setEditBooking(null);
                        document.getElementById('editServiceModal').close();
                    }} 
                />
            )}
        </div>
    );
};

export default ManageService;
