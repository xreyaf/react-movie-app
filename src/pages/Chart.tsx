import React, { useCallback, useRef } from "react";
import { ContainerStyled } from "../components/styles/Container.styled";
import { ButtonStyled } from "../components/styles/Button.styled";
import { theme } from "../styles/theme";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend, BarElement
} from "chart.js";

import faker from "@faker-js/faker";
// @ts-ignore
import * as Unicons from "@iconscout/react-unicons";


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

const labels: string[] = makeArray(50, faker.random.word);

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: `${theme.colors.warning400}`,
      backgroundColor: `${theme.colors.warning500}`
    }
  ]

};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: "Words usage"
    }
  },
  hoverRadius: 15,
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
};


const Chart = () => {

  const ref = useRef<any>(null);

  const dowloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = ref.current.toBase64Image();
    console.log(typeof ref.current);
    link.click();
  }, []);

  return (

    <ContainerStyled>
      <h1>Chart</h1>
      <ButtonStyled onClick={dowloadImage}
                    whileHover={{ y: -3, backgroundColor: theme.colors.primary500, cursor: "pointer" }}>
        <Unicons.UilImageDownload size={16} />
        Download
      </ButtonStyled>
      <br />
      <br />
      <Bar ref={ref} options={options} data={data} />
    </ContainerStyled>
  );
};

export default Chart;
