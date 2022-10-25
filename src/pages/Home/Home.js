import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Home = () => {
    const {user} =useContext(AuthContext);
    return (
        <div>
            <h3>this
                is home
            </h3>
            <h4>this is email:{user?.email }</h4>
        </div>
    );
};

export default Home;