import React from 'react';
import Head from 'next/head';

import { gql } from '@apollo/client';
import client from '../../services/apollo/apollo.js';
import BlogPostsListItem from '../../components/BlogPostsListItem/index.js';

const Blog = ({ blogPosts }) => {
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
         <div className='pb-5 '>
            <h4 className=' text-dark-gray dark:text-lightgray w-full border-b border-lightgray text-center leading-small mt-5 mb-10'>
               <span className='px-5 bg-white duration-500 dark:bg-gray tracking-widest'>
                  latest
               </span>
            </h4>
         </div>
         {blogPosts.map(post => (
            <BlogPostsListItem key={post.id} post={post} />
         ))}
      </>
   );
};

export default Blog;

export async function getStaticProps() {
   const { data } = await client.query({
      query: gql`
         query MyQuery {
            blogPosts {
               pathname
               title
               postDescription
               id
               postTags
            }
         }
      `,
   });

   const { blogPosts } = data;

   return {
      props: {
         blogPosts,
      },
   };
}
