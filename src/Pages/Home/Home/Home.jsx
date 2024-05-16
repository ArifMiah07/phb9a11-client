
import './home.css'
import '../../../Styles/Fonts/GoogleFonts.css'
import Banner from '../Banner/Banner';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../About/AboutUs';
import FindClasses from '../FindClasses/FindClasses';
import FindCourses from '../FindCourses/FindCourses';
import Category from '../Categorys/Category';
import PopularClasses from '../PopularClasses/PopularClasses';
import ExpertTeachers from '../ExpertTeachers/ExpertTeachers';


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
            <PopularClasses></PopularClasses>
            < ExpertTeachers></ ExpertTeachers>
        </div>
    );
};

export default Home;