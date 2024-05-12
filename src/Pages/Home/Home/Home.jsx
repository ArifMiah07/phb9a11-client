import bg_grid from '../../../assets/images/bg-grid.png'
import banner_bg from '../../../assets/images/banner-bg-1.png'
import banner_img from '../../../assets/images/banner-img.png'
import NavBar from '../../Shared/NavBar/NavBar';
import './home.css'

const Home = () => {
    return (
        <div className='bg-[#914de1] h-fit  '>
            <div className="w-full relative ">
                <img src={bg_grid} alt="" />
                <img className='absolute w-full z-20 bottom-0' src={banner_bg} alt="" />
                <img className='absolute w-[472px] z-10 bottom-0 right-0' src={banner_img} alt="" />
                <div className='absolute top-1/2 left-0'>
                    <h1 className='text-[58px] '>Discover the Magic of <br />
                        Learning at Studykids
                    </h1>
                </div>
                <div className="w-full top-10 z-50 fixed">
                    <NavBar></NavBar>
                </div>
            </div>
            {/* <h1 className="star-wars-text text-7xl bg-red-500">this is home</h1> */}
        </div>
    );
};

export default Home;