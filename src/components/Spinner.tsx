import React from 'react';
import { FlapperSpinner } from 'react-spinners-kit';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;
const Spinner = () => {
  const theme = useTheme();

  return (
    <LoadingContainer>
      <FlapperSpinner size={78} color={`${theme.colors.primary500}`} />
    </LoadingContainer>
  );
};

export default Spinner;
