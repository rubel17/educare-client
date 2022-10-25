import React,  { useContext } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../contexts/UserContext';

const Account = () => {
    const {logInUser, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email,password)
        logInUser(email, password)
        .then(result =>{
            const newUser = result.user
                console.log(newUser);
                form.reset();
                navigate(from, {replace: true})
        })
        .catch(err=>console.log(err))
    };

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res =>{
            const user = res.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err));
    }
    

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Login Your valid Account with Your Email address and Password</p>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info mr-4">Google Sign In</button>
            <button className="btn btn-outline btn-success"> Github Sign In</button>

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