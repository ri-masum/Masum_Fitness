import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Trainers = () => {
 
useEffect(()=>
{
Aos.init();
},[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3" 
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    // data-aos-duration="3000"
    >
     

      <div className="card card-compact  bg-black text-white shadow-xl" >
        <figure>
          <img
            src="https://media.istockphoto.com/id/1324042769/photo/confident-gym-owner.jpg?s=2048x2048&w=is&k=20&c=GnRecAchVzG907aRsjRL-D7VqC7lBdpk05hsXrDXRp0="
            alt="tainer1"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-yellow-400">John Smith</h2>
          <p className="font-mono">Strength and conditioning coach for athletes.</p>
        </div>
      </div>


      <div className="card card-compact  bg-black text-white shadow-xl">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1430630093/photo/happy-male-coach-writing-plans-in-a-health-club.jpg?s=2048x2048&w=is&k=20&c=OZIUisUrT78_mk1FDYtC9q99GeSZ2sXpOaJjpvP86Fo="
            alt="tainer2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-yellow-400">Jane Doe</h2>
          <p className="font-mono"> Fitness instructor specializing in HIIT workouts.</p>
        </div>
      </div>


      <div className="card card-compact  bg-black text-white shadow-xl">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1202261948/photo/man-in-a-gym-training.jpg?s=2048x2048&w=is&k=20&c=fX95O9wev-Zpaa8Br81RPwsKD4JWjdwpfsRsAHk-mjA="
            alt="tainer1"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-yellow-400">Mike Johnson</h2>
          <p className="font-mono">Certified personal trainer with 5 years of experience</p>
        </div>
      </div>

      
      <div className="card card-compact  bg-black   text-white drop-shadow-xl">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1152600445/photo/confident-young-macho-male-with-arms-crossed.jpg?s=2048x2048&w=is&k=20&c=cHr_PG0P3dCiKr8KD9djsqYTImT0XaYgtuz5fTVM2lE="
            alt="tainer4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-yellow-400">Masum Ahmed</h2>
          <p className="font-mono">Power Lifting Champion</p>
        </div>
      </div>
     
    </div>
  );
};

export default Trainers;
