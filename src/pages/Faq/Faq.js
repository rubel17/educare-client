import React from 'react';
import Check from '../Check/Check';

const FAQ = () => {
    return (
        <div>
            <div className="mb-5 hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/spooky-halloween-autumn-fantasy-forest-fog-realistic-background-illustration_1284-65417.jpg?w=2000&t=st=1666814879~exp=1666815479~hmac=7e0da2175e581f9d259eea5f223c8f86ade88d68a3333a43cd7ed5adb728a5ac")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Frequently Asked Questions (FAQ)</h1>
                <p className="mb-5">FAQ list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps.</p>
                </div>
            </div>
            </div>
            <p className='text-center text-4xl font-bold text-indigo-500 my-5'>Print This Data, Please Click The Print Button.</p>

            <Check></Check>
        </div>
    );
};

export default FAQ;