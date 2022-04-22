import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
import useAxios from '../../hooks/useAxios';
import { ICoin, RootObject } from '../../features/movies/types';
import Spinner from '../Spinner';
import Heading from '../Heading';

ChartJS.register(ArcElement, Tooltip, Legend);

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';
const rapidApiKey = process.env.RADAPI_KEY;

// const baseUrl = "https://api.coinranking.com/v2/coins";
// const proxyUrl = "https://cors-anywhere.herokuapp.com/";
// const apiKey = process.env.COIN_KEY;

function DoughnutChart() {
  const { response, loading, error } = useAxios<RootObject>({
    method: 'GET',
    url: `${baseUrl}`,
    params: {
      timePeriod: '24h',
      limit: '10',
    },
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': `${rapidApiKey}`,
      // 'Content-Type': 'application/json',
      // 'X-My-Custom-Header': `${apiKey}`,
      // 'Access-Control-Allow-Origin': "*"
    },
  });

  const data = {
    labels: response?.data.coins.map((x: ICoin) => x.name),
    datasets: [
      {
        data: response?.data.coins.map((x) => x.marketCap),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
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
      <Heading>Круговая диаграмма</Heading>
      {loading && <Spinner />}
      {error && <Heading>Some error occurred...</Heading>}
      <Doughnut style={{ maxHeight: '500px' }} data={data} options={options} />
    </>
  );
}

export default DoughnutChart;
