import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Home = () => {
    const {user} =useContext(AuthContext);
    return (
        <div>
            <h3>This
                is home
            </h3>
            <h4>{user?.email?
             <div>{user.email}</div>
             :
             <div><img src={user.photoURL} alt="" /></div> 

             }</h4>
        </div>
    );
};

export default Home;