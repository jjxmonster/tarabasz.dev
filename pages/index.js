import React, { useEffect } from 'react';
import Head from 'next/head';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { animationsMount } from '../animations/animations.js';

export default function Home() {
   useEffect(() => {
      animationsMount('.homepage-container');
   }, []);
   return (
      <>
         <Head>
            <title>Home | Jakub Tarabasz</title>
         </Head>
         <div className='w-full homepage-container'>
            <div className='w-full flex items-start justify-center flex-col mb-24'>
               <h1 className='font-serif text-gray dark:text-white text-4xl lg:text-5xl font-semibold	leading-10 mt-5 mb-2.5'>
                  Hi, I{`'`}m Jakub.👋
               </h1>
               <h2 className='text-gray dark:text-white text-3xl lg:text-4xl mt-5 mb-2.5'>
                  I{`'`}m a frontend developer from Poland
               </h2>
               <div className='w-full flex items-center justify-start'>
                  <button
                     aria-label='github'
                     type='button'
                     className='text-gray dark:text-white hover:text-green ease-in-out duration-500 mr-2'
                  >
                     <a
                        aria-label='github'
                        href='https://github.com/jjxmonster'
                        rel='noreferrer'
                        target='_blank'
                     >
                        <GitHubIcon className='!text-3xl' />
                     </a>
                  </button>
                  <button
                     aria-label='linkedin'
                     type='button'
                     className='text-gray dark:text-white hover:text-green ease-in-out duration-500 mr-2'
                  >
                     <a
                        aria-label='linkedin'
                        href='https://www.linkedin.com/in/jakub-tarabasz-663b2b200/'
                        rel='noreferrer'
                        target='_blank'
                     >
                        <LinkedInIcon className='!text-3xl' />
                     </a>
                  </button>
                  <button
                     aria-label='curriculum'
                     type='button'
                     className='text-gray dark:text-white hover:text-green ease-in-out duration-500 mr-2'
                  >
                     <a
                        aria-label='curriculum'
                        href='https://tarabasz.dev/curriculum-tarabasz-jakub.pdf'
                        rel='noreferrer'
                        target='_blank'
                     >
                        <span className='text-3xl font-medium'>CV</span>
                     </a>
                  </button>
               </div>
            </div>
            <div className='w-full'>
               <h2 className='text-gray dark:text-white text-3.5xl mb-7'>
                  About me
               </h2>
               <p className='text-gray dark:text-white text-2xl mb-7'>
                  My name is Kuba, I{`'`}m 20 years old. I{`'`}m self-taught
                  frontend developer working with React. My adventure with
                  programming started in 1st grade of high school with C++.
                  Since 3rd grade I started learning Frontend Development, after
                  graduating from high school in June 2021 I got my first job as
                  Junior Frontend Developer at Finseka where I earned my first
                  comercial experience what let me get my present job as
                  Frontend Developer at Accenture. I{`'`}m also Web3.0 &
                  blockchain technology enthusiast.
               </p>
               <p className='text-gray dark:text-white text-2xl mb-7'>
                  You can see all of my projects on
                  <a
                     aria-label='github'
                     href='https://github.com/jjxmonster'
                     target='_blank'
                     rel='noreferrer'
                     className='relative z-30 before:absolute cursor-pointer before:bottom-0 before:w-full before:bg-green before:h-1 before:duration-500 before:ease-in-out hover:before:h-full before:-z-10'
                  >
                     {' '}
                     https://github.com/jjxmonster
                  </a>{' '}
               </p>
               <p className='text-gray dark:text-white text-2xl mb-7'>
                  I always want to learn and do more. I{`'`}m hard working, fast
                  learner and curious!
               </p>{' '}
            </div>
         </div>
      </>
   );
}
