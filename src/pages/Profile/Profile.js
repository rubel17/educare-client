import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Profile = () => {
    const user = useContext(AuthContext);
    
    const {displayName, photoURL, email} = user.user;
    return (
        <div className='bg-orange-600'>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                {
                    photoURL? <img src={photoURL} alt="" className=" h-96 w-96 sm:w-max lg:rounded" /> 
                    :
                    <strong>"No Image Get"</strong>
                }
                <div>
                {
                    displayName? <h1 className=" pb-5 text-3xl font-bold">DisplayName:{displayName}</h1>
                    :
                    <strong>"No Name Get"</strong>
                }
               {
                email?  <strong className="py-6">Email:{email}</strong> 
                :
                <strong>"No Email Get"</strong>
               }
                
                </div><div className=""></div>
                </div>
            </div>
         </div>
    );
};

export default Profile;