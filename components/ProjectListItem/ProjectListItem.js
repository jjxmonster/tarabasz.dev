import React from 'react';
import styled from 'styled-components';

const StyledProjectWrapper = styled.div`
   width: 100%;
   padding: 10px 0px;
   margin-bottom: 20px;
   > h3 {
      font-size: 2rem;
      font-weight: 500;
      color: white;
      position: relative;
      z-index: 100;
      margin-bottom: 0rem;
   }
   > small {
      color: #e1e1e1;
      font-weight: 500;
   }
   > p {
      font-size: 1.2rem;

      margin-top: 0.5rem;
      color: white;
      /* margin-bottom: 0rem; */
   }
`;

const StyledProjectButton = styled.span`
   letter-spacing: 0.1em;
   color: #919191;
   font-size: 1.2rem;
   font-weight: 700;
   margin-top: 2rem;
   position: relative;
   cursor: pointer;
   transition: 0.25s ease-in-out;
   z-index: 100;
   padding: 0 1px;
   &:hover {
      color: white;
      &:before {
         height: 100%;
      }
   }
   &:before {
      content: '';
      z-index: -1;
      position: absolute;
      bottom: -3px;
      left: 0;
      right: 0;
      width: 100%;
      height: 3px;
      transition: 0.25s ease-in-out;
      background-color: ${({ theme }) => theme.colors.green.primary};
   }
`;

const ProjectListItem = ({ title, technologies, description }) => {
   return (
      <StyledProjectWrapper>
         <h3>{title}</h3>

         <small>⚒ {technologies.join(', ')}</small>
         <p>{description}</p>
         <StyledProjectButton>MORE</StyledProjectButton>
      </StyledProjectWrapper>
   );
};

export default ProjectListItem;
