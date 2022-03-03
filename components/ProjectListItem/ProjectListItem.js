import React from 'react';

const ProjectListItem = ({
   title,
   technologies,
   description,
   setIsProjectActive,
}) => {
   return (
      <div className='w-full py-5 mb-10'>
         <h3 className='text-3xl font-medium text-white relative mb-0'>
            {title}
         </h3>
         <small className='text-gray-100 font-medium'>
            ⚒ {technologies.join(', ')}
         </small>

         <p className='text-xl font-light text-white mt-2'>{description}</p>
         <button
            onClick={() => setIsProjectActive(true)}
            className='leading-1  relative font-bold text-center px-1 text-gray-200 text-xl mt-2 pointer z-30 transition ease-in-out duration-250 hover:text-white before:z-negative before:absolute before:bottom-0 before:w-full before:h-1 before:bg-green before:right-0 before:ease-in-out before:duration-300 hover:before:h-full'
         >
            MORE
         </button>
      </div>
   );
};

export default ProjectListItem;
