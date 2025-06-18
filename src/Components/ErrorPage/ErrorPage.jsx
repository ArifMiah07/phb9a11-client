import { Link } from 'react-router-dom';
import errorPage from '../../assets/images/errorPage/errorPage.gif'
const ErrorPage = () => {
    return (
        <div className='w-full'>
            <div  className='w-full'>
                <img  className='relative w-full' src={errorPage} alt="" />
                <Link to={'/'}> <p className='flex items-center justify-center p-6 absolute top-0 left-6 rounded-b-[200px] rounded-t-[200px] rounded-r-[50px] rounded-l-[50px] lg:w-[200px] lg:h-[200px] drop-shadow-2xl shadow-2xl shadow-[#2C3965]  border-2 border-double border-blue-600 bg-[#00C4F4] text-[#FEFEFE] '>Back to Home</p> </Link>
            </div>
        </div>
    );
};

export default ErrorPage;