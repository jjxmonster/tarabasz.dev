import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../infrastructure/style/index.css';

import { ThemeProvider } from '../services/theme/ThemeContext.js';

function MyApp({ Component, pageProps }) {
   return (
      <ThemeProvider>
         <div className='w-screen app-wrapper pb-5 min-h-screen bg-white dark:bg-gray  bg-white xl:p duration-500 pt-52 px-8 xl:px-80 lg:px-40 md:px-20'>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
         </div>
      </ThemeProvider>
   );
}

export default MyApp;
