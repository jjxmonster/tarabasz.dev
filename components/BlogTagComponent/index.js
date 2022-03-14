import React from 'react';

const BlogTagComponent = ({ item }) => {
   const { type, children } = item;

   switch (type) {
      case 'paragraph':
         return (
            <p className='text-xl font-medium dark:font-light text-black dark:text-white'>
               {children[0].text}
            </p>
         );
      case 'heading-four':
         return (
            <p className='text-xl font-medium dark:font-light text-black dark:text-white'>
               {children[0].text}
            </p>
         );
      case 'code-block':
         return (
            <pre className='my-8 bg-lightgray  dark:bg-dark-gray text-black dark:text-white  p-8 overflow-scroll'>
               <code>{children[0].text}</code>
            </pre>
         );
      default:
         return <span>{children[0].text}</span>;
   }
};

export default BlogTagComponent;
