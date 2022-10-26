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
                    <h1 className="mb-5 text-xl font-bold">Display CourseName:</h1>
                    <p className="mb-5 text-5xl">{courseName}</p>
                    
                    </div>
                </div>
                </div>
        </div>
    );
};

export default CheckOut;