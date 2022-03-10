import React from 'react';

const BurgerMenuButton = ({ isBurgerMenuOpen, setIsBurgerMenuOpen }) => {
   return (
      <div
         className={`cursor-pointer lg:hidden flex items-center content-center relative z-50 w-7 h-7 ${
            isBurgerMenuOpen && 'burger-active'
         }`}
         onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
      >
         <span
            className={
               'w-full h-0.5 relative bg-dark-gray dark:bg-white  duration-500 after:top-2 after:absolute after:w-full after:h-full after:bg-dark-gray after:dark:bg-white after:duration-500 before:absolute before:w-full before:h-full before:-top-2 dark:before:bg-white before:bg-dark-gray before:duration-500'
            }
         ></span>
      </div>
   );
};

export default BurgerMenuButton;
