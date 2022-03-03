import React from 'react';

const ProjectContainer = ({ isActive }) => {
   return (
      <div
         className={`z-40 translate-y-full ease-in-our duration-500 fixed inset-0 w-screen h-screen bg-gray ${
            isActive && '!translate-y-0'
         }`}
      ></div>
   );
};

export default ProjectContainer;
