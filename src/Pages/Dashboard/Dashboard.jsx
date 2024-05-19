import { Helmet } from "react-helmet-async";
import AddService from "../AddService/AddService";


const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Add Services</title>
            </Helmet>
            <AddService></AddService>
        </div>
    );
};

export default Dashboard;