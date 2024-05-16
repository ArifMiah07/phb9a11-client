
import './home.css'
import '../../../Styles/Fonts/GoogleFonts.css'
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../About/AboutUs';
import FindClasses from '../FindClasses/FindClasses';


const Home = () => {
    return (
        <div className=' '>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <FindClasses></FindClasses>
        </div>
    );
};

export default Home;