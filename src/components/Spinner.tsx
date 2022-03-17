import React from 'react';
import { FlapperSpinner } from 'react-spinners-kit';
import styled from '@emotion/styled';
import theme from '../styles/theme';

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;
function Spinner() {
  return (
    <LoadingContainer>
      <FlapperSpinner size={78} color={`${theme.colors.primary500}`} />
    </LoadingContainer>
  );
}

export default Spinner;
