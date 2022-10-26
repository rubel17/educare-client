import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Home = () => {
    const {user} =useContext(AuthContext);
    return (
        <div className='bg-success'>
            <h3 className='text-bold text-center text-xl'>This
                is "Dynamic" Home Page
            </h3>

           <div className='sm:ml-10 lg:flex lg:justify-around'>
           <p>Profile Name: 
            {
              user?.displayName? <strong className='text-error text-xl'>{user?.displayName}</strong> :
              <strong>  No Name..(Input)</strong>
            }
           </p>
            <h4> Profile Email: 
              {user?.email?
                <strong className='text-error text-xl'>{user?.email}</strong>
             :
                
                  <strong>No Mail..(Login Now)</strong>
                }
             </h4>
           </div>


             <div>
                <img style={{height: '650px'}} className='w-full' src={user?.photoURL} alt="" />
             </div>
        </div>
    );
};

export default Home;