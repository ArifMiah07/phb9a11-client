
import './home.css'
import '../../../Styles/Fonts/GoogleFonts.css'
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../About/AboutUs';


const Home = () => {
    return (
        <div className=' '>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;