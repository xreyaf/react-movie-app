import React, { useCallback, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';

import faker from '@faker-js/faker';
// @ts-ignore
import * as Unicons from '@iconscout/react-unicons';
import theme from '../../styles/theme';
import { ButtonStyled } from '../styles/Button.styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

function makeArray<T>(length: number, generator: () => T): T[] {
  return Array.from({ length }, generator);
}

const labels: string[] = makeArray(10, faker.random.word);

export const data = {
  labels,
  datasets: [
    {
      label: 'First Dataset',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 500 })),
      borderColor: `${theme.colors.warning400}`,
      backgroundColor: `${theme.colors.warning500}`,
    },
    {
      label: 'Second Dataset',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 500 })),
      borderColor: `${theme.colors.error400}`,
      backgroundColor: `${theme.colors.error500}`,
    },
    {
      label: 'Third Dataset',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 500 })),
      borderColor: `${theme.colors.success400}`,
      backgroundColor: `${theme.colors.success500}`,
    },
  ],
};

export const options = {
  responsive: true,

  hoverRadius: 15,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

function BarChart() {
  const ref = useRef<any>(null);

  const downloadImage = useCallback(() => {
    const link = document.createElement('a');
    link.download = 'chart.png';
    link.href = ref.current.toBase64Image();
    console.log(typeof ref.current);
    link.click();
  }, []);
  return (
    <>
      <h1>Bar Chart</h1>
      <ButtonStyled
        onClick={downloadImage}
        whileHover={{
          y: -3,
          backgroundColor: theme.colors.primary500,
          cursor: 'pointer',
        }}
      >
        <Unicons.UilImageDownload size={16} />
        Download
      </ButtonStyled>
      <br />
      <br />
      <Bar ref={ref} options={options} data={data} />
    </>
  );
}

export default BarChart;
