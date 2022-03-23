import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.primary400};
  color: ${(props) => props.theme.colors.white100};
  padding: 1rem 2rem;
  font-size: 1rem;
  margin-bottom: 0.6rem;
  svg {
    align-self: baseline;
  }
`;

const Button = (props: any) => {
  return <StyledButton {...props} />;
};

export default Button;
