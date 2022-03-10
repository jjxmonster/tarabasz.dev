import React, { useContext } from 'react';

import { ThemeContext } from '../../services/theme/ThemeContext.js';

const ThemeToggleButton = () => {
   const { theme, setTheme } = useContext(ThemeContext);
   return (
      <div className='transition duration-500 ease-in-out rounded-full p-2'>
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
