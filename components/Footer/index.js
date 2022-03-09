import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
   return (
      <div className='w-full mt-28 flex-col flex items-center justify-between py-5'>
         <div className=' flex items-center justify-start'>
            <button
               type='button'
               className='text-white hover:text-green ease-in-out duration-500 mr-2'
            >
               <a
                  href='https://github.com/jjxmonster'
                  rel='noreferrer'
                  target='_blank'
               >
                  <GitHubIcon className='!text-2xl' />
               </a>
            </button>
            <button
               type='button'
               className='text-white hover:text-green ease-in-out duration-500 mr-2'
            >
               <a
                  href='https://www.linkedin.com/in/jakub-tarabasz-663b2b200/'
                  rel='noreferrer'
                  target='_blank'
               >
                  <LinkedInIcon className='!text-2xl' />
               </a>
            </button>
            <button
               type='button'
               className='text-white hover:text-green ease-in-out duration-500 mr-2'
            >
               <a
                  href='https://tarabasz.dev/curriculum-tarabasz-jakub.pdf'
                  rel='noreferrer'
                  target='_blank'
               >
                  <span className='text-2xl font-medium'>CV</span>
               </a>
            </button>
         </div>

         <p className=' text-white '>
            Made with ❤{' '}
            <a
               className='relative z-30 before:absolute cursor-pointer before:bottom-0 before:w-full before:bg-green before:h-1 before:duration-500 before:ease-in-out hover:before:h-full before:-z-10'
               href='mailto:kubatarabasz.dev@gmail.com'
            >
               kubatarabasz.dev@gmail.com
            </a>
         </p>

         <p className=' text-white '>© 2022</p>
      </div>
   );
};

export default Footer;
