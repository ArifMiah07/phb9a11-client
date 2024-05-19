import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';

const BookingForm = ({ service, provider, onClose }) => {
  const { user } = useContext(AuthContext);
  const [serviceDate, setServiceDate] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bookingInfo = {
      serviceId: service.id,
      serviceName: service.name,
      serviceImage: service.image,
      providerEmail: provider.email,
      providerName: provider.name,
      price: service.price,
      userEmail: user.email,
      userName: user.name,
      serviceDate,
      instructions,
      status: 'pending',
    };

    try {
      const response = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingInfo),
      });

      if (response.ok) {
        alert('Booking successful!');
        onClose();
      } else {
        alert('Booking failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while booking.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label>Service ID</label>
        <input type="text" value={service.id} readOnly className="w-full p-2" />
      </div>
      <div>
        <label>Service Name</label>
        <input type="text" value={service.name} readOnly className="w-full p-2" />
      </div>
      <div>
        <label>Service Image</label>
        <img src={service.image} alt={service.name} className="w-full p-2" />
      </div>
      <div>
        <label>Provider Email</label>
        <input type="email" value={provider.email} readOnly className="w-full p-2" />
      </div>
      <div>
        <label>Provider Name</label>
        <input type="text" value={provider.name} readOnly className="w-full p-2" />
      </div>
      <div>
        <label>Current User Email</label>
        <input type="email" value={user.email} readOnly className="w-full p-2" />
      </div>
      <div>
        <label>Current User Name</label>
        <input type="text" value={user.name} readOnly className="w-full p-2" />
      </div>
      <div>
        <label>Service Taking Date</label>
        <input
          type="date"
          value={serviceDate}
          onChange={(e) => setServiceDate(e.target.value)}
          className="w-full p-2"
          required
        />
      </div>
      <div>
        <label>Special Instruction</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-2"
        ></textarea>
      </div>
      <div>
        <label>Price</label>
        <input type="text" value={service.price} readOnly className="w-full p-2" />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
        Purchase
      </button>
    </form>
  );
};

export default BookingForm;
