import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
const Header = () => {

  const StyledUL = styled.div`
  display:flex;
  font-size:20px;
  gap:50px;
  `
  return (
    <header>
      <div className="logo">
        <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
      </div>
      <div>
        <StyledUL>
        <Link to="/about">  <li className='links'>About Me</li> </Link>
        <Link to="/projects">   <li className='links'>My Projects</li> </Link>
        <Link to="/contact">  <li className='links'>Get in touch</li> </Link>
        </StyledUL>
      </div>
    </header>
  )
}

export default Header;