import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const teachers = [
  { id: 1, name: 'Eleanor Alice', image: 'https://html.themewant.com/studykids/assets/images/instructor/02.jpg' },
  { id: 2, name: 'Isabella Jane', image: 'https://html.themewant.com/studykids/assets/images/instructor/01.jpg' },
  { id: 3, name: 'Catherine Avery', image: 'https://html.themewant.com/studykids/assets/images/instructor/03.jpg' },
];

const TeacherCard = ({ name, image, id }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
    <div className='w-full flex flex-col gap-12'>
      <div className={`w-full aboutBorder flex items-center justify-center`}>
        <img className='w-full h-full' src={image} alt={name} />
      </div>
      <div className={`aboutBorder p-2 flex flex-col items-center justify-center  text-black hover:bg-yellow-400`}>
        <Link to={`/`}>
          <h2 className="mt-4 text-3xl font-semibold">{name}</h2>
        </Link>
        <div className="flex space-x-3 mt-3">
          <FaFacebookF className="text-gray-500 hover:text-blue-600" />
          <FaInstagram className="text-gray-500 hover:text-pink-600" />
          <FaLinkedinIn className="text-gray-500 hover:text-blue-700" />
          <FaMediumM className="text-gray-500 hover:text-green-600" />
        </div>
      </div>
    </div>
  </div>
);

const ExpertTeachers = () => (
  <div className='border border-red-400 w-full flex flex-col justify-between gap-6 p-6'>
    <div className='border border-red-400 flex flex-col md:flex md:flex-col lg:flex lg:flex-col'>
      <div className='text-center'>
        <h1 className='font-semibold mt-6 text-[20px] inter flex items-center justify-center'>
          <span>
            <img src="https://html.themewant.com/studykids/assets/images/banner/title-img.svg" alt="" />
          </span>
          Teacher
        </h1>
        <h1 className='nunito text-[48px] my-5 font-extrabold'>Our Expert Teacher</h1>
        <p className='inter text-[rgb(115_116_119)] mb-6'>
        we take pride in our team of dedicated and expert <br /> teachers who play a pivotal role in shaping.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} {...teacher} />
        ))}
      </div>
    </div>
  </div>
);

export default ExpertTeachers;
