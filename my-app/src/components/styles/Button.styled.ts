import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const Button = styled.button`
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
  &:hover {
    background: ${theme.colors.primary500};
    transition: 0.5s;
    cursor: pointer;
  }
  &:focus {
    border: none;
    outline: none;
    background: ${theme.colors.primary400};
    box-shadow: 0 0 0 4px ${theme.colors.primary500_10};
  }
`;
