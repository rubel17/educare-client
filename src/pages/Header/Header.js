import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);

  const handleSignOut = () =>{
    logOut()
    .then(() => {
            
    }).catch((error) =>console.error(error));
  };

  const handleClick = () => {
    console.log('ok')
    setIsActive(current => !current);
  };



    return (
        <div className="navbar bg-info">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-info rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/courses'>Courses</Link></li>
              <li><Link to='/faq'>FAQ</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              <li><Link>Theme</Link></li>
              <li><Link to='/account'>Account</Link></li>
              
            </ul>
          </div>
          <AcademicCapIcon className="mr-3 h-8 w-8 text-blue-500"/>
          <Link to='/' className='text-lg primary'>Educare</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/courses'>Courses</Link></li>
              <li><Link to='/faq'>FAQ</Link></li>
              <li><Link to='/blog'>Blog</Link></li>

              <li><Link   style={{color: isActive ? 'white' : 'black',}}
                    onClick={handleClick}
                    >ChangeTheme</Link></li>

              <li><Link to='/account'>Account</Link></li>
              <li><Link to='/checkout'>CheckOut</Link></li>
          </ul>


          {
            user?.uid? <button onClick={handleSignOut} className="btn btn-xs">SignOut</button>
            :
            <Link to='register'><button className="ml-4 btn btn-xs">Register Now</button></Link>
          }


        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        {user?.photoURL?
          <img src={user.photoURL} alt="" className='h-10 rounded-full' /> :
            <Link to='account'><button className=" h-10 btn btn-xs">Log In</button></Link>
            
          }

        </div>
        
      </label>
        </div>
      </div>
    );
};

export default Header;