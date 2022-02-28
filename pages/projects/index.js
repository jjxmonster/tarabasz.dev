import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { StyledHeaderWrapper } from '../index.js';
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem.js';

const StyledProjectsListContainer = styled.div``;

const Projects = () => {
   return (
      <>
         <Head>
            <title>Projects - Jakub Tarabasz</title>
         </Head>
         <StyledHeaderWrapper>
            <h1>Projects</h1>
         </StyledHeaderWrapper>
         <StyledProjectsListContainer>
            <ProjectListItem />
         </StyledProjectsListContainer>
      </>
   );
};

export default Projects;
