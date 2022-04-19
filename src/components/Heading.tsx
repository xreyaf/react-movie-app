import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StyledHeading = styled(motion.h1)`
  font-weight: 600;
  font-size: 3.8rem;
  line-height: 5rem;
  color: ${({ theme }) => theme.colors.grey50};
  @media ${({ theme }) => theme.media.largeDesktop} {
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  @media ${({ theme }) => theme.media.desktop} {
    font-weight: 600;
    font-size: 3.4rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  @media ${({ theme }) => theme.media.tablet} {
    font-weight: 600;
    font-size: 3rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  @media ${({ theme }) => theme.media.phone} {
    font-weight: 600;
    font-size: 2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const Heading = (props: any) => {
  return <StyledHeading {...props} />;
};

export default Heading;
