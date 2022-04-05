import React from 'react';
import styled, { Interpolation } from '@emotion/styled';
import { Theme } from '@emotion/react';
import { JSX } from '@emotion/react/jsx-runtime';

type FlexProps = {
  direction?: string;
  align?: string;
  justify?: string;
  gap?: string;
};

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props: FlexProps) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  gap: ${(props) => props.gap || '0'};
`;

const Flex = (
  props: JSX.IntrinsicAttributes & { css?: Interpolation<Theme> } & {
    theme?: Theme | undefined;
    as?: React.ElementType<any> | undefined;
  } & FlexProps &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }
) => {
  return <StyledFlex {...props} />;
};

export default Flex;
