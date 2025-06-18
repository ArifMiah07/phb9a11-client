
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
import Events from '../UpcomingEvents/Events';
import Testimonials from '../Testimonials/Testimonials';
import BlogAndNews from '../BlogAndNews/BlogAndNews';


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
            <ExpertTeachers></ ExpertTeachers>
            <Events></Events>
            <Testimonials></Testimonials>
            <BlogAndNews></BlogAndNews>
        </div>
    );
};

export default Home;