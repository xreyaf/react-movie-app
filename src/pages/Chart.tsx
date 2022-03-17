import React from 'react';
import { ContainerStyled } from '../components/styles/Container.styled';
import BarChart from '../components/charts/BarChart';
import DoughnutChart from '../components/charts/DoughnutChart';
import Player from '../components/Player';

function Chart() {
  return (
    <ContainerStyled>
      <BarChart />
      <br />
      <DoughnutChart />
      <br />
      <Player />
    </ContainerStyled>
  );
}

export default Chart;
