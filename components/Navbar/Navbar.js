import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton.js';

const Navbar = () => {
   const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

   const { pathname } = useRouter();

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
            <Link href='/' className='text-white' passHref>
               <span className='text-white text-2xl font-medium ml-4'>
                  Jakub Tarabasz
               </span>
            </Link>
         </div>

         <div
            className={`lg:block flex hamburger:w-screen hamburger:absolute hamburger:translate-x-full duration-300 hamburger:items-center hamburger:flex-col hamburger:justify-around hamburger:py-80 hamburger:inset-0 hamburger:h-screen z-50 bg-gray ${
               isBurgerMenuOpen && '!translate-x-0'
            } `}
         >
            <Link href='/'>
               <a
                  onClick={() => setIsBurgerMenuOpen(false)}
                  className={`text-white relative mr-8 p-2 text-xl font-medium z-30 before:-z-10 before:h-0.5 before:bg-green  before:absolute before:inset-0 before:m-auto before:border-green before:w-full before:mb-0 before:ease-in-out before:duration-300 hover:before:h-full ${
                     pathname === '/' && 'active'
                  }`}
               >
                  Home
               </a>
            </Link>
            <Link href='/projects'>
               <a
                  onClick={() => setIsBurgerMenuOpen(false)}
                  className={`text-white relative mr-8 p-2 text-xl font-medium z-30 before:-z-10 before:h-0.5  before:bg-green before:absolute before:inset-0 before:m-auto before:border-green before:w-full before:mb-0 before:ease-in-out before:duration-300 hover:before:h-full ${
                     pathname === '/projects' && 'active'
                  }`}
               >
                  Projects
               </a>
            </Link>
            <Link href='/blog'>
               <a
                  onClick={() => setIsBurgerMenuOpen(false)}
                  className={`text-white relative mr-8 p-2 text-xl font-medium z-30 before:-z-10 before:h-0.5  before:bg-green before:absolute before:inset-0 before:m-auto before:border-green before:w-full before:mb-0 before:ease-in-out before:duration-300 hover:before:h-full ${
                     pathname === '/blog' && 'active'
                  }`}
               >
                  Blog
               </a>
            </Link>
         </div>
         <BurgerMenuButton
            isBurgerMenuOpen={isBurgerMenuOpen}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
         />
      </header>
   );
};

export default Navbar;
