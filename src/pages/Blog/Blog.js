import React from 'react';

const Blog = () => {
    return (
        <div>
           <div className='m-5 mx-24 border-double border-4 border-indigo-600 shadow-2xl inline-block p-5'>
           <h3 className='text-2xl text-primary font-bold'>1.1 what is cors?</h3>
           <br />
            <p className='text-xl font-medium'>Ans: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.</p>
           </div>


           <div className='m-5 mx-24 border-double border-4 border-indigo-600 shadow-2xl inline-block p-5'>
           <h3 className='text-2xl text-primary font-bold'>1.2 Why are you using firebase? What other options do you have to implement authentication?</h3>
           <br />
            <p className='text-xl font-medium'>Ans: Firebase Authentication provides backend services, easy-to-use SDKs,  and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers,  popular federated identity providers like Google, Facebook and Twitter, and more.</p>
           </div>


           <div className='m-5 mx-24 border-double border-4 border-indigo-600 shadow-2xl inline-block p-5'>
           <h3 className='text-2xl text-primary font-bold'>1.3 How does the private route work?</h3>
           <br />
            <p className='text-xl font-medium'>Ans: The react private route component renders child components ( children ) if the user is logged in.  If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
           </div>


           <div className='m-5 mx-24 border-double border-4 border-indigo-600 shadow-2xl inline-block p-5'>
           <h3 className='text-2xl text-primary font-bold'>1.4 What is Node? How does Node work?</h3>
           <br />
            <p className='text-xl font-medium'>Ans: Node. js is a JavaScript runtime environment that achieves low latency and  high throughput by taking a “non-blocking”approach to serving requests. In other words, Node. js wastes no time or resources on waiting for  I/O requests to return.</p>
           </div>
                
        
        </div>
    );
};

export default Blog;