import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Home = () => {
    const {displayName} =useContext(AuthContext);
    return (
        <div>
            <h3>this
                is home
            </h3>
            <h4>{displayName}</h4>
        </div>
    );
};

export default Home;