import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const SignUp = () => {
    const navigate=useNavigate()
    const {signup}=useContext(AuthContext);
    const handleSignUp=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const pass=e.target.password.value;
        console.log(email,pass);

        signup(email,pass)
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
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${err.message}`

              })
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-black">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} >
              <div className="card-body">
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
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered text-black"
                  />
                
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">Login</button>
                </div>
              </div>
            </form>
            <p className="text-sm text-center mb-5 text-black">Already have account?  <Link to='/login' className="text-blue-700">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;