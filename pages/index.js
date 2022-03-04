import React from 'react';
import Head from 'next/head';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
   return (
      <>
         <Head>
            <title>Home - Jakub Tarabasz</title>
         </Head>
         <div className='w-full'>
            <div className='w-full flex items-start justify-center flex-col mb-24'>
               <h1 className='font-serif text-white text-5xl font-semibold	leading-10 mt-5 mb-2.5'>
                  Hi, I{`'`}m Jakub.👋
               </h1>
               <h3 className='text-white text-4xl mt-5 mb-2.5'>
                  I{`'`}m a frontend developer at Finseka.
               </h3>
               <div className='w-full flex items-center justify-start'>
                  <button
                     type='button'
                     className='text-white hover:text-green ease-in-out duration-500 mr-2'
                  >
                     <a
                        href='https://github.com/jjxmonster'
                        rel='noreferrer'
                        target='_blank'
                     >
                        <GitHubIcon className='!text-3xl' />
                     </a>
                  </button>
                  <button
                     type='button'
                     className='text-white hover:text-green ease-in-out duration-500 mr-2'
                  >
                     <a
                        href='https://www.linkedin.com/in/jakub-tarabasz-663b2b200/'
                        rel='noreferrer'
                        target='_blank'
                     >
                        <LinkedInIcon className='!text-3xl' />
                     </a>
                  </button>
                  <button
                     type='button'
                     className='text-white hover:text-green ease-in-out duration-500 mr-2'
                  >
                     <a
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
                  <a
                     href='https://github.com/jjxmonster'
                     target='_blank'
                     rel='noreferrer'
                     className='relative z-30 before:absolute cursor-pointer before:bottom-0 before:w-full before:bg-green before:h-1 before:duration-500 before:ease-in-out hover:before:h-full before:-z-10'
                  >
                     {' '}
                     https://github.com/jjxmonster
                  </a>{' '}
                  Present I work as Frontend developer at Finseka.
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
