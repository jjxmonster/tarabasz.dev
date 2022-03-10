import React, { useContext } from 'react';

import { ThemeContext } from '../../services/theme/ThemeContext.js';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const ThemeToggleButton = () => {
   const { theme, setTheme } = useContext(ThemeContext);
   return (
      <div className='transition duration-500 ease-in-out rounded-full p-2'>
         {/* {theme === 'dark' ? (
            <LightModeIcon
               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
               className='text-white dark:text-gray-400 text-2xl cursor-pointer'
            />
         ) : (
            <NightlightIcon
               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
               className='text-gray-500 dark:text-gray-400 text-2xl cursor-pointer'
            />
         )} */}
         <div
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`w-8 h-8 rounded-full relative pointer ${
               theme === 'dark' ? 'darkmode' : 'lightmode'
            } before:absolute before:w-6 before:h-6 overflow-hidden cursor-pointer before:-top-px before:-left-px	 before:bg-gray before:duration-500 before:rounded-full before:duration:500 ${
               theme === 'light' &&
               'before:-translate-x-8 before:-translate-y-8'
            } `}
         ></div>
      </div>
   );
};

export default ThemeToggleButton;
