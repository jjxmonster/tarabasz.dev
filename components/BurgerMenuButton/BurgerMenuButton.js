import React from 'react';
import styled from 'styled-components';

const StyledBurgerWrapper = styled.div`
   width: 26px;
   height: 26px;
   display: flex;
   align-items: center;
   justify-content: center;
   > span {
      width: 100%;
      height: 2px;
      position: relative;
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
   }
   > span::before {
      top: -8px;
   }
   span::after {
      top: 8px;
   }
`;

const BurgerMenuButton = () => {
   return (
      <StyledBurgerWrapper>
         <span></span>
      </StyledBurgerWrapper>
   );
};

export default BurgerMenuButton;
