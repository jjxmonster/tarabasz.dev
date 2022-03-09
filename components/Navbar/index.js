import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import BurgerMenuButton from '../BurgerMenuButton';

import { animationsUnMount } from '../../animations/animations.js';

const Navbar = () => {
   const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

   const { pathname, push } = useRouter();

   const delayPageChange = href => {
      switch (pathname) {
         case '/':
            href !== pathname && animationsUnMount('.homepage-container');
            break;
         case '/projects':
            href !== pathname && animationsUnMount('.projects-container');
            break;

         default:
            break;
      }
      setTimeout(() => {
         push(href);
      }, 500);
   };

   return (
      <header className='w-screen bg-gray fixed left-0 top-0 z-50 flex items-center justify-between shadow-sm shadow-black py-4 px-8 xl:px-80 lg:px-40 md:px-20'>
         <div className='flex items-center'>
            <Image
               alt='Jakub Tarabasz Avatar'
               width={56}
               height={56}
               src='/img/avatar.jpg'
               className='rounded-full'
            />

            <span
               onClick={() => delayPageChange('/')}
               className='text-white text-2xl cursor-pointer font-medium ml-4'
            >
               Jakub Tarabasz
            </span>
         </div>

         <div
            className={`lg:block flex hamburger:w-screen hamburger:absolute hamburger:translate-x-full duration-500 hamburger:items-center hamburger:flex-col hamburger:justify-around hamburger:py-80 hamburger:inset-0 hamburger:h-screen z-50 bg-gray ${
               isBurgerMenuOpen && '!translate-x-0'
            } `}
         >
            <a
               onClick={() => {
                  setIsBurgerMenuOpen(false);
                  delayPageChange('/');
               }}
               className={`text-white cursor-pointer relative mr-8 p-2 text-xl font-medium z-30 before:-z-10 before:h-0.5 before:bg-green  before:absolute before:inset-0 before:m-auto before:border-green before:w-full before:mb-0 before:ease-in-out before:duration-500 hover:before:h-full ${
                  pathname === '/' && 'active'
               }`}
            >
               Home
            </a>

            <a
               onClick={() => {
                  setIsBurgerMenuOpen(false);
                  delayPageChange('/projects');
               }}
               className={`text-white cursor-pointer relative mr-8 p-2 text-xl font-medium z-30 before:-z-10 before:h-0.5  before:bg-green before:absolute before:inset-0 before:m-auto before:border-green before:w-full before:mb-0 before:ease-in-out before:duration-500 hover:before:h-full ${
                  pathname === '/projects' && 'active'
               }`}
            >
               Projects
            </a>

            <a
               onClick={() => {
                  setIsBurgerMenuOpen(false);
                  delayPageChange('/blog');
               }}
               className={`text-white cursor-pointer relative mr-8 p-2 text-xl font-medium z-30 before:-z-10 before:h-0.5  before:bg-green before:absolute before:inset-0 before:m-auto before:border-green before:w-full before:mb-0 before:ease-in-out before:duration-500 hover:before:h-full ${
                  pathname === '/blog' && 'active'
               }`}
            >
               Blog
            </a>
         </div>
         <BurgerMenuButton
            isBurgerMenuOpen={isBurgerMenuOpen}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
         />
      </header>
   );
};

export default Navbar;
