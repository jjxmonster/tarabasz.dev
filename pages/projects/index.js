import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { StyledHeaderWrapper } from '../index.js';
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem.js';

import { projectsList } from '../../infrastructure/projects/projects.js';

const StyledProjectsListContainer = styled.div`
   padding-bottom: 50px;
   background-color: gray;
`;

const StyledProjectsTypeTitle = styled.h4`
   width: 100%;
   text-align: center;
   border-bottom: 1px solid lightgrey;
   line-height: 0.1em;
   margin: 10px 0 20px;
   > span {
      letter-spacing: 0.25rem;
      background: gray;
      padding: 0 10px;
      color: lightgrey;
   }
`;

const Projects = () => {
   return (
      <>
         <Head>
            <title>Projects - Jakub Tarabasz</title>
         </Head>

         <div className='w-full flex items-start justify-center flex-col mb-24'>
            <h1 className='font-serif text-white text-5xl font-semibold	leading-10 mt-5 mb-2.5'>
               Projects 📁
            </h1>
            <h3 className='text-white text-4xl mt-5 mb-2.5'>
               Personal and comercial projects I{`'`}ve worked on.
            </h3>
         </div>
         <div className='pb-5 bg-gray'>
            <h4 className='text-lightgray w-full border-b border-lightgray text-center leading-3 mt-5 mb-10'>
               <span className='px-5 bg-gray tracking-widest'>personal</span>
            </h4>
         </div>

         {projectsList.personal.map(({ title, technologies, description }) => (
            <ProjectListItem
               key={title}
               title={title}
               technologies={technologies}
               description={description}
            />
         ))}

         {/* <StyledProjectsListContainer> */}
         {/* <StyledProjectsTypeTitle>
               <span>personal</span>
            </StyledProjectsTypeTitle>
            {projectsList.personal.map(
               ({ title, technologies, description }) => (
                  <ProjectListItem
                     key={title}
                     title={title}
                     technologies={technologies}
                     description={description}
                  />
               )
            )}

            <StyledProjectsTypeTitle style={{ marginTop: 100 }}>
               <span>comercial</span>
            </StyledProjectsTypeTitle>
            {projectsList.comercial.map(
               ({ title, technologies, description }) => (
                  <ProjectListItem
                     key={title}
                     title={title}
                     technologies={technologies}
                     description={description}
                  />
               )
            )} */}
         {/* </StyledProjectsListContainer> */}
      </>
   );
};

export default Projects;
