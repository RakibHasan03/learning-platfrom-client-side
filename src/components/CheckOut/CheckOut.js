import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../UserContext/AuthProvider';

const CheckOut = () => {
    const data = useLoaderData();
    console.log(data)
    const { name, image_url, author_img, created, price } = data
    const { user } = useContext(AuthContext)
    const priceInt = parseInt(price);
    const tax = parseFloat(priceInt * 0.1).toFixed(2);
    const total = parseFloat(priceInt + (parseFloat(tax))).toFixed(2);

    return (
        <div className='w-11/12 mx-auto'>
            <div className="grid md:grid-cols-2 grid-cols-1 bg-indigo-300 rounded-lg mt-10 py-5" data-aos="fade-left" data-aos-duration='1500'>
                <div className='flex justify-center'>
                    <div>
                        <div className="flex flex-col items max-w-lg p-6 space-y-6 overflow-hidden rounded-lg bg-indigo-300 dark:text-gray-800">
                            <div className="flex space-x-4">
                                <img alt="" src={author_img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                <div className="flex flex-col  space-y-1">

                                    <p className='mt-3'> Author: <span className='text-blue-800 text-md'>{created}</span></p>
                                </div>
                            </div>
                            <div>
                                <img src={image_url} alt="" className="object-cover w-full mb-4 h-60  rounded-lg border-none dark:bg-gray-500" />
                                <h2 className="mb-1 text-xl">{name}</h2>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='mx-auto'>
                    <section className=" bg-indigo-300 dark:text-gray-800 md:w-11/12 mx-auto">
                        <div noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  bg-indigo-300">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium">Personal Information </p>
                                    <p className="text-xs"> Please fill up the form for check out successfully</p>
                                </div>
                                <div className="grid grid-cols-1 gap-4 col-span-full lg:col-span-3">
                                
                                    <div>
                                        <label htmlFor="address" className="text-sm">Name</label>
                                        <input id="address" type="text"
                                            defaultValue={user?.displayName}
                                            readOnly
                                            placeholder="" className="w-full 
                                         focus:outline-none
                                          dark:text-gray-900 text-center py-1 rounded-md" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="city" className="text-sm">Email</label>
                                        <input id="city" type="text"
                                            defaultValue={user?.email ? user.email : 'System did not find your email'}
                                            readOnly
                                            placeholder="" className="w-full 
                                         focus:outline-none
                                          dark:text-gray-900 text-center py-1 rounded-md" />
                                    </div>
                                    <div className="col-span-full">

                                        <div className='flex justify-between'>
                                            <p className='mt-1'>
                                                Course Price:
                                            </p>
                                            <p className='text-lg text-blue-800 mt-1'>
                                                ${price}
                                            </p>
                                       </div>
                                        <div className='flex justify-between'>
                                            <p className='mt-1'>
                                                Tax:
                                            </p>
                                            <p className='text-lg text-blue-800 mt-1'>
                                                ${tax}
                                            </p>
                                        </div>
                                        <hr className='border-1' />
                                        
                                        <div className='flex justify-between'>
                                            <p className='mt-1'>
                                                Total:
                                            </p>
                                            <p className='text-lg text-blue-800 mt-1'>
                                                ${total}
                                            </p>
                                        </div>
                                      
                                    </div>
                                    <div className="col-span-full mt-8">
                                        
                                        <div className='flex justify-center'>
                                            <Link to='/con'>
                                                <button className='w-56
                                      bg-indigo-600 text-center py-2 text-white rounded-md hover:bg-blue-800'>
                                                    Check Out
                                                </button>
                                            </Link>
                                       </div>
                                    </div>
                                   
                                   
                                </div>
                            </fieldset>
                          
                        </div>
                    </section>
                   
                </div>
                    

                </div>
            
        </div>
    );
};

export default CheckOut;