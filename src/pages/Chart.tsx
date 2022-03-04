import React from "react";
import { ContainerStyled } from "../components/styles/Container.styled";
import BarChart from "../charts/BarChart";
import DoughnutChart from "../charts/DoughnutChart";

const Chart = () => {
  return (
    <ContainerStyled>
      <BarChart />
      <br />
      <DoughnutChart />
    </ContainerStyled>
  );
};

export default Chart;
