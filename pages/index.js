import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

const StyledHomePageWrapper = styled.div`
   width: 100%;
   height: 100%;
`;
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
const StyledSocialButtonsWrapper = styled.div`
   width: 100%;
`;
const StyledSocialButton = styled(IconButton)`
   color: white;
   opacity: 0.85;
   > svg,
   span {
      font-size: 2rem;
      font-weight: 500;
      transition: 0.2s ease;
   }
   &:hover svg,
   &:hover span {
      color: ${({ theme }) => theme.colors.green.primary};
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
         <StyledHomePageWrapper>
            <StyledHeaderWrapper>
               <h1>Hi, I{`'`}m Jakub.👋</h1>
               <h3>I{`'`}m a frontend developer at Finseka</h3>
               <StyledSocialButtonsWrapper>
                  <StyledSocialButton onClick={() => handleButtonClick('git')}>
                     <GitHubIcon />
                  </StyledSocialButton>
                  <StyledSocialButton
                     onClick={() => handleButtonClick('linkedin')}
                  >
                     <LinkedInIcon />
                  </StyledSocialButton>
                  <StyledSocialButton onClick={() => handleButtonClick('cv')}>
                     <span>CV</span>
                  </StyledSocialButton>
               </StyledSocialButtonsWrapper>
            </StyledHeaderWrapper>
            <StyledAboutContainer>
               <h2>About me</h2>
               <p>
                  My name is Kuba, I{`'`}m 20 years old. I{`'`}m self-taught
                  frontend developer working with React. My adventure with
                  programming started in 1st grade of high school with C++. I
                  {`'`}ve been learning creating website application for three
                  years. I{`'`}m working with React, I started learning it in
                  March 2020. So far i have created few apps with this library,
                  some of them are more, some of them are less advanced, all of
                  them you can see on my github account
                  <span className='border-hover-bottom'>
                     {' '}
                     https://github.com/jjxmonster
                  </span>{' '}
                  Present I work as Frontend developer at Finseka.
               </p>
               <p>
                  I always want to learn more and do more. I{`'`}m hard working,
                  fast learner and curious!
               </p>{' '}
               *
            </StyledAboutContainer>
         </StyledHomePageWrapper>
      </>
   );
}
