import React from 'react';
import { useRouter } from 'next/router';

const BlogPostsListItem = ({ post }) => {
   const {
      pathname,
      title,
      postDescription,
      postDate,
      id,
      postTags,
      postContent,
   } = post;

   const { push } = useRouter();

   return (
      <div className='w-full py-5 mb-10'>
         <h3 className='text-2xl lg:text-3xl font-medium text-gray dark:text-white relative mb-0'>
            {title}
         </h3>
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

         <p className='text-xl font-light text-gray dark:text-white mt-2'>
            {postDescription}
         </p>
         <button
            aria-label='github'
            onClick={() => push(`/blog/${pathname}`)}
            className='leading-1  relative font-bold text-center px-1 text-gray-200 text-xl mt-2 pointer z-30 transition ease-in-out duration-250 hover:dark:text-white  before:z-negative before:absolute before:bottom-0 before:w-full before:h-1 before:bg-green before:right-0 before:ease-in-out before:duration-500 hover:before:h-full'
         >
            LEARN MORE
         </button>
      </div>
   );
};

export default BlogPostsListItem;
