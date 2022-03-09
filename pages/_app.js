import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../infrastructure/style/index.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <div className='w-screen app-wrapper pb-5 min-h-screen bg-gray xl:p pt-52 px-8 xl:px-80 lg:px-40 md:px-20'>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
         </div>
      </>
   );
}

export default MyApp;
