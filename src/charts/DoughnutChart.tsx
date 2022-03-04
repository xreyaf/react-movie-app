import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import useAxios from "../hooks/useAxios";
import { ICoin, RootObject } from "../features/movies/types";

ChartJS.register(ArcElement, Tooltip, Legend);

const baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiKey = "coinranking8a3f6f2ffac3f16a5472c2261db10840b0ac3ea6fd45496e";

const DoughnutChart = () => {
  const { response, loading, error } = useAxios<RootObject>({
    method: "get",
    url: `${proxyUrl}${baseUrl}`,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${apiKey}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = {
    labels: response?.data.coins.map((x: ICoin) => x.name),
    datasets: [
      {
        data: response?.data.coins.map((x) => x.marketCap),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
  };
  return (
    <>
      <h1>Doughnut Chart</h1>
      <Doughnut style={{ maxHeight: "500px" }} data={data} options={options} />
    </>
  );
};

export default DoughnutChart;
