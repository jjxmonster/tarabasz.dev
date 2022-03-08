import React from 'react';
import Image from 'next/image';

import CloseIcon from '@mui/icons-material/Close';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ProjectContainer = ({ isActive, setIsProjectActive, activeProject }) => {
   return (
      <div
         className={`z-40 translate-y-full overflow-y-scroll pt-28 xl:pt-40 px-8 xl:px-80 lg:px-40 md:px-20 ease-in-out duration-500 fixed inset-0 w-screen min-h-screen bg-gray ${
            isActive && '!translate-y-0'
         }`}
      >
         {isActive && (
            <>
               <div className='flex items-center justify-between'>
                  <h2 className={'text-white text-4xl xl:text-5xl '}>
                     {activeProject.title}
                  </h2>
                  <CloseIcon
                     onClick={() => setIsProjectActive(false)}
                     className='!text-4xl text-green cursor-pointer transition-all !ease-in-out hover:rotate-180 !duration-500'
                  />
               </div>
               <div
                  className={
                     ' mt-5 xl:mt-16 bg-dark-gray w-full flex flex-col-reverse xl:flex-row'
                  }
               >
                  <div
                     className={
                        'flex-1 m-5 xl:m-10 flex flex-col justify-between'
                     }
                  >
                     <p className='text-white text-xl font-medium mb-5'>
                        {activeProject.longDescription}
                     </p>
                     <div className='flex items-center mb-5'>
                        <span
                           className={
                              'text-green mr-2 text-white text-xl font-medium'
                           }
                        >
                           Skills:
                        </span>
                        {activeProject.technologies.map(skill => (
                           <span
                              key={skill}
                              className='inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-gray rounded-full'
                           >
                              {skill}
                           </span>
                        ))}
                     </div>
                     <div className='mb-5'>
                        <a
                           href={activeProject.github}
                           className={`text-white cursor-pointer relative mr-8 p-2 text-xl font-medium z-30 before:-z-10 before:h-0.5 before:bg-green  before:absolute before:inset-0 before:m-auto before:border-green before:w-full before:mb-0 hover:before:h-full before:ease-in-out before:duration-500 '
               }`}
                        >
                           Github
                        </a>
                        <a
                           href={activeProject.live}
                           className={`text-white cursor-pointer relative mr-8 p-2 text-xl font-medium z-30 before:-z-10 before:h-0.5 before:bg-green  before:absolute before:inset-0 before:m-auto before:border-green before:w-full before:mb-0 hover:before:h-full before:ease-in-out before:duration-500 '
               }`}
                        >
                           Live
                        </a>
                     </div>
                  </div>

                  <div className={'w-full xl:w-7/12	 xl:-translate-y-10 '}>
                     <Carousel transitionTime={500}>
                        {activeProject.images.map(image => (
                           <div key={image}>
                              <Image
                                 width={900}
                                 height={
                                    activeProject.title === 'Meals To Go'
                                       ? 600
                                       : 500
                                 }
                                 alt='todo-screen'
                                 src={image}
                              />
                           </div>
                        ))}
                     </Carousel>
                  </div>
               </div>
            </>
         )}
      </div>
   );
};

export default ProjectContainer;
