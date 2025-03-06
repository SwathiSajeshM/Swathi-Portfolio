import React from "react";
import emptyimg from "../../assets/empty1.png";
import { Link } from "react-router-dom";

const EmptyProjj = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24 bg-gradient-to-tr from-black via-[#04040F] to-[#120E3D] text-center">
      <div className="w-full max-w-md"><img src={emptyimg} alt="Coming Soon" className="w-full h-auto object-cover" /></div>
      <div className="mt-6">
        <h1 className="text-2xl md:text-3xl text-gray-300 py-2">Coming Soon!!</h1>
        <p className="text-gray-400 max-w-lg">The next project is still just an idea. Once it's completed, I might share it!</p>
      </div>
      <Link to="/projects" className="mt-6 px-6 py-2 bg-[#d1ff1a] text-black rounded-lg shadow-md hover:bg-[#b8e617] transition">Go Back</Link>
    </div>
  );
};

export default EmptyProjj;
