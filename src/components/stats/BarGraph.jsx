import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarGraph = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const labels = Object.keys(data).map(rating => `V${rating}`);
        const completionRates = Object.values(data);

        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: '%',
                    data: completionRates,
                    backgroundColor: '#36A2EB'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#c6c6c6'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#c6c6c6'
                        }
                    }
                },
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
    }, [data]);

    return <canvas ref={chartRef} />;
};

export default BarGraph;
