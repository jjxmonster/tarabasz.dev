import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import ProjectListItem from '../../components/ProjectListItem';
import ProjectContainer from '../../components/ProjectContainer';

import { projectsList } from '../../infrastructure/projects/projects.js';

import { animationsMount } from '../../animations/animations.js';

const Projects = () => {
   const [isProjectActive, setIsProjectActive] = useState(false);
   const [activeProject, setActiveProject] = useState(null);

   useEffect(() => {
      animationsMount('.projects-container');
   }, []);

   return (
      <>
         <Head>
            <title>Projects | Jakub Tarabasz</title>
         </Head>
         <ProjectContainer
            activeProject={activeProject}
            isActive={isProjectActive}
            setIsProjectActive={setIsProjectActive}
         />
         <div className='projects-container'>
            <div className='w-full flex items-start justify-center flex-col mb-24'>
               <h1 className='font-serif text-gray dark:text-white text-4xl lg:text-5xl font-semibold	leading-10 mt-5 mb-2.5'>
                  Projects 📁
               </h1>
               <h2 className='text-gray dark:text-white text-3xl lg:text-4xl mt-5 mb-2.5'>
                  Personal and comercial projects I{`'`}ve worked on.
               </h2>
            </div>
            <div className='pb-5 '>
               <h4 className=' text-dark-gray dark:text-lightgray w-full border-b border-lightgray text-center leading-small mt-5 mb-10'>
                  <span className='px-5 bg-white duration-500 dark:bg-gray tracking-widest'>
                     personal
                  </span>
               </h4>
            </div>

            {projectsList.personal.map(project => (
               <ProjectListItem
                  setIsProjectActive={setIsProjectActive}
                  setActiveProject={setActiveProject}
                  key={project.title}
                  project={project}
               />
            ))}
            <div className='pb-5 '>
               <h4 className='text-dark-gray  dark:text-lightgray w-full border-b border-lightgray text-center leading-small mt-5 mb-10'>
                  <span className='px-5 bg-white dark:bg-gray duration-500 tracking-widest'>
                     comercial
                  </span>
               </h4>
            </div>
            {projectsList.comercial.map(project => (
               <ProjectListItem
                  setIsProjectActive={setIsProjectActive}
                  setActiveProject={setActiveProject}
                  key={project.title}
                  project={project}
               />
            ))}
         </div>
      </>
   );
};

export default Projects;
