import ContactNav from '../ContactNav/ContactNav';
import Nav from '../../Pages/Shared/NavBar/Nav';
import SubBanner from '../SubBanner/SubBanner';
import PropTypes from 'prop-types'; 
import SearchBar from '../SearchBar/SearchBar';

const MixHeader = ({text}) => {
    // console.log(text);

    const [h1, sl] = text;
    // console.log(h1, sl);
    return (
        <div className="w-full">
                <ContactNav></ContactNav>
                <Nav></Nav>
                <div className="relative">
                    <SubBanner></SubBanner>
                    <div className="absolute flex items-center w-full h-full text-white top-0 bg-gradient-to-r from-[#151515bf] to-[rgba(21, 21, 21, 0.00) 100%)]  ] ">
                    <div className="flex flex-col gap-2  font-bold ml-12">
                        <h1 className='text-4xl nunito'>{h1}</h1>
                        <p className='inter'>{sl}</p>    
                    </div>
                    </div>
                </div>
                <div>
                    <SearchBar></SearchBar>
                </div>
            </div>
    );
};

export default MixHeader;

MixHeader.propTypes = {
    text: PropTypes.array 
}