import React from 'react';

const SocialMediaLink = ({ href, icon: Icon, }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className=' text-gray-400  hover:text-[#d1ff1a] duration-300 cursor-pointer text-xl'> <Icon /> </span>
    </a>
  );
};

export default SocialMediaLink;
