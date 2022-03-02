import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

export const StyledHeaderWrapper = styled.div`
   width: 100%;
   padding: calc(8rem + 90px) 0 6rem 0;
   display: flex;
   align-items: flex-start;
   justify-content: center;
   flex-direction: column;
   > h1,
   h3,
   span {
      color: white;
   }
   > h1 {
      font-weight: 600;
      line-height: 1.5rem;
   }
   > h3 {
      font-size: 2.5rem;
   }
`;
const StyledAboutContainer = styled.div`
   width: 100%;
   > h2 {
      color: white;
   }
   > p {
      color: white;
      margin-bottom: 2rem;
      line-height: 2.5rem;
   }
`;

export default function Home() {
   const handleButtonClick = name => {
      switch (name) {
         case 'git':
            window.open('https://github.com/jjxmonster', '_blank');
            break;
         case 'linkedin':
            window.open(
               'https://www.linkedin.com/in/jakub-tarabasz-663b2b200/',
               '_blank'
            );
         case 'cv':
            window.open(
               'http://localhost:3000/curriculum-tarabasz-jakub.pdf',
               '_blank'
            );
         default:
            break;
      }
   };
   return (
      <>
         <Head>
            <title>Home - Jakub Tarabasz</title>
         </Head>
         <div className='w-full'>
            <div className='w-full flex items-start justify-center flex-col mb-24	 '>
               <h1 className='font-serif text-white text-5xl font-semibold	leading-10 mt-5 mb-2.5'>
                  Hi, I{`'`}m Jakub.👋
               </h1>
               <h3 className='text-white text-4xl mt-5 mb-2.5'>
                  I{`'`}m a frontend developer at Finseka.
               </h3>
               <div className='w-full flex items-center justify-start'>
                  <button
                     type='button'
                     className='text-white hover:text-green ease-in-out duration-200 mr-2'
                  >
                     <GitHubIcon className='text-3xl' />
                  </button>
                  <button
                     type='button'
                     className='text-white hover:text-green ease-in-out duration-200 mr-2'
                  >
                     <LinkedInIcon className='text-3xl' />
                  </button>
                  <button
                     type='button'
                     className='text-white hover:text-green ease-in-out duration-200 mr-2'
                  >
                     <span className='text-3xl font-medium'>CV</span>
                  </button>
               </div>
            </div>
            <div className='w-full'>
               <h2 className='text-white text-3.5xl mb-7'>About me</h2>
               <p className='text-white text-2xl mb-7'>
                  My name is Kuba, I{`'`}m 20 years old. I{`'`}m self-taught
                  frontend developer working with React. My adventure with
                  programming started in 1st grade of high school with C++. I
                  {`'`}ve been learning creating website application for three
                  years. I{`'`}m working with React, I started learning it in
                  March 2020. So far i have created few apps with this library,
                  some of them are more, some of them are less advanced, all of
                  them you can see on my github account
                  <span> https://github.com/jjxmonster</span> Present I work as
                  Frontend developer at Finseka.
               </p>
               <p className='text-white text-2xl mb-7'>
                  I always want to learn more and do more. I{`'`}m hard working,
                  fast learner and curious!
               </p>{' '}
            </div>
         </div>
      </>
   );
}
