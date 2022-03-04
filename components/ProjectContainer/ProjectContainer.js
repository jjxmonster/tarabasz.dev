import React from 'react';

const ProjectContainer = ({ isActive }) => {
   return (
      <div
         className={`z-40 translate-y-full pt-40 px-8 xl:px-80 lg:px-40 md:px-20 ease-in-our duration-500 fixed inset-0 w-screen h-screen bg-gray ${
            isActive && '!translate-y-0'
         }`}
      >
         <h2 className={'text-white text-5xl '}>TypeScript Firebase Todo</h2>
         <div className={'mt-16 bg-dark-gray w-full flex'}>
            <div className={'flex-1 m-10 flex flex-col justify-between'}>
               <p className='text-white text-xl font-medium'>
                  A Todo App using Typescript, React, Redux and Realtime updates
                  with Cloud Firestore.
               </p>

               <div>
                  <a
                     className={`text-white relative mr-8 p-2 text-xl font-medium z-30 before:-z-10 before:h-0.5 before:bg-green  before:absolute before:inset-0 before:m-auto before:border-green before:w-full before:mb-0 before:ease-in-out before:duration-500 hover:before:h-full'
               }`}
                  >
                     Github
                  </a>
                  <a
                     className={`text-white relative mr-8 p-2 text-xl font-medium z-30 before:-z-10 before:h-0.5 before:bg-green  before:absolute before:inset-0 before:m-auto before:border-green before:w-full before:mb-0 before:ease-in-out before:duration-500 hover:before:h-full'
               }`}
                  >
                     Live
                  </a>
               </div>
            </div>

            <div className={'flex-1'}>
               <div
                  className={'w-full h-80 -translate-y-10'}
                  style={{ background: 'blue' }}
               ></div>
            </div>
         </div>
      </div>
   );
};

export default ProjectContainer;
