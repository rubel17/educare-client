import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email,password)
        createUser(email, password)
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
            <h1 className="text-5xl font-bold">Create Your Account!</h1>
            <p className="py-6">You uses the Educare website for learning, Please create a new Account,otherwise login your Account.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                <label className="label">
                 <p>have an Account? <Link to='/account' className="label-text-alt link link-hover text-error">Please login</Link></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary ps-4">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;