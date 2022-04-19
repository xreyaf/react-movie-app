import React, { useEffect, useState } from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

// const HeaderStyled = styled.header`
//   position: fixed;
//   width: 100%;
//   height: 5rem;
//   top: 0;
//   left: 0;
//   z-index: 100;
//   background: ${(props) => props.theme.colors.grey900_80};
//   backdrop-filter: blur(24px);
// `;

export const Logo = styled(motion.img)`
  max-width: 2.5rem;
`;

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 817;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return <> {width < breakpoint ? <MobileNavbar /> : <Navbar />}</>;
};

export default Header;
