import '../../../Styles/Fonts/GoogleFonts.css';

const ClassOverview = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-5 md:flex md:flex-col lg:flex lg:flex-row mx-auto p-4">
         <div className="w-full flex flex-col flex-wrap  bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="w-full">
            <img 
                src="https://html.themewant.com/studykids/assets/images/about/about-05.jpg" 
                alt="Children playing" 
                className="w-full h-full object-cover"
            />
            </div>
        
            <div className='w-full p-4'>
            {/* Class Overview Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold">Class Overview</h2>
                    <p className="mt-4 text-gray-700">
                    If filmmaking is your passion but you never went to film school you’ve come to the right place. Here, you will get hands-on experience and acquire skills that you never would've elsewhere like learning how to make feature films on your own, making do with any equipment, and doing it all faster and better.
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
        </div>
        {/* Details Section */}
        <div style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}}  className="w-full md:w-1/2 p-12">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-3xl font-bold">Toddler</h2>
              <p className="text-gray-600 my-4">If filmmaking is your passion but you never went to film school you’ve come to the right place.</p>
              
              <div className="flex flex-col gap-12">
                <div className="flex justify-between border-b">
                  <span className="font-bold pb-12  border-gray-600 ">Age</span>
                  
                  <span className="text-gray-600">3-6</span>
                </div>
                <div className="flex justify-between border-b">
                  <span className="font-bold pb-12  border-gray-600 ">Class Size</span>
                  <span className="text-gray-600">30 Students</span>
                </div>
                <div className="flex justify-between border-b">
                  <span className="font-bold pb-12  border-gray-600 ">Time</span>
                  <span className="text-gray-600">9:00-12:00</span>
                </div>
                <div className="flex justify-between border-b">
                  <span className="font-bold pb-12  border-gray-600 ">Pricing</span>
                  <span className="text-green-600">Full Day $60.00</span>
                </div>
              </div>
            </div>
            
            <button style={{boxShadow: "01px 1px 02px 02px rgb(0, 0, 0)"}} className="drop-shadow-md shadow-xl bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-4">
              Add To Cart
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default ClassOverview;
