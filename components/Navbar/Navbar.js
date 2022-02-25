import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

import Avatar from '@mui/material/Avatar';
import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton.js';

const StyledHeaderContainer = styled.header`
   width: 100vw;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: fixed;
   box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
   background-color: ${({ theme }) => theme.colors.blue.primary};
   padding: 1rem 20rem 1rem 20rem;
   @media (max-width: 1530px) {
      padding: 1rem 15rem 1rem 15rem;
   }
   @media (max-width: 1280px) {
      padding: 1rem 10rem 1rem 10rem;
   }
   @media (max-width: 1150px) {
      padding: 1rem 5rem 1rem 5rem;
   }
   @media (max-width: 640px) {
      padding: 1rem 2rem 1rem 2rem;
   }
`;
const StyledAccountWrapper = styled.div`
   display: flex;
   align-items: center;
   > a {
      font-size: 1.5rem;
      font-weight: 400;
      margin-left: 1rem;
      color: white;
      text-decoration: none;
   }
`;
const StyledNavbarWrapper = styled.div`
   > a {
      color: white;
      text-decoration: none;
      margin-right: 4rem;
      position: relative;
      font-size: 1.2rem;
      font-weight: 300;
      &:hover:after {
         width: 100%;
      }
      &:after {
         transition: 0.2s ease-in-out;
         position: absolute;
         width: 0%;
         height: 100%;
         bottom: -0.5rem;
         top: 0;
         right: 0;
         left: 0;
         margin: auto;
         content: '';
         border-bottom: 2px solid ${({ theme }) => theme.colors.green.primary};
      }
   }
`;

const Navbar = () => {
   const { pathname } = useRouter();
   return (
      <StyledHeaderContainer>
         <StyledAccountWrapper>
            <Avatar
               sx={{ width: 56, height: 56 }}
               alt='TJ'
               src='/img/avatar.jpg'
            />{' '}
            <Link href='/'>Jakub Tarabasz</Link>
         </StyledAccountWrapper>
         <StyledNavbarWrapper>
            <Link href='/'>
               <a className={pathname === '/' && 'active'}>Home</a>
            </Link>
            <Link href='/projects'>
               <a className={pathname === '/projects' && 'active'}>Projects</a>
            </Link>
            <Link href='/blog'>
               <a className={pathname === '/blog' && 'active'}>Blog</a>
            </Link>
         </StyledNavbarWrapper>
         <BurgerMenuButton />
      </StyledHeaderContainer>
   );
};

export default Navbar;
