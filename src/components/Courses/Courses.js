import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSide from './LeftSide';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className="grid  grid-cols-1 lg:grid-cols-4 w-11/12 mx-auto py-6">
            <div className="col-span-1 border">
                {
                    courses.map((course, index) => <LeftSide
                        course={course}
                    key={index}>
                        
                    </LeftSide>)
               }
                </div>
            <div className="col-span-3  border">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 ">
                

                </div>

                </div>
        </div>
    );
};

export default Courses;