import React,  { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/UserContext';

const Account = () => {
    const {logInUser} = useContext(AuthContext)

    const handleSubmit = (event) =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email,password)
        logInUser(email, password)
        .then(result =>{
            const newUser = result.user
                console.log(newUser);
        })
        .catch(err=>console.log(err));
        from.reset();
    }
    

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Login Your valid Account with Your Email address and Password</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link  className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              
              </div>
              <Link to='/register'  className="text-error label-text-alt link link-hover">Create a new account?</Link>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Account;