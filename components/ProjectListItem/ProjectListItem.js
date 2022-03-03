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
   }
`;

const ProjectListItem = ({ title, technologies, description }) => {
   return (
      <div className='w-full py-5 mb-10'>
         <h3 className='text-3xl text-white relative mb-0'>{title}</h3>
         <small className='text-gray-100 font-medium'>
            ⚒ {technologies.join(', ')}
         </small>
         {/* letter-spacing: 0.1em;
   color: #919191;
   font-size: 1.2rem;
   font-weight: 700;
   margin-top: 2rem;
   position: relative;
   cursor: pointer;
   transition: 0.25s ease-in-out;
   z-index: 100;
   padding: 0 1px; */}
         <p className='text-xl text-white mt-2'>{description}</p>
         <button className='leading-1 relative font-bold text-center px-1 text-gray-200 text-xl mt-2 pointer z-50 transition ease-in-out duration-250 hover:text-white before:z-negative before:absolute before:bottom-0 before:w-full before:h-1 before:bg-green before:right-0 before:ease-in-out before:duration-200 hover:before:h-full'>
            MORE
         </button>
      </div>
   );
};

export default ProjectListItem;
