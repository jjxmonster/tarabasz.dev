import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Navbar from '../components/Navbar/Navbar.js';

import { theme } from '../infrastructure/theme.js';
import '../infrastructure/globalStyles.css';

const AppWrapper = styled.div`
   width: 100vw;
   min-height: 100vh;
   padding: 0 20rem;
   background-color: ${({ theme }) => theme.colors.gray.primary};
   @media (max-width: 1530px) {
      padding: 0 15rem;
   }
   @media (max-width: 1280px) {
      padding: 0 10rem;
   }
   @media (max-width: 1150px) {
      padding: 0 5rem;
   }
   @media (max-width: 640px) {
      padding: 0 2rem;
   }
`;

function MyApp({ Component, pageProps }) {
   return (
      <ThemeProvider theme={theme}>
         <AppWrapper>
            <Navbar />
            <Component {...pageProps} />
         </AppWrapper>
      </ThemeProvider>
   );
}

export default MyApp;
