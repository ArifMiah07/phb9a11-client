import '../../../Styles/Fonts/GoogleFonts.css';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import ProfileCard from './ProfileCard';
import CourseInfo from './CourseInfo';
import CourseCard from './CourseCard';



const CourseOverview = ({loaderData, heading1, sl}) => {

    const bs = {
        boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"
    }
  return (
    <div className="container flex flex-col justify-center gap-5 md:flex md:flex-col lg:flex lg:flex-row mx-auto p-4">
         <div className="w-full flex flex-col flex-wrap  bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="w-full">
                <img 
                    src="https://html.themewant.com/studykids/assets/images/about/about-05.jpg" 
                    alt="Children playing" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='my-12 p-2 flex gap-12 '>
                <button style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} className='py-4 px-8 bg-[#FFD335] hover:bg-transparent'>
                    Course Info
                </button>
                <button style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} className='py-4 px-8 bg-transparent hover:bg-[#FFD335] '>
                    Review
                </button>
            </div>
            <div className='w-full p-4'>
            {/* Class Overview Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold">Class Overview</h2>
                    <p className="mt-4 text-gray-700">
                    If filmmaking is your passion but you never went to film school you’ve come to the right place. Here, you will get hands-on experience and acquire skills that you never would have elsewhere like learning how to make feature films on your own, making do with any equipment, and doing it all faster and better.
                    </p>
                </div>
                
                {/* Description Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold">Description</h2>
                    <p className="mt-4 text-gray-700">
                    You will be taught the full process of filmmaking starting from planning, filming, and editing. Not only that but you will learn how to make films that look way more expensive than they are without spending a whole lot of time or money on them. In this course, we’ll focus on a few different forms of films from video ads, to movie trailers to travel vlogs, you name it.
                    </p>
                    <p className="mt-4 text-gray-700">
                    With this course, you also have access to a whole lot of resources not only for reference but also free media like aerial video shots, background music, fonts, and more. These all come with proper licensing so you can use them in your production worry free.
                    </p>
                </div>
            </div>

            <div className='m-6 inter p-6' style={bs} >
                <div>
                    <h1 className='text-[20px] font-bold '>What Will You Learn?</h1>
                </div>
                <ul className='grid grid-cols-2 gap-4 py-4'>
                    <li>✔ Learn the basics of computer programming</li>
                    <li>✔ Differences between ads, trailers, vlogs, etc</li>
                    <li>✔ Learn JavaScript</li>
                    <li>✔ Learn CSS</li>
                    <li>✔ Tools you need for best results</li>
                </ul>
            </div>
            <div>
                <h1  className='text-[20px] font-bold p-6'>Course Content</h1>
                <div className=''>
                    <div className="join join-vertical w-full p-5">
                        <div  style={bs} className="collapse collapse-arrow join-item mb-8 border border-base-300">
                            <input type="radio" name="my-accordion-4" /> 
                            <div className="collapse-title text-lG font-medium">
                                <h1>Introduction</h1>
                                <p>3 lectures . 9(min) </p>
                            </div>
                            <div className="collapse-content flex flex-col"> 
                                <div className='flex items-center justify-between'>
                                    <span><FaPlayCircle /></span><p>Introduction to course</p><span>preview</span><span>9 min</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span><FaPlayCircle /></span><p>Introduction to course</p><span>preview</span><span>9 min</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span><FaPlayCircle /></span><p>Introduction to course</p><span>preview</span><span><MdOutlineShoppingBag /></span>
                                </div>
                            </div>
                        </div>
                        <div  style={bs} className="collapse collapse-arrow join-item mb-8 border border-base-300">
                            <input type="radio" name="my-accordion-4" /> 
                            <div className="collapse-title text-lG font-medium">
                                <h1>Learn to Storyboard</h1>
                                <p>7 Lectures . 120 min</p>
                            </div>
                            <div className="collapse-content flex flex-col"> 
                                <div className='flex items-center justify-between'>
                                    <span><FaPlayCircle /><p>Become a storyboard artist</p></span><span><MdOutlineShoppingBag /></span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span><FaPlayCircle /><p>Introduction PHP</p></span><span><MdOutlineShoppingBag /></span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='flex flex-row justify-center items-center gap-6'><FaPlayCircle /><span>LEarning Fundamental Elements</span></span><span><MdOutlineShoppingBag /></span>
                                </div>
                            </div>
                        </div>
                        <div  style={bs} className="collapse collapse-arrow join-item mb-8 border border-base-300">
                            <input type="radio" name="my-accordion-4" /> 
                            <div className="collapse-title text-lG font-medium">
                                <h1>How to draw characters, layouts, and scenes</h1>
                                <p>7 Lectures . 83 min</p>
                            </div>
                            <div className="collapse-content flex flex-col"> 
                                <div className='flex items-center justify-between'>
                                    <span><FaPlayCircle /><p>Become a storyboard artist</p></span><span><MdOutlineShoppingBag /></span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span><FaPlayCircle /><p>Introduction PHP</p></span><span><MdOutlineShoppingBag /></span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='flex flex-row justify-center items-center gap-6'><FaPlayCircle /><span>LEarning Fundamental Elements</span></span><span><MdOutlineShoppingBag /></span>
                                </div>
                            </div>
                        </div>
                        <div  style={bs} className="collapse collapse-arrow join-item mb-8 border border-base-300">
                            <input type="radio" name="my-accordion-4" /> 
                            <div className="collapse-title text-lG font-medium">
                                <h1>1-point and 2-point perspective</h1>
                                <p>7 Lectures . 72 min</p>
                            </div>
                            <div className="collapse-content flex flex-col"> 
                                <div className='flex items-center justify-between'>
                                    <span><FaPlayCircle /><p>Become a storyboard artist</p></span><span><MdOutlineShoppingBag /></span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span><FaPlayCircle /><p>Introduction PHP</p></span><span><MdOutlineShoppingBag /></span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='flex flex-row justify-center items-center gap-6'><FaPlayCircle /><span>LEarning Fundamental Elements</span></span><span><MdOutlineShoppingBag /></span>
                                </div>
                            </div>
                        </div>
                        <div  style={bs} className="collapse collapse-arrow join-item mb-8 border border-base-300">
                            <input type="radio" name="my-accordion-4" /> 
                            <div className="collapse-title text-lG font-medium">
                                <h1>Digital drawing application</h1>
                                <p>7 Lectures . 90 min</p>
                            </div>
                            <div className="collapse-content flex flex-col"> 
                                <div className='flex items-center justify-between'>
                                    <span><FaPlayCircle /><p>Become a storyboard artist</p></span><span><MdOutlineShoppingBag /></span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span><FaPlayCircle /><p>Introduction PHP</p></span><span><MdOutlineShoppingBag /></span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <span className='flex flex-row justify-center items-center gap-6'><FaPlayCircle /><span>LEarning Fundamental Elements</span></span><span><MdOutlineShoppingBag /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-6'>
                <ProfileCard></ProfileCard>
            </div>
        </div>
        {/* Details Section */}
        <div className="w-full h- md:w-1/2 p-6">
          <div>
            <CourseCard heading1={heading1} sl={sl} loaderData={loaderData}></CourseCard>
          </div>
          <div>
            <CourseInfo></CourseInfo>
          </div>
        </div>
      
    </div>
  );
};

export default CourseOverview;
