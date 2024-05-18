import { IoBarChartSharp } from "react-icons/io5";

import { IoMdTime } from "react-icons/io";

import { IoShieldCheckmarkOutline } from "react-icons/io5";

import { GrUpdate } from "react-icons/gr";

import { TbCertificate } from "react-icons/tb";

const CourseCard = () => {
  return (
    <div style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} className="w-full px-6 py-12 mx-auto my-8">
      <div className="text-4xl font-bold flex items-center gap-6">$39.99
        <div className="bg-yellow-400 text-xl text-black font-bold px-2 py-1 rounded inline-block mt-2">100%</div>
      </div>
      <button style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} className="bg-yellow-400 text-black font-bold py-2 px-4 rounded mt-4 w-full">Add To Cart</button>
      <div className="text-sm text-gray-600 mt-4">30-Day Money-Back Guarantee</div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">This course includes:</h2>
        <ul>
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-4  mr-2"><IoBarChartSharp /> Levels </span>
            <span>Beginner</span>
          </li>
          <li className="flex items-center mt-2 justify-between">
            <span className="flex items-center gap-4  mr-2"><IoMdTime /> Duration </span>
            <span>6 hours 56 minutes</span>
          </li>
          <li className="flex items-center mt-2 justify-between">
            <span className="flex items-center gap-4  mr-2"><IoShieldCheckmarkOutline /> Subject </span>
            <span>Web Development</span>
          </li>
          <li className="flex items-center mt-2 justify-between">
            <span className="flex items-center gap-4  mr-2"><GrUpdate /> Update </span>
            <span>29 October, 2023 Last Update</span>
          </li>
          <li className="flex items-center mt-2 justify-between">
            <span className="flex items-center gap-4  mr-2"><TbCertificate /> Certificate </span>
            <span>Certificate of completion</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseCard;
