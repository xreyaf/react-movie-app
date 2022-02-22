import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const InputStyled = styled.div`
  position: relative;
  border-radius: 1rem;
  margin-bottom: 3rem;

  label {
    position: absolute;
    top: 2rem;
    left: 4rem;
    font-size: 1.5rem;
    color: ${theme.colors.grey600};
    cursor: text;
    user-select: none;
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);

  }
`;

export const InputContent = styled.input`
  background: transparent;
  background: ${theme.colors.black10};
  z-index: 3;
  width: 100%;
  height: 5rem;
  padding: 2rem 1.3rem 1rem 3.9rem;
  font-size: 1.3rem;
  border-radius: 1rem;
  color: ${theme.colors.grey400};
  border: 3px solid ${theme.colors.grey800};
  outline: none;

  &:focus {
    border-color: ${theme.colors.primary500};

    & + label {
      transform: translateY(-1.2rem);
      font-size: 1rem;
    }

    &::placeholder {
      opacity: 0.5;
      transition: all .2s
    }

  }

  &::placeholder {
    opacity: 0;
  }

  &:not(:placeholder-shown) + label {
    transform: translateY(-1.2rem);
    font-size: 1rem;
  }
`;

export const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 2rem;
  left: 1.5rem;
  color: ${theme.colors.grey600};
`;