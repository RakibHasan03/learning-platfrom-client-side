import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';
import LeftSide from './LeftSide';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className="grid  grid-cols-1 lg:grid-cols-4 w-11/12 mx-auto py-6">
            <div className="col-span-1">
                {
                    courses.map((course, index) => <LeftSide
                        course={course}
                    key={index}>
                        
                    </LeftSide>)
               }
                </div>
            <div className="col-span-3  flex justify-center">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">

                    {
                        courses.map(course => <SingleCourse
                            key={course.id}
                        course={course}>
                            
                        </SingleCourse>)
                   }

                

                </div>

                </div>
        </div>
    );
};

export default Courses;