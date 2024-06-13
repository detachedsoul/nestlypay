"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";

// Generate fake data for testing purposes
const generateRandomData = (numPoints: number, min: number, max: number) => {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
        const credit = Math.floor(Math.random() * (max - min + 1)) + min;

        const debit = Math.floor(Math.random() * (max - min + 1)) + min;

        data.push({ credit, debit });
    }

    return data;
};

const Statistics = (): JSX.Element => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip,
        Filler,
        Legend
    );

    const options = {
        responsive: true,
        maintainAspectRatio: false,
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
        plugins: {
            legend: {
                display: false,
            },
            filler: {
                propagate: false,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                fill: "start",
                data: labels.map(() => Math.random()),
                backgroundColor: 'rgba(12, 70, 211, 1)',
                borderColor: 'rgba(12, 70, 211, 1)',
                lineTension: 0.4,
                segment: {
                    backgroundColor: 'rgba(12, 70, 211, 0.1)',
                    borderColor: 'rgba(12, 70, 211, 1)',
                },
            },
        ],
    };

    return (
        <div className="overflow-x-auto custom-scrollbar w-full h-[250px] lg:h-[400px]">
            <Line data={data} options={options} />
        </div>
    );
};

export default Statistics;
