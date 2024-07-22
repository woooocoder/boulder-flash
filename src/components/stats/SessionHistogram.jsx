import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SessionHistogram = ({ sessionTimes, averageSessionTime }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
            type: "bar",
            data: {
                labels: sessionTimes.map((_, index) => ` `), 
                datasets: [{
                    label: 'Session Times',
                    data: sessionTimes, 
                    backgroundColor: '#36A2EB'
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            color: '#c6c6c6'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#c6c6c6'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false 
                    },
                    annotation: {
                        annotations: [{
                            type: 'line',
                            mode: 'horizontal',
                            scaleID: 'x',
                            value: averageSessionTime,
                            borderColor: '#FF6384',
                            borderWidth: 2,
                            label: {
                                // content: `Average Session Time: ${averageSessionTime}`,
                                enabled: true,
                                position: 'right',
                                color: '#FF6384'
                            }
                        }]
                    }
                }
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [sessionTimes, averageSessionTime]);

    return <canvas ref={chartRef} />;
};

export default SessionHistogram;
