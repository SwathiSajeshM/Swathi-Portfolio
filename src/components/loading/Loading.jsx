import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-black via-[#04040F] to-[#120E3D]">
      <div className="relative flex items-center justify-center">
{/*_____________________________________ Outer Ring ______________________________*/}
        <motion.div className="absolute border-4 rounded-full border-t-[#d1ff1a] border-b-transparent border-l-transparent border-r-[#d1ff1a] w-16 h-16 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}></motion.div>
{/*_____________________________________ Inner Ring _______________________________*/}
        <motion.div className="absolute border-4 rounded-full border-t-transparent border-b-[#d1ff1a] border-l-[#d1ff1a] border-r-transparent w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-18 xl:h-18" animate={{ rotate: -360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}></motion.div>
      </div>
    </div>
  );
};

export default Loading;
