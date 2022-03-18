import React, { useEffect, useState } from 'react';

const useInView = <T extends Element>(
  target: React.RefObject<HTMLInputElement>
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver>();

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    };

    observer?.disconnect();

    if (target.current) {
      const _observer = new IntersectionObserver(handleIntersect);
      _observer.observe(target.current);
      setObserver(_observer);
    }
  }, [target.current]);

  useEffect(() => {
    return () => {
      observer?.disconnect();
    };
  }, []);

  return isIntersecting;
};

export default useInView;
