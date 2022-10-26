import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { courseName } = course;
    return (
        <div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-2xl font-bold"><u>Check Out Now (This is Private Route,only visit login user)</u></h1>
                    <h1 className="mb-5 text-xl font-bold">Display CourseName:</h1>
                    <p className="mb-5 text-error text-3xl">{courseName?
                    courseName : <small className='text-xl'> "Only display the name based on the id"</small>
                }</p>
                    
                    </div>
                </div>
                </div>
        </div>
    );
};

export default CheckOut;