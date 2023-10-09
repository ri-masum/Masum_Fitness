import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { BiSolidHide } from 'react-icons/bi';
import Aos from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css'

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);

 const  [error,setError]=useState('')
 const [showPass,setShowPass]=useState(false)

useEffect(()=>{
  Aos.init()
},[])

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name=e.target.name.value;
    const photo=e.target.photo.value;
    console.log(email, pass,name,photo);
    setError('')

    if(pass.length <6){
      setError('password should be at least 6 Character')
      return
    }
    else if(!/[A-Z]/.test(pass)){
      setError('password must contain at least one Upper latter')
      return
    }
    else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(pass)){
      setError('password must contain at least one special character')
      return
    }
    signup(email, pass,name,photo)
      .then((result) => {
        console.log(result.user);
        // setUserName(result.user.displayName)
        // setUserPhoto(result.user.photoURL)

        // updating profile name and photo
        updateProfile(result.user,{
          displayName:name,
          photoURL:photo
        })
        .then(()=>console.log('profile updated'))
        .catch(()=>console.log('failed to update profile'))

        Swal.fire("SuccessFully SignIn!", "Now press Okey!", "success");

        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200" >
      <div className="hero-content flex-col "  data-aos="zoom-in">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-black">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp}>
            <div className="card-body">
              {error && <p className="text-red-500">{error}</p>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo_URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="url"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered text-black"
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
                  className="input input-bordered text-black"
                />
              <span onClick={()=>setShowPass(!showPass)} className="text-blue-500 absolute right-10 bottom-44 hover:cursor-pointer "><BiSolidHide></BiSolidHide></span>

              </div>
              <div className="form-control mt-6">
                <button className="btn bg-yellow-400">SignUp</button>
              </div>
            </div>
          </form>
          <p className="text-sm text-center mb-5 text-black">
            Already have account?{" "}
            <Link to="/login" className="text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
