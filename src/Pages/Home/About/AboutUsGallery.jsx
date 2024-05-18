

const AboutUsGallery = () => {


    const gallery = [
        {id : 1, imgLink: "https://html.themewant.com/studykids/assets/images/course/12.jpg"},
        {id : 2, imgLink: "https://html.themewant.com/studykids/assets/images/course/13.jpg"},
        {id : 3, imgLink: "https://html.themewant.com/studykids/assets/images/course/14.jpg"},
        {id : 4, imgLink: "https://html.themewant.com/studykids/assets/images/course/15.jpg"},
        {id : 5, imgLink: "https://html.themewant.com/studykids/assets/images/course/16.jpg"},
        {id : 6, imgLink: "https://html.themewant.com/studykids/assets/images/course/17.jpg"},
    ]
    return (
        <div className=' border border-red-400 w-full flex flex-col justify-between gap-6 p-6'>
            <div className=' border border-red-400 flex flex-col md:flex md:flex-col lg:flex lg:flex-col'>
                <div className='text-center'>
                    <h1 className='font-semibold mt-6 text-[20px] inter flex items-center justify-center'><span><img src="https://html.themewant.com/studykids/assets/images/banner/title-img.svg" alt="" /></span>Gallery</h1>
                    <h1 className='nunito text-[48px] my-5 font-extrabold  '>Tiny Scholars Showcase</h1>
                    <p className='inter text-[rgb(115_116_119)] mb-6 '>Marked by significant growth and exploration <br />as toddlers transition from infancy</p>
                </div>
                <div className='border border-red-500 w-full h-full  p-3 grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {
                        gallery.map((data, idx) => <div className="w-full h-full " style={{boxShadow : "01px 0px 02px 03px rgb(0, 0, 0)"}} key={idx} data={data}>
                            <img src={data.imgLink} alt="" />
                        </div>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default AboutUsGallery;