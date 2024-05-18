import Nav from "../../Shared/NavBar/Nav";
import ExpertTeachers from "../ExpertTeachers/ExpertTeachers";
import Testimonials from "../Testimonials/Testimonials";
import AboutUs from "./AboutUs";
import AboutUsBanner from "./AboutUsBanner";
import AboutUsGallery from "./AboutUsGallery";


const About = () => {
    return (
        <div>
            <Nav></Nav>
            <AboutUs></AboutUs>
            <AboutUsBanner></AboutUsBanner>
            <ExpertTeachers></ExpertTeachers>
            <AboutUsGallery></AboutUsGallery>
            <div>
                <Testimonials></Testimonials>
                <div className="bg-[#7763E5] p-12 flex justify-evenly items-center text-white">
                    <div className="border-2 py-6 px-5">
                        <h1 className="text-4xl font-black nunito">
                        15+
                        </h1>
                        <p>Expert Teacher</p>
                    </div>
                    <div className="border-2 py-6 px-5">
                        <h1 className="text-4xl font-black nunito">
                            244+
                        </h1>
                        <p>Completed Courses</p>
                    </div>
                    <div className="border-2 py-6 px-5">
                        <h1 className="text-4xl font-black nunito">
                            455+
                        </h1>
                        <p>Students Learner</p>
                    </div>
                    <div className="border-2 py-6 px-5">
                        <h1 className="text-4xl font-black nunito">
                            241+
                        </h1>
                        <p>Students Enrolled</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;