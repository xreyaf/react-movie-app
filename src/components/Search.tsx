import React, { ChangeEventHandler } from 'react';

// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import styled from '@emotion/styled';

const InputWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
  margin-bottom: 3rem;

  label {
    position: absolute;
    top: 1.75rem;
    left: 4rem;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.grey600};
    cursor: text;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
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

const Search = ({
  onChange,
  label,
  placeholder,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  placeholder: string;
}) => {
  return (
    <InputWrapper>
      <IconWrapper>
        <Unicons.UilSearch size={24} />
      </IconWrapper>
      <StyledInput
        name="search"
        id="search"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <label htmlFor="search">{label}</label>
    </InputWrapper>
  );
};

export default Search;
