import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import Avatar from '@mui/material/Avatar';

const StyledHeaderContainer = styled.header`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: relative;
   padding: 1rem 0;
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
         border-bottom: 3px solid ${({ theme }) => theme.colors.green.primary};
      }
   }
`;

const Navbar = () => {
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
            <Link href='/'>Home</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/blog'>Blog</Link>
         </StyledNavbarWrapper>
      </StyledHeaderContainer>
   );
};

export default Navbar;
