import React from "react";

const ProjectCard = ({ icon, title, titletwo }) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 hover:bg-black/50 transition-colors animate-fadeInUp">
      <div className="w-12 h-12 bg-[#d1ff1a] rounded-full flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-light text-white mb-4">{title}</h3>
      <p className="text-gray-400">{titletwo}</p>
    </div>
  );
};

export default ProjectCard;
