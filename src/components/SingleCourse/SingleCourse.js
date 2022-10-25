import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    console.log(course)
    const { name, image_url, price, completed, rating, id } =course
    return (
        <div className=''>
            <div className="w-10/12 h-[23rem] mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 my-3">
                
                <div>
                    <img className="p-4 rounded-lg h-44 w-full" src={image_url} alt="" />
                    </div>
                
                <div className="px-5 pb-5">
                    
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                  
                    <div className="flex items-center mt-2.5 mb-5">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">${price }</span>
                        <Link to={`/course/${id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;