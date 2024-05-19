import React from 'react';

const Obj = ({ sl }) => {
  const content = [
    {
      sl: 1,
      imgLink: "https://html.themewant.com/studykids/assets/images/course/04.jpg",
      heading1: "Little Adventurers Travel the World Together! (Ages 7-9)",
      ages: "Ages 3-8",
      time: "50 Min",
      rating: "4.5 (124)",
      teacher: "Maria Sofa",
      imgT: "https://html.themewant.com/studykids/assets/images/course/author-01.png",
      price: "$15.00"
    },
    {
      sl: 2,
      imgLink: "https://html.themewant.com/studykids/assets/images/course/05.jpg",
      heading1: "Creative Writing Workshop for Kids",
      ages: "Ages 8-12",
      time: "60 Min",
      rating: "4.8 (102)",
      teacher: "John Doe",
      imgT: "https://html.themewant.com/studykids/assets/images/course/author-02.png",
      price: "$20.00"
    },
    {
      sl: 3,
      imgLink: "https://html.themewant.com/studykids/assets/images/course/06.jpg",
      heading1: "Dragon, Monster & Magical Creature Drawing Club",
      ages: "Ages 3-8",
      time: "50 Min",
      rating: "4.5 (88)",
      teacher: "Rosabell",
      imgT: "https://html.themewant.com/studykids/assets/images/course/author-03.png",
      price: "$16.00"
    },
    {
      sl: 4,
      imgLink: "https://html.themewant.com/studykids/assets/images/course/07.jpg",
      heading1: "Interactive Science Experiments",
      ages: "Ages 5-10",
      time: "45 Min",
      rating: "4.7 (90)",
      teacher: "Alice Smith",
      imgT: "https://html.themewant.com/studykids/assets/images/course/author-04.png",
      price: "$18.00"
    },
    {
      sl: 6,
      imgLink: "https://html.themewant.com/studykids/assets/images/course/09.jpg",
      heading1: "Math Club for Young Minds",
      ages: "Ages 6-9",
      time: "40 Min",
      rating: "4.6 (78)",
      teacher: "Evan James",
      imgT: "https://html.themewant.com/studykids/assets/images/course/author-06.png",
      price: "$22.00"
    },
    {
      sl: 8,
      imgLink: "https://html.themewant.com/studykids/assets/images/course/11.jpg",
      heading1: "Learn To Read With Teacher Tracy - Individual Beginner",
      ages: "Ages 7-9",
      time: "50 Min",
      rating: "4.5 (44)",
      teacher: "Morgan Jofs",
      imgT: "https://html.themewant.com/studykids/assets/images/course/author-04.png",
      price: "$35.00"
    }
  ];

  // Parse the sl prop to an integer
  const intSl = parseInt(sl, 10);

  // Log the parsed sl to the console for debugging
  console.log('sl:', sl, 'intSl:', intSl);

  // Find the target object
  const targetObject = content.find(obj => obj.sl === intSl);

  // Log the target object to the console for debugging
  console.log('targetObject:', targetObject);

  // Return a component that renders the found object or a message if not found
  return (
    <div>
      {targetObject ? (
        <div>
          <h1>{targetObject.heading1}</h1>
          <p>{targetObject.ages}</p>
          <p>{targetObject.time}</p>
          <p>{targetObject.rating}</p>
          <p>{targetObject.teacher}</p>
          <img src={targetObject.imgLink} alt={targetObject.heading1} />
          <p>{targetObject.price}</p>
        </div>
      ) : (
        <h1>No course found with sl: {intSl}</h1>
      )}
    </div>
  );
};

export default Obj;
