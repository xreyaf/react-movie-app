import React, { MouseEventHandler, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import { css, Global } from '@emotion/react';

const portalRoot = document.getElementById('portal-root')!;

const PopupBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black75};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: ${(props) => props.theme.colors.grey900_80};
  width: 50vw;
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  backdrop-filter: blur(24px);
`;

const PopupClose = styled.div`
  color: ${({ theme }) => theme.colors.grey300};
  background-color: ${({ theme }) => theme.colors.black30};
  border-radius: 0.5rem;
  top: 0.6rem;
  right: 0.6rem;
  position: absolute;
  padding: 0.5rem 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white75};
    transition: all 0.2s;
  }

  svg {
    display: block;
  }
`;

const ScrollDisabler = css`
  body {
    overflow-y: hidden;
  }
`;

const Modal = ({
  isActive,
  close,
  children,
}: {
  isActive: boolean;
  close: MouseEventHandler<HTMLDivElement>;
  children: any;
}) => {
  if (!isActive) return null;

  const contentRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (!isActive) return;

    function listener(e: any) {
      if (contentRef.current.contains(e.target)) return;
      close(e);
    }

    window.addEventListener('click', listener);
  }, [isActive]);

  return ReactDOM.createPortal(
    <>
      <PopupBackground>
        <PopupContent ref={contentRef}>
          <PopupClose onClick={close}>
            <Unicons.UilMultiply size={20} />
          </PopupClose>
          {children}
        </PopupContent>
      </PopupBackground>
      <Global styles={ScrollDisabler} />
    </>,
    portalRoot
  );
};

export default Modal;
