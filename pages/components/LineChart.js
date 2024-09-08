

// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   Title,
// } from 'chart.js';

// // Register required components for Line chart
// ChartJS.register(
//   LineElement,
//   PointElement,
//   Tooltip,
//   Legend,
//   CategoryScale,
//   LinearScale,
//   Title,
// );

// const LineChart = ({ data }) => {
//   const chartData = {
//     labels: data.labels,
//     datasets: [
//       {
//         label: 'Sales Over Time',
//         data: data.values,
//         fill: false,
//         borderColor: '#36A2EB',

//       },
//     ],
//   };

//   return (
//     <div className="bg-gradient-to-r from-slate-200 to-indigo-300 rounded-lg shadow-md mt-4 h-full  flex justify-center items-center ">
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default LineChart;


import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
} from 'chart.js';

// Register required components for Line chart
ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
);

const LineChart = ({ data = {} }) => {
  // Ensure 'labels' and 'values' are defined, otherwise set to empty arrays
  const chartData = {
    labels: data.labels || [],
    datasets: [
      {
        label: 'Sales Over Time',
        data: data.values || [],
        fill: false,
        borderColor: '#36A2EB',
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-slate-200 to-indigo-300 rounded-lg shadow-md mt-4 h-full flex justify-center items-center">
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
 

// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const LineChart = ({ data }) => {
//   const chartData = {
//     labels: data.labels,
//     datasets: [
//       {
//         label: 'Sales Over Time',
//         data: data.values,
//         fill: false,
//         borderColor: '#36A2EB',
//       },
//     ],
//   };

//   const chartOptions = {
//     // Add chart options here, e.g.,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Time',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Sales',
//         },
//       },
//     },
//   };

//   // Validate data (optional)
//   if (!Array.isArray(data.labels) || !Array.isArray(data.values) || data.labels.length !== data.values.length) {
//     console.error('Invalid data format');
//     return null;
//   }

//   return (
//     <div className="bg-gradient-to-r from-slate-200 to-indigo-300 rounded-lg shadow-md mt-4 h-full flex justify-center items-center">
//       <Line data={chartData} options={chartOptions} />
//     </div>
//   );
// };

// export default LineChart;