import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
   render() {
      return (
         <Html>
            <Head>
               <link rel='preconnect' href='https://fonts.googleapis.com' />
               <link
                  rel='preconnect'
                  href='https://fonts.gstatic.com'
                  crossOrigin={'true'}
               />
               <link
                  href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap'
                  rel='stylesheet'
               />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
