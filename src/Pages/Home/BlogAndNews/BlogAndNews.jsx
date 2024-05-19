

const BlogAndNews = () => {

    /** 
     * Welcome to Studykids blog
A quick directory of Studykids most popular blogs on parenting,
homeschooling, curriculum, supplementing your kids


How to spark passion-led, interest-based creativity.

28 December


24k View


Ways to Create A Montessori Home Environment

28 December


24k View




28 December


24k View


How to spark passion-led, interest-based creativity.

28 December


24k View


Ways to Create A Montessori Home Environment

28 December


24k View


Outschool mom helped her son discover his superpower.

28 December


24k View


How to spark passion-led, interest-based creativity.

28 December


24k View


Ways to Create A Montessori Home Environment

28 December


24k View
    */

    
    return (
        <div className='mt-12 w-full flex flex-col justify-between gap-6 p-6'>
            <div className='text-center'>
                <h1 className='font-semibold mt-6 text-[20px] inter flex items-center justify-center'><span><img src="https://html.themewant.com/studykids/assets/images/banner/title-img.svg" alt="" /></span> Blog & News</h1>
                <h1 className='nunito text-[48px] my-5 font-extrabold  '>Welcome to SmartKidz blog</h1>
                <p className='inter text-[rgb(115_116_119)] mb-6 '>A quick directory of Studykids most popular blogs on parenting, <br /> homeschooling, curriculum, supplementing your kids</p>
            </div>
            <div className='gap-12 flex flex-col md:flex md:flex-row lg:flex lg:flex-row'>
                <div className='bg-[#FF6D1C] rounded-lg text-white p-6  flex flex-col gap-6' style={{boxShadow: '01px 2px 03px 04px rgb(0, 0, 0)'}} >
                    <div className="rounded-lg" style={{boxShadow: '01px 2px 03px 04px rgb(0, 0, 0)'}} >
                        <img src="https://html.themewant.com/studykids/assets/images/blog/blog-01.jpg" alt="" />
                    </div>
                    <h1 className="nunito font-extrabold text-center ">Outschool mom helped her son discover his superpower.</h1>
                    <div className="flex gap-6 inter items-center justify-center">
                        <p className="flex gap-2 items-center justify-center"><span><img src="https://html.themewant.com/studykids/assets/images/icon/14.svg" alt="" /></span> 28 December </p>
                        <p className="flex gap-2 items-center justify-center"><span><img src="https://html.themewant.com/studykids/assets/images/icon/15.svg" alt="" /></span>24K view</p>
                    </div>
                </div>
                <div className='bg-[#7763E5] rounded-lg text-white p-6  flex flex-col gap-6' style={{boxShadow: '01px 2px 03px 04px rgb(0, 0, 0)'}} >
                    <div className="rounded-lg" style={{boxShadow: '01px 2px 03px 04px rgb(0, 0, 0)'}} >
                        <img src="https://html.themewant.com/studykids/assets/images/blog/blog-02.jpg" alt="" />
                    </div>
                    <h1 className="nunito font-extrabold text-center ">Outschool mom helped her son discover his superpower.</h1>
                    <div className="flex gap-6 inter items-center justify-center">
                        <p className="flex gap-2 items-center justify-center"><span><img src="https://html.themewant.com/studykids/assets/images/icon/14.svg" alt="" /></span> 28 December </p>
                        <p className="flex gap-2 items-center justify-center"><span><img src="https://html.themewant.com/studykids/assets/images/icon/15.svg" alt="" /></span>24K view</p>
                    </div>
                </div>
                <div className='bg-[#09A24F] rounded-lg text-white p-6  flex flex-col gap-6' style={{boxShadow: '01px 2px 03px 04px rgb(0, 0, 0)'}} >
                    <div className="rounded-lg" style={{boxShadow: '01px 2px 03px 04px rgb(0, 0, 0)'}} >
                        <img src="https://html.themewant.com/studykids/assets/images/blog/blog-03.jpg" alt="" />
                    </div>
                    <h1 className="nunito font-extrabold text-center ">Outschool mom helped her son discover his superpower.</h1>
                    <div className="flex gap-6 inter items-center justify-center">
                        <p className="flex gap-2 items-center justify-center"><span><img src="https://html.themewant.com/studykids/assets/images/icon/14.svg" alt="" /></span> 28 December </p>
                        <p className="flex gap-2 items-center justify-center"><span><img src="https://html.themewant.com/studykids/assets/images/icon/15.svg" alt="" /></span>24K view</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BlogAndNews;