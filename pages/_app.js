import React from 'react';

import Navbar from '../components/Navbar/Navbar.js';

import '../infrastructure/style/index.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <div className='w-screen min-h-screen bg-gray px-80 xl:p pt-52'>
            <Navbar />
            <Component {...pageProps} />
         </div>
      </>
   );
}

export default MyApp;
