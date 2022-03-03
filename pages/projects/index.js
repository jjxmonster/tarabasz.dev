import React, { useState } from 'react';
import Head from 'next/head';

import ProjectListItem from '../../components/ProjectListItem/ProjectListItem.js';
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer.js';

import { projectsList } from '../../infrastructure/projects/projects.js';

const Projects = () => {
   const [isProjectActive, setIsProjectActive] = useState(false);
   return (
      <>
         <Head>
            <title>Projects - Jakub Tarabasz</title>
         </Head>
         <ProjectContainer isActive={isProjectActive} />
         <div className='w-full flex items-start justify-center flex-col mb-24'>
            <h1 className='font-serif text-white text-5xl font-semibold	leading-10 mt-5 mb-2.5'>
               Projects 📁
            </h1>
            <h3 className='text-white text-4xl mt-5 mb-2.5'>
               Personal and comercial projects I{`'`}ve worked on.
            </h3>
         </div>
         <div className='pb-5 bg-gray'>
            <h4 className='text-lightgray w-full border-b border-lightgray text-center leading-small mt-5 mb-10'>
               <span className='px-5 bg-gray tracking-widest'>personal</span>
            </h4>
         </div>

         {projectsList.personal.map(({ title, technologies, description }) => (
            <ProjectListItem
               setIsProjectActive={setIsProjectActive}
               key={title}
               title={title}
               technologies={technologies}
               description={description}
            />
         ))}
         <div className='pb-5 bg-gray'>
            <h4 className='text-lightgray w-full border-b border-lightgray text-center leading-small mt-5 mb-10'>
               <span className='px-5 bg-gray tracking-widest'>comercial</span>
            </h4>
         </div>
         {projectsList.comercial.map(({ title, technologies, description }) => (
            <ProjectListItem
               key={title}
               title={title}
               technologies={technologies}
               description={description}
            />
         ))}
      </>
   );
};

export default Projects;
