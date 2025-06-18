import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const dashboardOptions = [
  { value: '/add-service', label: 'Add Service' },
  { value: '/manage-service', label: 'Manage Service' },
  { value: '/booked-services', label: 'Booked Services' },
  { value: '/service-to-do', label: 'Service To-Do' },
];

const DashboardDropdown = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption) {
      navigate(selectedOption);
    }
  };

  return (
    <div className="flex items-center p-2">
      {user && (
        <>
          <select
            id="dashboard"
            className="bg-gray-700"
            onChange={handleSelectChange}
          >
            <option value="" disabled selected>
              Dashboard
            </option>
            {dashboardOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button onClick={logout} className="text-white">
            Logout
          </button>
          {user.image ? (
            <img src={user.image} alt={user.name} className="rounded-full" />
          ) : (
            <span className="text-white">{user.name}</span>
          )}
        </>
      )}
    </div>
  );
};

export default DashboardDropdown;
