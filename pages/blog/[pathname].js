import React, { useEffect } from 'react';
import Head from 'next/head';

import BlogTagComponent from '../../components/BlogTagComponent';

import { gql } from '@apollo/client';
import client from '../../services/apollo/apollo.js';

import { animationsMount } from '../../animations/animations.js';

const BlogPostPage = post => {
   const { title, postDate, postTags, postContent } = post;

   useEffect(() => {
      animationsMount('.blog-post-container');
   }, []);
   return (
      <>
         <Head>
            <title>{title} | Blog | Jakub Tarabasz</title>
         </Head>
         <div className='blog-post-container'>
            <div className='flex flex-col items-center justify-center'>
               <h1 className='text-gray dark:text-white text-4xl'>{title}</h1>
               <small className='text-dark-gray dark:text-white text-base'>
                  {postDate}
               </small>
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
               <div className='text-white mt-28 w-full lg:w-blog'>
                  {postContent.raw.children.map(item => (
                     <BlogTagComponent key={item} item={item} />
                  ))}
               </div>
            </div>
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
                  raw
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
