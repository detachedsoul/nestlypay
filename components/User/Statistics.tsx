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
            }
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

    const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
                    backgroundColor: 'rgba(12, 70, 211, 0.05)',
                    borderColor: 'rgba(12, 70, 211, 1)',
                },
            },
        ],
    };

    return (
		<div className="overflow-x-auto custom-scrollbar w-full h-[300px] lg:h-[400px]">
			<Line
				data={data}
				options={options}
			/>
		</div>
	);
};

export default Statistics;
