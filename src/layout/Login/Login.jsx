import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import googlePng from "/google.png";
import Swal from 'sweetalert2'
import { BiSolidHide } from 'react-icons/bi';
import Aos from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css'


const Login = () => {
    const navigate=useNavigate()
  const { login, googleLogin } = useContext(AuthContext);
  const  [error,setError]=useState('')
  const [showPass,setShowPass]=useState(false)
  useEffect(()=>{
    Aos.init()
  },[])

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);
    setError('')
  
    login(email, pass)
      .then((result) => {
        console.log(result.user);
        Swal.fire(
            'SuccessFully SignIn!',
            'Now press Okey!',
            'success'
          )

        navigate('/')
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.message}`

          })

      
      });
  };
 
   const handleGoogleLogin=()=>{
    googleLogin()
    .then(result=>{
        console.log(result.user);
        Swal.fire(
            'SuccessFully SignIn!',
            'Now press Okey!',
            'success'
          )

          navigate('/')


    })
    .catch(err=>{
        console.error(err.message);
    })
   }
  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">

        <div className="hero-content flex-col "   data-aos="zoom-in">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-black">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        
          >
            <form onSubmit={handleLogin} >
              <div className="card-body">
                {
                  error&& <p className="text-red-500">{error}</p>
                }
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered text-black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={ showPass? 'text' : 'password'}
                    name="password"
                    placeholder="password"
                    className="input input-bordered text-black "
                    required
                  />
                  <span onClick={()=>setShowPass(!showPass)} className="text-blue-500 absolute right-10 top-44 hover:cursor-pointer"><BiSolidHide></BiSolidHide></span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-yellow-400">Login</button>
                </div>
              </div>
            </form>
            <p className="text-sm text-center mb-5 text-black">
              New User? Please{" "}
              <Link to="/signup" className="text-blue-700">
                Register
              </Link>
            </p>
           
            <h1 className="text-black text-sm text-center ">OR SignIn With</h1>
            <div className="flex justify-center mt-3">
              <img src={googlePng} onClick={handleGoogleLogin} alt="google" className="w-10 mb-5 "  />
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Login;
