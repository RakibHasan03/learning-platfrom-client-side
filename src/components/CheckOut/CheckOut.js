import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../UserContext/AuthProvider';

const CheckOut = () => {
    const data = useLoaderData();
    console.log(data)
    const { name, image_url, price } = data
    const { user } = useContext(AuthContext)
    const priceInt = parseInt(price)
    const tax = parseInt(priceInt * 0.1);
    const total = parseInt(tax + priceInt);

    return (
        <div className='w-11/12 mx-auto'>
            <div className="grid md:grid-cols-2 grid-cols-1 bg-indigo-200 rounded-lg mt-10">
                <div className='flex justify-center'>
                    <div>
                        <div className="flex flex-col items max-w-lg p-6 space-y-6 overflow-hidden rounded-lg bg-indigo-200 dark:text-gray-800">
                            <div className="flex space-x-4">
                                <img alt="" src={user?.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                                <div className="flex flex-col  space-y-1">

                                    <p className='mt-3'>{user?.displayName}</p>
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
                    <section className=" bg-indigo-200 dark:text-gray-800">
                        <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  bg-indigo-200">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium">Personal Information </p>
                                    <p className="text-xs"> Please fill up the form for check out successfully</p>
                                </div>
                                <div className="grid grid-cols-1 gap-4 col-span-full lg:col-span-3">
                                
                                    <div>
                                        <label for="address" className="text-sm">Address</label>
                                        <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-2">
                                        <label for="city" className="text-sm">City</label>
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-2">
                                        <label for="state" className="text-sm">State / Province</label>
                                        <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                    </div>
                                    <div className="col-span-full sm:col-span-2">
                                        <label for="zip" className="text-sm">ZIP / Postal</label>
                                        <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                                    </div>
                                </div>
                            </fieldset>
                          
                        </form>
                    </section>
                   
                </div>
                    

                </div>
            
        </div>
    );
};

export default CheckOut;