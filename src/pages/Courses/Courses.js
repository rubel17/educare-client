import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='sm:mx-auto sm:w-96 lg:mx-0 lg:w-full'>
            <div className="lg:flex">

            <div className=" lg:ml-8 lg:w-1/4">
            <h3 className='text-lg font-bold text-accent my-6'>Academic Courses: {courses.length}</h3>
            {
                courses.map(course => <p className='mb-6' key={course.id}>
                    <Link className='text-info' to={`/coursedetails/${course.id}`}> <u>{course.courseName}</u></Link>
                </p>)
            }
            </div>


            <div className="w-3/4 lg:grid lg:grid-cols-3 ">
                {
                    courses.map(course => <Course key={course.id}
                        course={course}></Course> )
                }
           
            </div>


          </div>
        </div>
    );
};

export default Courses;