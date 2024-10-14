import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

interface SensorDataChartProps {
  sensorData: { time: number; acceleration: number }[];
  currentTime: number;
}

const SensorDataChart: React.FC<SensorDataChartProps> = ({ sensorData, currentTime }) => {
  const chartData = useMemo(() => ({
    datasets: [
      {
        label: 'Acceleration',
        data: sensorData.map(d => ({ x: d.time, y: d.acceleration })),
        borderColor: 'rgb(79, 70, 229)',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  }), [sensorData]);

  const chartOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'linear' as const,
        title: {
          display: true,
          text: 'Time (s)',
          color: '#fff',
        },
        min: Math.max(0, currentTime - 60),
        max: Math.max(currentTime + 60, 120),
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Acceleration (m/s²)',
          color: '#fff',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#fff',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: 'Acceleration Data',
        color: '#fff',
        font: {
          size: 16,
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            xMin: currentTime,
            xMax: currentTime,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
          }
        }
      }
    },
  }), [currentTime]);

  return (
    <div className="h-[500px]">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default SensorDataChart;