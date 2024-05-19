import { IoBarChartSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { TbCertificate } from "react-icons/tb";
import BookingForm from "../../BookingForm/BookingForm";
// import AddService from "../../AddService/AddService";

const CourseCard = ({loaderData, heading1, sl}) => {

// console.log(loaderData);
  
const evenNumbers = loaderData.filter(num =>{
  if(heading1 === num.heading1){
    // console.log(num);
    return num;
  }
  // console.log(num);
});
// console.log(evenNumbers);

const p = evenNumbers.filter(d => {
  // console.log(d)
  return d;
})
console.log(p[0].content);
const pa = p[0].content;
// console.log(pa)


// console.log(heading1, sl, loaderData);

const content = pa;

// Parse the sl prop to an integer
const intSl = parseInt(sl, 10);

// console.log('sl:', sl, 'intSl:', intSl);

// Find the target object
const targetObject = content.find(obj => obj.sl === intSl);

// Log the target object to the console for debugging
console.log('targetObject:', targetObject);

// Return a component that renders the found object or a message if not found











  return (
    <div style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} className="w-full px-6 py-12 mx-auto my-8">
      <div className="text-4xl font-bold flex items-center gap-6">{targetObject.price}
        <div className="bg-yellow-400 text-xl text-black font-bold px-2 py-1 rounded inline-block mt-2">100%</div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn w-full mt-5" onClick={()=>document.getElementById('my_modal_4').showModal()}><span style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} className="bg-yellow-400 text-black font-bold py-2 px-4 rounded mt-4 w-full">Book Now</span></button>
        <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">Hello!</h3>
            <div>
              {/* <AddService></AddService>
               */}
               <BookingForm  targetObject={targetObject} heading1={heading1} sl={sl} loaderData={loaderData}></BookingForm>
            </div>
            <p className="py-4">Click the button below to close</p>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
      {/* <span style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} className="bg-yellow-400 text-black font-bold py-2 px-4 rounded mt-4 w-full">Book Now</span> */}
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


  // const content = [
  //   {
  //     sl: 1,
  //     imgLink: "https://html.themewant.com/studykids/assets/images/course/04.jpg",
  //     heading1: "Little Adventurers Travel the World Together! (Ages 7-9)",
  //     ages: "Ages 3-8",
  //     time: "50 Min",
  //     rating: "4.5 (124)",
  //     teacher: "Maria Sofa",
  //     imgT: "https://html.themewant.com/studykids/assets/images/course/author-01.png",
  //     price: "$15.00"
  //   },
  //   {
  //     sl: 2,
  //     imgLink: "https://html.themewant.com/studykids/assets/images/course/05.jpg",
  //     heading1: "Creative Writing Workshop for Kids",
  //     ages: "Ages 8-12",
  //     time: "60 Min",
  //     rating: "4.8 (102)",
  //     teacher: "John Doe",
  //     imgT: "https://html.themewant.com/studykids/assets/images/course/author-02.png",
  //     price: "$20.00"
  //   },
  //   {
  //     sl: 3,
  //     imgLink: "https://html.themewant.com/studykids/assets/images/course/06.jpg",
  //     heading1: "Dragon, Monster & Magical Creature Drawing Club",
  //     ages: "Ages 3-8",
  //     time: "50 Min",
  //     rating: "4.5 (88)",
  //     teacher: "Rosabell",
  //     imgT: "https://html.themewant.com/studykids/assets/images/course/author-03.png",
  //     price: "$16.00"
  //   },
  //   {
  //     sl: 4,
  //     imgLink: "https://html.themewant.com/studykids/assets/images/course/07.jpg",
  //     heading1: "Interactive Science Experiments",
  //     ages: "Ages 5-10",
  //     time: "45 Min",
  //     rating: "4.7 (90)",
  //     teacher: "Alice Smith",
  //     imgT: "https://html.themewant.com/studykids/assets/images/course/author-04.png",
  //     price: "$18.00"
  //   },
  //   {
  //     sl: 6,
  //     imgLink: "https://html.themewant.com/studykids/assets/images/course/09.jpg",
  //     heading1: "Math Club for Young Minds",
  //     ages: "Ages 6-9",
  //     time: "40 Min",
  //     rating: "4.6 (78)",
  //     teacher: "Evan James",
  //     imgT: "https://html.themewant.com/studykids/assets/images/course/author-06.png",
  //     price: "$22.00"
  //   },
  //   {
  //     sl: 8,
  //     imgLink: "https://html.themewant.com/studykids/assets/images/course/11.jpg",
  //     heading1: "Learn To Read With Teacher Tracy - Individual Beginner",
  //     ages: "Ages 7-9",
  //     time: "50 Min",
  //     rating: "4.5 (44)",
  //     teacher: "Morgan Jofs",
  //     imgT: "https://html.themewant.com/studykids/assets/images/course/author-04.png",
  //     price: "$35.00"
  //   }
  // ];

  // // Parse the sl prop to an integer
  // const intSl = parseInt(sl, 10);

  // // Log the parsed sl to the console for debugging
  // console.log('sl:', sl, 'intSl:', intSl);

  // // Find the target object
  // const targetObject = content.find(obj => obj.sl === intSl);

  // // Log the target object to the console for debugging
  // console.log('targetObject:', targetObject);

  // // Return a component that renders the found object or a message if not found