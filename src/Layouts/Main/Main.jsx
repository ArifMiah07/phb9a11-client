import { Outlet } from "react-router-dom";
// import NavBar from "../../Pages/Shared/NavBar/NavBar";
import Footer from "../../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="w-full h-[1111px]">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;