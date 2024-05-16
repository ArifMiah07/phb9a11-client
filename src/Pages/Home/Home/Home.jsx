
import './home.css'
import '../../../Styles/Fonts/GoogleFonts.css'
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../About/AboutUs';
import FindClasses from '../FindClasses/FindClasses';
import FindCourses from '../FindCourses/FindCourses';
import Category from '../Categorys/Category';


const Home = () => {
    return (
        <div className=' '>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <FindClasses></FindClasses>
            <FindCourses></FindCourses>
            <Category></Category>
        </div>
    );
};

export default Home;