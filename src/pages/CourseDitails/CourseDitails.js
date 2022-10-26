import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDitails = () => {
    const course  = useLoaderData();
    const {image, courseName, courseBody, description} =course;
    console.log("courses detail page",course)
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image} className="sm:w-max lg:rounded shadow-2xl" alt="" />
    <div>
      <h1 className="text-5xl font-bold">{courseName}</h1>
      <p className="py-6">{courseBody?courseBody 
      :
      <strong className='text-2xl text-purple-400'>'Please Visit Courses Page First'<Link to='/courses' className=" ml-3 btn btn-warning">Courses</Link> </strong>

      }
      </p>
      <p className="py-6">{description}</p>
      <button className="btn btn-primary"><Link to={`/checkout/${course.id}`}>Admission Checkout</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CourseDitails;