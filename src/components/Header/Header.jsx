
import Aos from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css'
const Header = () => {
  useEffect(()=>{
    Aos.init()
  },[])
    return (
        <div data-aos="fade-up"
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">
              <span className="font-extrabold text-yellow-400">Train hard</span>{" "}
              <br /> train yard
            </h1>
            <p className="mb-5"></p>
          </div>
        </div>
      </div>
    );
};

export default Header;