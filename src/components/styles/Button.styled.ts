import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { motion } from "framer-motion";

export const ButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background: ${theme.colors.primary400};
  color: ${theme.colors.white100};
  padding: 1rem 3rem;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: .6rem;
`;
