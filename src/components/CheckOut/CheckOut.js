import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../UserContext/AuthProvider';

const CheckOut = () => {
    const data = useLoaderData();
    console.log(data)
    const { name, image_url, price } = data
    const { user } = useContext(AuthContext)
    const priceInt = parseInt(price);
    const tax = parseInt(priceInt * 0.1);
    const total = priceInt + tax;

    return (
        <div className='w-11/12 mx-auto'>
            <div className="grid md:grid-cols-2 grid-cols-1 bg-indigo-300 rounded-lg mt-10 py-5">
                <div className='flex justify-center'>
                    <div>
                        <div className="flex flex-col items max-w-lg p-6 space-y-6 overflow-hidden rounded-lg bg-indigo-300 dark:text-gray-800">
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
                    <section className=" bg-indigo-300 dark:text-gray-800">
                        <div novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md  bg-indigo-300">
                                <div className="space-y-2 col-span-full lg:col-span-1">
                                    <p className="font-medium">Personal Information </p>
                                    <p className="text-xs"> Please fill up the form for check out successfully</p>
                                </div>
                                <div className="grid grid-cols-1 gap-4 col-span-full lg:col-span-3">
                                
                                    <div>
                                        <label for="address" className="text-sm">Name</label>
                                        <input id="address" type="text"
                                            defaultValue={user?.displayName}
                                            readOnly
                                            placeholder="" className="w-full 
                                         focus:outline-none
                                          dark:text-gray-900 text-center py-1 rounded-md" />
                                    </div>
                                    <div className="col-span-full">
                                        <label for="city" className="text-sm">Email</label>
                                        <input id="city" type="text"
                                            defaultValue={user?.email ? user.email : 'System did not find your email'}
                                            readOnly
                                            placeholder="" className="w-full 
                                         focus:outline-none
                                          dark:text-gray-900 text-center py-1 rounded-md" />
                                    </div>
                                    <div className="col-span-full">
                                        <p className='mt-1'>
                                            Price: <span className='text-lg text-blue-800'> ${ price}</span>
                                        </p>
                                        <p className='mt-1'>
                                            Tax: <span className='text-lg text-blue-800'> ${tax}</span>
                                        </p>
                                        <p className='mt-1'>
                                            Total: <span className='text-lg text-blue-800'> ${ total}</span>
                                        </p>
                                      
                                    </div>
                                    <div className="col-span-full">
                                        
                                        <div className='flex justify-center'>
                                            <button className='w-56
                                      bg-indigo-600 text-center py-2 text-white rounded-md hover:bg-blue-800'>
                                                Check Out
                                            </button>
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