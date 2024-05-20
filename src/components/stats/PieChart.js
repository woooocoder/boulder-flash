import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ climbsByRating }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const labels = Object.keys(climbsByRating).map(rating => `V${rating}`);
        const data = Object.values(climbsByRating);

        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
            type: "pie",
            data: {
                labels: labels,
                datasets: [{
                    label: 'Climbs by Rating',
                    data: data,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'] // You can add more colors if needed
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#c6c6c6'
                        }
                    }
                }
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [climbsByRating]);

    return <canvas ref={chartRef} />;
};

export default PieChart;
