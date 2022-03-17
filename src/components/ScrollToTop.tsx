import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: ({ children }: { children: any }) => any = ({
  children,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};
export default ScrollToTop;
