import React from 'react';
import Head from 'next/head';

const Blog = () => {
   return (
      <>
         <Head>
            <title>Blog | Jakub Tarabasz</title>
         </Head>

         <div className='w-full flex items-start justify-center flex-col mb-24'>
            <h1 className='font-serif text-gray dark:text-white text-4xl lg:text-5xl font-semibold	leading-10 mt-5 mb-2.5'>
               Blog 📝
            </h1>
            <h3 className='text-gray dark:text-white text-3xl lg:text-4xl mt-5 mb-2.5'>
               I share my knowledge here and things that can make someone{`'`}s
               life easier
            </h3>
            <h3 className='text-gray dark:text-white text-3xl lg:text-4xl mt-5 mb-2.5'>
               soon...
            </h3>
         </div>
      </>
   );
};

export default Blog;
