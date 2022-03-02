import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { motion } from "framer-motion";

export const ButtonStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background: ${theme.colors.primary400};
  color: ${theme.colors.white100};
  padding: 1rem 2rem;
  font-size: 1rem;
  margin-bottom: .6rem;
  svg{
    align-self: baseline;
  }
`;
