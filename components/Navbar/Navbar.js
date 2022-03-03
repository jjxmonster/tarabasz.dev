import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton.js';

const Navbar = () => {
   const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

   const { pathname } = useRouter();

   return (
      <header className='w-screen bg-gray fixed left-0 top-0 z-50 flex items-center justify-between shadow-sm shadow-black px-80 py-4'>
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
         <div>
            <Link href='/'>
               <a
                  className={`text-white relative mr-8 text-xl font-light before:border-b before:absolute before:inset-0 before:m-auto before:border-green before:w-0 before:-mb-1 before:ease-in-out before:duration-200 hover:before:w-full ${
                     pathname === '/' && 'active'
                  }`}
               >
                  Home
               </a>
            </Link>
            <Link href='/projects'>
               <a
                  className={`text-white relative mr-8 text-xl font-light before:border-b before:absolute before:inset-0 before:m-auto before:border-green before:w-0 before:-mb-1 before:ease-in-out before:duration-200 hover:before:w-full ${
                     pathname === '/projects' && 'active'
                  }`}
               >
                  Projects
               </a>
            </Link>
            <Link href='/blog'>
               <a
                  className={`text-white relative mr-8 text-xl font-light before:border-b before:absolute before:inset-0 before:m-auto before:border-green before:w-0 before:-mb-1 before:ease-in-out before:duration-200 hover:before:w-full ${
                     pathname === '/blog' && 'active'
                  }`}
               >
                  Blog
               </a>
            </Link>
         </div>
      </header>

      // z-index: 1000;
      // <StyledHeaderContainer>
      //    <StyledAccountWrapper>
      //       <Avatar
      //          sx={{ width: 56, height: 56 }}
      //          alt='TJ'
      //          src='/img/avatar.jpg'
      //       />{' '}
      //       <Link href='/'>Jakub Tarabasz</Link>
      //    </StyledAccountWrapper>
      //    <StyledNavbarWrapper open={isBurgerMenuOpen}>
      //       <Link href='/'>
      //          <a className={pathname === '/' && 'active'}>Home</a>
      //       </Link>
      //       <Link href='/projects'>
      //          <a className={pathname === '/projects' && 'active'}>Projects</a>
      //       </Link>
      //       <Link href='/blog'>
      //          <a className={pathname === '/blog' && 'active'}>Blog</a>
      //       </Link>
      //    </StyledNavbarWrapper>
      //    <BurgerMenuButton
      //       isBurgerMenuOpen={isBurgerMenuOpen}
      //       setIsBurgerMenuOpen={setIsBurgerMenuOpen}
      //    />
      // </StyledHeaderContainer>
   );
};

export default Navbar;
