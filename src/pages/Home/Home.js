import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Home = () => {
    const {user} =useContext(AuthContext);
    return (
        <div className='bg-success'>
            <h3 className='text-bold text-center text-xl'>This
                is "Dynamic" Home Page
            </h3>

           <div className='flex justify-around'>
           <p>Profile Name: <strong className='text-error text-xl'>{user.displayName}</strong></p>
            <h4>
              {user?.email?
                <div>Profile Email: <strong className='text-error text-xl'>{user.email}</strong></div>
             :
                <div><img src={user.photoURL} alt="" /></div>}
             </h4>
           </div>


             <div>
                <img style={{height: '650px'}} className='w-full' src={user.photoURL} alt="" />
             </div>
        </div>
    );
};

export default Home;