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
import Button from '../Button';
import { useTheme } from '@emotion/react';
import Heading from '../Heading';

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

const BarChart = () => {
  const ref = useRef<any>(null);
  const theme = useTheme();

  const downloadImage = useCallback(() => {
    const link = document.createElement('a');
    link.download = 'chart.png';
    link.href = ref.current.toBase64Image();
    link.click();
  }, []);

  const data = {
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

  return (
    <>
      <Heading>Гистограмма</Heading>
      <Button
        onClick={downloadImage}
        whileHover={{
          backgroundColor: theme.colors.primary500,
          cursor: 'pointer',
        }}
        whileTap={{ scale: 0.9, y: 3 }}
      >
        <Unicons.UilImageDownload size={16} />
        Скачать
      </Button>
      <br />
      <br />
      <Bar ref={ref} options={options} data={data} />
    </>
  );
};

export default BarChart;
