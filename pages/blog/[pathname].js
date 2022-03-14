import React from 'react';
import Head from 'next/head';

import { gql } from '@apollo/client';
import client from '../../services/apollo/apollo.js';

const BlogPostPage = post => {
   const { title, postDate, postTags } = post;
   return (
      <>
         <Head>
            <title>{title} | Blog | Jakub Tarabasz</title>
         </Head>
         <div className='flex flex-col items-center justify-center px-0 xl:px-60 lg:px-40 md:px-20'>
            <h1 className=' text-white text-4xl'>{title}</h1>
            <small className='text-white text-base'>{postDate}</small>
            <div className='mt-3'>
               {' '}
               <small className='text-gray-100 font-medium'>
                  {' '}
                  {postTags.map(skill => (
                     <span
                        key={skill}
                        className='inline-flex duration-500 items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white dark:bg-dark-gray bg-green rounded-full'
                     >
                        #{skill}
                     </span>
                  ))}
               </small>
            </div>
            <div
               dangerouslySetInnerHTML={{ __html: post.postContent.html }}
               className='post-wrapper text-white mt-28 w-full'
            ></div>
         </div>
      </>
   );
};

export default BlogPostPage;

export async function getStaticProps({ params }) {
   const { pathname } = params;
   const { data } = await client.query({
      query: gql`
         query MyQuery {
            blog_post(where: { pathname: "${pathname}" }) {
               id
               pathname
               title
               postDescription
               postDate
               id
               postTags
               postContent {
                  html
               }
            }
         }
      `,
   });

   const { blog_post: post } = data;

   return { props: post };
}

export async function getStaticPaths() {
   const { data } = await client.query({
      query: gql`
         query MyQuery {
            blogPosts {
               pathname
            }
         }
      `,
   });

   const { blogPosts } = data;

   let paths = [];

   blogPosts.forEach(post => {
      paths.push({
         params: {
            pathname: post.pathname,
         },
      });
   });
   return { paths, fallback: false };
}
