import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { FaDownload, FaStar, FaStarHalfAlt, FaShieldAlt } from 'react-icons/fa';

const DetailsPage = () => {
    window.scrollTo(0, 0);

    const details = useLoaderData();
    // console.log(details)
    const { name, image_url, sub_title, created,  price, rating, description, completed, id } = details
    const { des_title, content, Requirements, learning_point } = description


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'course-details',
        
    })
    
    return (
        <div className="grid  grid-cols-1 lg:grid-cols-6 w-11/12 mx-auto my-10  dark:bg-indigo-200 rounded-md pb-1" ref={componentRef}>

            <div className="col-span-4 lg:p-8 p-4">
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-xl font-semibold'>{ name}</h2>
                    </div>
                    <div>
                        <button onClick={handlePrint} className='p-4'><FaDownload className='text-2xl hover:text-blue-700'/></button>
                    </div>
                </div>
                <h4 className='text-md font-semibold'>{sub_title}</h4>

                <div className='flex-shrink md:flex justify-between mt-3 items-center'>
                    <div className='flex'>
                        <p>Created By: <span className='text-blue-700'>{created}</span></p>
                    </div>
                    <div className='flex'>
                        <p className='flex'>
                            <FaStar  className='text-yellow-500'/> <FaStar className='text-yellow-500' /> <FaStarHalfAlt className='text-yellow-500'/>

                        </p>
                        <p className='pl-4 text-blue-600'>
                            { rating}
                        </p>

                    </div>
                    <div>
                        <p>Students: <span className='text-blue-600'>{`(${completed})`}</span> </p>
                    </div>
                    <div>
                        <h3 className='text-lg '>
                            Price:  <span className='text-blue-600 font-semibold'>${ price}</span> 
                        </h3>
                    </div>
                </div>
                <div className='mt-2'>
                    <Link to={`/checkout/${id}`}>
                        <button className="bg-blue-800 hover:bg-purple-700 text-white  py-2  px-10 rounded-2xl  flex items-center justify-between ">Get Premium Access<FaShieldAlt className='ml-2' /> </button>
                    </Link>
                </div>
                <div className='mt-3'>
                    <h3 className='text-lg font-semibold'>Requirements:</h3>
                    <ul className='pl-4'>
                        {
                            Requirements.map((req, index) => <li
                                key={index}
                                className=' list-disc'
                            >
                                {req}
                            </li>)
                        }
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mt-2'>Description:</h3>
                    <p className='text-sm font-semibold'>{des_title}</p>
                    <p className='mt-3'> 
                        {content} ......
                    </p>
                </div>

              
            </div>
            <div className="col-span-2">
                <div className="flex flex-col max-w-lg p-3 space-y-6 overflow-hidden rounded-lg shadow-xl dark:bg-indigo-200 dark:text-gray-800 md:min-h-screen">
                    <div>
                        <img src={ image_url} alt="" className="object-cover w-full mb-4 h-52 sm:h-52 dark:bg-gray-500" />
                        <h4 className="text-lg dark:text-gray-800 font-semibold">Course Outline:</h4>
                        <ul className='pl-5'>
                            {
                                learning_point.map((point, index) => <li
                                    key={index}
                                    className=' list-disc'
                                >
                                    {point}
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className="flex flex-wrap justify-between">
                       
                        
                    </div>
                </div>


                </div>

            </div>
        
    );
};

export default DetailsPage;