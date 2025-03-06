import { Link } from "react-router-dom";
import notfound from "../../assets/404.png"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white  bg-gradient-to-tr from-black via-[#04040F]  to-[#120E3D] ">
      <img src={notfound} alt="" className="" />
      <h1 className="text-3xl font-mono">OOPS! Nothing to see here.</h1>
      <p className="pt-2 text-sm">Sorry, we can't find that page! Don't worry, go back to our main page to continue your visit.</p>
      <Link to="/" className="mt-4 px-6 py-2 bg-[#d1ff1a] text-black  rounded-lg shadow-md hover:bg-[#b8e617] transition">Go Home</Link>
    </div>
  );
};

export default NotFound;