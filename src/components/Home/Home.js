import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'
import reader from '../../Images/90189-coding.json'


const Home = () => {
    window.scrollTo(0 , 0);

   
    return (
        <div>
            <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0" data-aos="fade-left" data-aos-duration='2000'>
                <div className="flex flex-col items-start w-11/12 md:w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                    <div className="mb-16 lg:my-20 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                    Be Learn,, Be Skilled
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Learning programming on
                                <br className="hidden md:block" />
                                
                                <h2 className="inline-block text-deep-purple-accent-400 mt-2">
                                   Our Academy
                                </h2>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Just the thought of learning to code can be very intimidating. The word code is mysterious by definition. It implies a technical form of communication that computers, and not humans, are meant to understand.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <Link
                                to='/courses'
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white hover:bg-violet-800  bg-indigo-600 transition duration-200 rounded-md shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-700 focus:shadow-outline focus:outline-none"
                            >
                               Our Courses
                            </Link>
                           
                        </div>
                    </div>
                </div>
                <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <Lottie animationData={reader} loop={true} className="object-cover w-full h-56 rounded lg:rounded-none lg:shadow-none sm:h-96 lg:h-full" />
                   
                </div>
            </div>
        </div>
    );
};

export default Home;