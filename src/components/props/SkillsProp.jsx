import React from 'react';

const Skillsprop = ({ title, percentage }) => {
  return (
    <div>
      <div className="py-3 border-b-[1px] border-zinc-800">
        <p className="text-base text-white -mb-1.5">{title}</p>
        <span className="w-full bg-zinc-600 h-1 inline-flex relative">
          <span className={`h-full absolute top-0 left-0 bg-[#d1ff1a]/20`}style={{ width: `${percentage}%` }}></span>
        </span>
      </div>
    </div>
  );
};

export default Skillsprop;
