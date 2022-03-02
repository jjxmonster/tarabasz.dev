import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { StyledHeaderWrapper } from '../index.js';
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem.js';

import { projects } from '../../infrastructure/projects/projects.js';

const StyledProjectsListContainer = styled.div`
   padding-bottom: 50px;
   background-color: ${({ theme }) => theme.colors.gray.primary};
`;

const StyledProjectsTypeTitle = styled.h4`
   width: 100%;
   text-align: center;
   border-bottom: 1px solid lightgrey;
   line-height: 0.1em;
   margin: 10px 0 20px;
   > span {
      letter-spacing: 0.25rem;
      background: ${({ theme }) => theme.colors.gray.primary};
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
         <StyledHeaderWrapper>
            <h1>Projects 📁</h1>
            <h3>Personal and comercials projects I{`'`}ve worked on.</h3>
         </StyledHeaderWrapper>
         <StyledProjectsListContainer>
            <StyledProjectsTypeTitle>
               <span>personal</span>
            </StyledProjectsTypeTitle>
            {projects.personal.map(({ title, technologies, description }) => (
               <ProjectListItem
                  key={title}
                  title={title}
                  technologies={technologies}
                  description={description}
               />
            ))}

            <StyledProjectsTypeTitle style={{ marginTop: 100 }}>
               <span>comercial</span>
            </StyledProjectsTypeTitle>
            {projects.comercial.map(({ title, technologies, description }) => (
               <ProjectListItem
                  key={title}
                  title={title}
                  technologies={technologies}
                  description={description}
               />
            ))}
         </StyledProjectsListContainer>
      </>
   );
};

export default Projects;
