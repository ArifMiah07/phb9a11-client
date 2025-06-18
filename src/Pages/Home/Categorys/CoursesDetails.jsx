import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedinIn, FaPhone, FaPinterest, FaYoutube } from "react-icons/fa";
import Nav from "../../Shared/NavBar/Nav";
import SubBanner from "../../../Components/SubBanner/SubBanner";
import CourseOverview from "./CourseOverview";
import MixHeader from "../../../Components/MixHeader/MixHeader";
import { Helmet } from "react-helmet-async";
// import ClassOverview from "../FindClasses/ClassOverview";

// 

const CoursesDetails = ({heading1, sl, loaderData}) => {

    console.log(heading1, sl, loaderData);


    const nText = [heading1, sl]
    return (
        <div className="w-full">
            <Helmet>
                <title>Course Details</title>
            </Helmet>
            <MixHeader text={nText}></MixHeader>
            <div className="my-12">
                <CourseOverview heading1={heading1} sl={sl} loaderData={loaderData}></CourseOverview>
            </div>
        </div>
    );
};

export default CoursesDetails;