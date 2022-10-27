import React from 'react';
import { Link } from 'react-router-dom';

const LeftSide = ({ course }) => {
    const {name, id} = course
    return (

        <ul className="md:w-11/12 w-11/12  mt-3 mx-auto text-sm font-medium text-gray-900 bg-white rounded-lg  dark:bg-violet-500  dark:text-white" >
            <li className="p-2 px-4 w-full rounded-lg   hover:bg-blue-800"><Link
                to={`/course/${id}`}>
                <div className='flex '>
                    <p className='pr-2'>
                        {id}
                    </p>
                    <p>
                        {name}
                    </p>
            </div>
            </Link></li>
           
        </ul>

    //     <ul className='w-9/12 mx-auto'>
            
    //         <li className='list-disc mt-3'><Link>{name}</Link></li>

    //    </ul>
    );
};

export default LeftSide;