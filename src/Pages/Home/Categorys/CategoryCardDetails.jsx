import { useLoaderData, useParams } from "react-router-dom";
import CategoryCardDetailsPost from "./CategoryCardDetailsPost";
import SubBanner from "../../../Components/SubBanner/SubBanner";
import Nav from "../../Shared/NavBar/Nav";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';



const CategoryCardDetails = () => {
    const categoryData = useLoaderData();
    const {id} = useParams();


    const data = categoryData.find(d => d._id === id);

    const {content} = data;
    console.log( content);

    console.log('asmalt heke ifd:',id, categoryData);
    return (
        <div>
            <div className="hidden md:block lg:block">
                <div className=" bg-purple-500 text-white flex justify-between items-center p-2">
                    {/* Contact Info */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <FaEnvelope className="h-5 w-5" />
                            <span>info@Smartkidz.com</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaPhone className="h-5 w-5" />
                            <span>+61 012 012 445</span>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-300">
                            <FaFacebookF className="h-5 w-5" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <FaInstagram className="h-5 w-5" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <FaLinkedinIn className="h-5 w-5" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <FaPinterestP className="h-5 w-5" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <FaYoutube className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <Nav></Nav>
            </div>
            <div className="relative">
                <SubBanner></SubBanner>
            <h1 className="absolute w-full h-full text-white top-0 bg-gradient-to-r from-[#151515bf] to-[rgba(21, 21, 21, 0.00) 100%)]  ] ">
                <p>{data._id}</p>
                this is category card details!
                <p>{data.serial}</p>
            </h1>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-8">
                {
                    content.map((c, i )=> <CategoryCardDetailsPost key={i} c={c}></CategoryCardDetailsPost>)
                }
            </div>
        </div>
    );
};

export default CategoryCardDetails;