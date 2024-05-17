import '../../../Styles/Fonts/GoogleFonts.css'
import brain_icon from '../../../assets/brain-icon-flat.png'


const Footer = () => {
  return (
    <footer className="bg-pink-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Don’t Miss Awesome Story From Our Alumni</h2>
          <div className="bg-white flex justify-between aboutBorder rounded-[85px] px-3 py-4">
            <input
              type="email"
              placeholder="Enter Your mail"
              className="w-full max-w-md px-4 py-2 text-gray-700 bg-white rounded-l-lg focus:outline-none"
                />
              <div className="w-fit ">
                <button className="w-fit glow-effect admissionNow bg-yellow-400 text-gray-700 px-4 py-2 rounded-3xl hover:bg-yellow-500">
                  Subscribe Now
                </button>
              </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left text-gray-700">
          <div className="mb-6 md:mb-0 inter font-medium">
          <div className="flex items-center my-6">
              <div className='flex'><span className='flex'><img className='w-8 h-8' src={brain_icon} alt="" /> <img className='w-2 h-2' src="https://ouch-cdn2.icons8.com/U0_RVUErdJV8HehKVPesHa6AesS-qD5rQI44pClMtH4/rs:fit:249:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjA4/L2YzMDNjZTQyLWZl/ODktNDNhZi04ZjY4/LTJjNzUwMTQyNjg1/OC5zdmc.png" alt="" /></span></div> <span className="flex gap-0 text-2xl font-bold"> <span className='text-[#09A24F]  '>Smart</span><span className='text-[#7763E5]  '> Kidz</span></span>
           </div>
            <p>We are passionate education dedicated to providing high-quality resources learners all backgrounds.</p>
            <p className="mt-4">
              <span className="block"><i className="fas fa-map-marker-alt"></i> Yarra Park, Melbourne, Australia</span>
              <span className="block"><i className="fas fa-phone"></i> +(61) 485-826-710</span>
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="font-extrabold mb-4 text-[20px] nunito ">About Us</h4>
            <ul className='font-medium inter'>
              <li><a href="#about" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#teachers" className="hover:text-gray-900">Teachers</a></li>
              <li><a href="#teachers-info" className="hover:text-gray-900">Teachers Info</a></li>
              <li><a href="#event" className="hover:text-gray-900">Event</a></li>
              <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h4 className="font-extrabold mb-4 text-[20px] nunito ">Our Course</h4>
            <ul className='font-medium inter'>
              <li><a href="#courses" className="hover:text-gray-900">Courses</a></li>
              <li><a href="#blog" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#program" className="hover:text-gray-900">Program</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold mb-4 text-[20px] nunito ">Recent Post</h4>
            <div className="flex items-start mb-4 font-medium inter ">
              <img src="https://html.themewant.com/studykids/assets/images/blog/blog-07.jpg" alt="Post Image" className="w-16 h-16 rounded mr-4" />
              <div>
                <span className="block text-gray-500 text-sm">October 29, 2023</span>
                <a href="#post1" className="hover:text-gray-900">Avoid These 4 Common When Managing Remote Teams</a>
              </div>
            </div>
            <div className="flex items-start">
              <img src="https://html.themewant.com/studykids/assets/images/blog/blog-08.jpg" alt="Post Image" className="w-16 h-16 rounded mr-4" />
              <div>
                <span className="block text-gray-500 text-sm">October 29, 2023</span>
                <a href="#post2" className="hover:text-gray-900">How To Draw Realistic In 7 Simple Steps</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
//    <a href="https://ai3.netlify.app/" target="_blank" >author</a>