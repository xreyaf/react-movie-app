import React from 'react';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import BarChart from '../components/charts/BarChart';
import DoughnutChart from '../components/charts/DoughnutChart';
import Player from '../components/Player';
import useNetworkState from '../hooks/useNetworkState';
import theme from '../styles/theme';
import Container from '../components/Container';

const Chart = () => {
  const isOnline = useNetworkState();
  return (
    <Container>
      <BarChart />
      <br />
      <DoughnutChart />
      <br />
      <Player />
      <br />
      <h5>Network state:</h5>
      {isOnline ? (
        <Unicons.UilCloudCheck color={theme.colors.success500} />
      ) : (
        <Unicons.UilCloudTimes color={theme.colors.error500} />
      )}
    </Container>
  );
};

export default Chart;
