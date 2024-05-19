import ContactNav from '../ContactNav/ContactNav';
import Nav from '../../Pages/Shared/NavBar/Nav';
import SubBanner from '../SubBanner/SubBanner';

const MixHeader = ({text}) => {
    return (
        <div className="w-full">
                <ContactNav></ContactNav>
                <Nav></Nav>
                <div className="relative">
                    <SubBanner></SubBanner>
                    <div className="absolute flex items-center w-full h-full text-white top-0 bg-gradient-to-r from-[#151515bf] to-[rgba(21, 21, 21, 0.00) 100%)]  ] ">
                    {/* <p>{data._id}</p> */}
                    <h1 className=" text-4xl font-bold ml-12">{text}</h1>
                    {/* <p>{data.serial}</p> */}
                    </div>
                </div>
            </div>
    );
};

export default MixHeader;