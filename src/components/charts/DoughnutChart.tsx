import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import useAxios from "../../hooks/useAxios";
import { ICoin, RootObject } from "../../features/movies/types";


ChartJS.register(ArcElement, Tooltip, Legend);

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";
const rapidApiKey = "9c749be5bbmshbf2b6070c4ac61ep1fb823jsnbd14b8a6500c";

//const baseUrl = "https://api.coinranking.com/v2/coins";
//const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//const apiKey = "coinranking8a3f6f2ffac3f16a5472c2261db10840b0ac3ea6fd45496e";

const DoughnutChart = () => {
  const { response, loading, error } = useAxios<RootObject>({
    method: "GET",
    url: `${baseUrl}`,
    params: {
      timePeriod: "24h",
      limit: "10"
    },
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": `${rapidApiKey}`
      // 'Content-Type': 'application/json',
      // 'X-My-Custom-Header': `${apiKey}`,
      // 'Access-Control-Allow-Origin': "*"
    }
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
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true
  };
  return (
    <>
      <h1>Doughnut Chart</h1>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Some error occurred...</h3>}
      <Doughnut style={{ maxHeight: "500px" }} data={data} options={options} />
    </>
  );
};

export default DoughnutChart;
