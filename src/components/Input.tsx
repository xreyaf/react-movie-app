import React, { ChangeEventHandler, FocusEventHandler } from 'react';

// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import styled from '@emotion/styled';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { css } from '@emotion/react';
import { theme } from '../styles/theme';

const InputWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
  margin-bottom: 1.3rem;

  label {
    position: absolute;
    pointer-events: none;
    top: 1.75rem;
    left: 4rem;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.grey600};
    cursor: text;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

const errorCss = css`
  input {
    border: 3px solid ${theme.colors.error600};

    &:focus {
      border: 3px solid ${theme.colors.error600};
    }
  }
  label {
    color: ${theme.colors.error500};
  }
`;

const StyledInput = styled.input`
  background: transparent;
  background: ${(props) => props.theme.colors.black10};
  z-index: 3;
  width: 100%;
  height: 5rem;
  padding: 1rem 1.3rem 0.3rem 3.9rem;
  font-size: 1.3rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.grey400};
  border: 3px solid ${(props) => props.theme.colors.grey800};
  outline: none;

  &:focus {
    border: 3px solid ${(props) => props.theme.colors.primary500};
    & + label {
      transform: translateY(-1.2rem);
      font-size: 1rem;
    }

    &::placeholder {
      opacity: 0.5;
      transition: all 0.2s;
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

const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 1.8rem;
  left: 1.5rem;
  color: ${(props) => props.theme.colors.grey600};
`;

const Input = ({
  name,
  icon,
  type,
  label,
  placeholder,
  onChange,
  onBlur,
  error,
}: {
  name?: string;
  icon?: ReactJSXElement;
  type?: string;
  label?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  error?: boolean;
}) => {
  return (
    <InputWrapper css={error ? errorCss : null}>
      <IconWrapper>{icon}</IconWrapper>

      <StyledInput
        name={name}
        id="input"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor="input">{label} </label>
    </InputWrapper>
  );
};

export default Input;
