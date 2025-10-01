import React, { useState } from 'react';


const Jobs = () => {
    const [jobCount, setjobCount] = useState(3);
    return (
        <div >
            {/*  ----------------------  Top job picks for you ----------------------    */}

            <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                <div>
                    <h4 className="font-bold "> Top job picks for you</h4>
                    <span>
                        Based on your profile, preferences, and activity like applies, searches, and saves
                    </span>
                </div>
                {[...Array(jobCount)].map((_, index) => (
                    <>
                        <div className="flex iteem-center justify-between hover:bg-gray-100 p-2  rounded-lg" key={index} >
                            <div className='flex cursor-pointer '>
                                <div className='circular-image'>
                                    <img className='w-full h-full object-cover' src='./images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg' alt='' />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg text-blue-600 font-bold m-0">
                                        Front-End React.js / Next.js Developer{" "}
                                        <i className="fa-solid fa-angle-down"></i>
                                    </h3>
                                    <p className="font-bold m-0 ">Tocaan · Egypt (Remote)</p>
                                    <p className="font-sm m-0 text-gray-600">
                                        Egypt · 1 month ago · Over 100 applicants
                                    </p>
                                    <div className="flex items-center  gap-2 text-sm  ">
                                        <i class="fa-solid fa-circle-check text-blue-600 text-xl "></i>
                                        <p className="font-sm m-0 text-gray-600">Actively reviewing applicants</p>
                                    </div>

                                    <div className="flex items-center text-sm text-gray-600">
                                        <i className="fa-brands fa-linkedin mr-3 text-blue-600 text-2xl"></i>
                                        <p className="m-0">Viewed</p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <i class="fa-solid fa-xmark cursor-pointer"></i>
                            </div>

                        </div>
                        <hr className="border-gray-500 my-2" />
                    </>
                ))}
                <div className='flex item-center justify-center max-auto hover:bg-gray-100 p-2  rounded-lg'>
                    <p className='font-bold text-lg px-2'> Show all </p>
                    <spa> <i class="fa-solid fa-arrow-right"></i> </spa>
                </div>
            </div>

            {/*  ----------------------  Recent job searches  ----------------------   */}

            <div className='bg-white rounded-xl shadow-md p-4 mb-4 '>
                <div className='flex iteem-center justify-between '>
                    <h1 className="text-xl font-semibold mb-3 "> Recent job searches</h1>
                    <span> Clear </span>
                </div>
                <div>
                    <p className="font-bold m-0"> frontend developer . <span className="text-blue-500"> 29 new  </span> </p>
                    <span className="text-gray-600"> Alert On · Sharkia, Egypt · On-site · Remote · Hybrid </span>
                </div>

            </div>

            {/*  ---------------------- Explore with job collections ----------------------    */}

            <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                <div>
                    <h4 className="font-bold "> Explore with job collections</h4>
                </div>
                <div className='flex justify-around mb-2'>
                    <div className="flex items-center gap-2  hover:bg-gray-100 p-2  rounded-lg ">
                        <span className="w-5 h-5 flex items-center justify-center px-4">
                            <i class="fa-solid fa-calendar-check text-blue-600 text-3xl "></i>
                        </span>
                        <p className="font-bold m-0 text-lg">Easy Apply</p>
                    </div>
                    <div className="flex items-center gap-2  hover:bg-gray-100 p-2  rounded-lg">
                        <span className="w-5 h-5 flex items-center justify-center px-4">
                            <i class="fa-solid fa-house-laptop text-blue-600 text-3xl"></i>
                        </span>
                        <p className="font-bold m-0 text-lg">Remote </p>
                    </div>
                    <div className="flex items-center gap-2  hover:bg-gray-100 p-2  rounded-lg">
                        <span className="w-5 h-5 flex items-center justify-center px-4">
                            <i class="fa-solid fa-hourglass-start text-blue-600 text-3xl  "></i>
                        </span>
                        <p className="font-bold m-0 text-lg">Part-time </p>
                    </div>
                    <div className="flex items-center gap-2  hover:bg-gray-100 p-2  rounded-lg">
                        <span className="w-5 h-5 flex items-center justify-center px-4">
                            <i class="fa-solid fa-angles-right text-blue-600 text-3xl "></i>
                        </span>
                        <p className="font-bold m-0 text-lg">More</p>
                    </div>
                </div>

                {[...Array(jobCount)].map((_, index) => (
                    <>
                        <div className="flex iteem-center justify-between hover:bg-gray-100 p-2  rounded-lg" key={index} >
                            <div className='flex cursor-pointer '>
                                <div className='circular-image'>
                                    <img className='w-full h-full object-cover' src='./images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg' alt='' />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg text-blue-600 font-bold m-0">
                                        Front-End React.js / Next.js Developer{" "}
                                        <i className="fa-solid fa-angle-down"></i>
                                    </h3>
                                    <p className="font-bold m-0 ">Tocaan · Egypt (Remote)</p>
                                    <p className="font-sm m-0 text-gray-600">
                                        Egypt · 1 month ago · Over 100 applicants
                                    </p>
                                    <div className="flex items-center  gap-2 text-sm  ">
                                        <i class="fa-solid fa-circle-check text-blue-600 text-xl "></i>
                                        <p className="font-sm m-0 text-gray-600">Actively reviewing applicants</p>
                                    </div>

                                    <div className="flex items-center text-sm text-gray-600">
                                        <i className="fa-brands fa-linkedin mr-3 text-blue-600 text-2xl"></i>
                                        <p className="m-0">Viewed</p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <i class="fa-solid fa-xmark cursor-pointer"></i>
                            </div>

                        </div>
                        <hr className="border-gray-500 my-2" />
                    </>
                ))}
                <div>
                    <div className='flex item-center justify-center max-auto hover:bg-gray-100 p-2  rounded-lg'>
                        <p className='font-bold text-lg px-2'> Show all </p>
                        <spa> <i class="fa-solid fa-arrow-right"></i> </spa>
                    </div>
                </div>
            </div>


            <div className="bg-white rounded-xl shadow-md p-4 mb-4">
                <div>
                    <h4 className="font-bold "> Hiring in your network </h4>
                    <span>
                        Jobs that people in your network are hiring for
                    </span>
                </div>
                {[...Array(jobCount)].map((_, index) => (
                    <>
                        <div className="flex iteem-center justify-between hover:bg-gray-100 p-2  rounded-lg" key={index} >
                            <div className='flex cursor-pointer '>
                                <div className='circular-image'>
                                    <img className='w-full h-full object-cover' src='./images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg' alt='' />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-lg text-blue-600 font-bold m-0">
                                       Backend Engineer (EdTech Startup) {" "}
                                        <i className="fa-solid fa-angle-down"></i>
                                    </h3>
                                    <p className="font-bold m-0 ">Darsel · Egypt (Remote)</p>
                                    <p className="font-sm m-0 text-gray-600">
                                        Egypt · 3 months ago · Over 100 people clicked apply Promoted by hirer 
                                    </p>
                                    <div className="flex items-center  gap-2 text-sm  ">
                                        <i class="fa-solid fa-circle-check text-blue-600 text-xl "></i>
                                        <p className="font-sm m-0 text-gray-600">Actively reviewing applicants</p>
                                    </div>

                                    <div className="flex items-center text-sm text-gray-600">
                                        <i className="fa-brands fa-linkedin mr-3 text-blue-600 text-2xl"></i>
                                        <p className="m-0">Viewed</p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <i class="fa-solid fa-xmark cursor-pointer"></i>
                            </div>

                        </div>
                        <hr className="border-gray-500 my-2" />
                    </>
                ))}
                <div className='flex item-center justify-center max-auto hover:bg-gray-100 p-2  rounded-lg'>
                    <p className='font-bold text-lg px-2'> Show all </p>
                    <spa> <i class="fa-solid fa-arrow-right"></i> </spa>
                </div>
            </div>

        </div>
    )
}
export default Jobs;