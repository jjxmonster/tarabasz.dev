import React from 'react';
import styled from 'styled-components';

const StyledBurgerWrapper = styled.div`
   display: none;
   cursor: pointer;
   width: 26px;
   height: 26px;
   z-index: 1000000;
   align-items: center;
   justify-content: center;
   position: relative;
   @media (max-width: 1150px) {
      display: flex;
   }
   > span {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
      width: 100%;
      height: 2px;
      /* position: relative; */
      display: block;
      width: 100%;
      height: 2px;
      background-color: white;
      transition-duration: 0.25s;
   }
   > span:before,
   > span:after {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: white;
      content: '';
      transition-duration: 0.25s;
   }
   > span::before {
      top: -8px;
      opacity: ${({ open }) => (open ? '0' : '1')};
   }
   span::after {
      top: 8px;
      transform: ${({ open }) =>
         open ? 'rotate(90deg) translateX(-8px)' : 'rotate(0deg)'};
   }
`;

const BurgerMenuButton = ({ isBurgerMenuOpen, setIsBurgerMenuOpen }) => {
   return (
      <StyledBurgerWrapper
         open={isBurgerMenuOpen}
         onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
      >
         <span></span>
      </StyledBurgerWrapper>
   );
};

export default BurgerMenuButton;
