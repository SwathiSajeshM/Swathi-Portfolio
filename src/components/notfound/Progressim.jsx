import React from "react";
import progrsimg from "../../assets/klnest.png";
import { Link } from "react-router-dom";

const Progressim = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-tr from-black via-[#04040F] to-[#120E3D] text-center">
      <div className="w-full max-w-lg"><img src={progrsimg} alt="Progress" className="w-full h-auto object-cover" /></div>
      <div className="mt-6 space-y-3">
        <h1 className="text-2xl md:text-3xl text-gray-300">Under Development!!</h1>
        <p className="text-gray-400 max-w-md mx-auto">Our website is in progress! Exciting features are on the way to make hostel booking easier and more convenient.</p>
      </div>
      <Link to="/projects" className="mt-6 px-6 py-2 bg-[#d1ff1a] text-black rounded-lg shadow-md hover:bg-[#b8e617] transition">Go Back</Link>
    </div>
  );
};

export default Progressim;
