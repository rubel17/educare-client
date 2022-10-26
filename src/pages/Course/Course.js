import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {image, courseName, courseBody,} =course;
    return (
        <div>
            <div className=" my-6 card card-compact w-80 h-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-40' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{courseName}</h2>
                <p>{courseBody }</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary mt-0"> <Link to={`/coursedetails/${course.id}`}>Admission</Link></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Course;