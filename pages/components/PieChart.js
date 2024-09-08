
// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
//     CategoryScale,
//     LinearScale,
// } from 'chart.js';

// // Register required components
// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
//     LinearScale,);

// const PieChart = ({ data }) => {
//     const chartData = {
//         labels: data.labels,

//         datasets: [
//             {
//                 data: data.values,
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                 hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             },
//         ],
//     };

//     return (
//         <div className="bg-black p-6 rounded-lg shadow-md ">

//                 <PieChart data={chartData} />

//         </div>
//     );
// };

// export default PieChart;
// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
//     CategoryScale,
//     LinearScale,
// } from 'chart.js';

// // Register required components
// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

// const PieChart = ({ data }) => {
//     // Define chart data
//     const chartData = {
//         labels: data.labels || [], // Default to empty array if data.labels is undefined
//         datasets: [
//             {
//                 data: data.values || [], // Default to empty array if data.values is undefined
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                 hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             },
//         ],
//     };

//     return (
//         <div className="bg-gradient-to-r from-slate-300 to-indigo-500 p-6 rounded-lg shadow-md flex justify-center items-center w-100 h-full mt-4 ">
//             <div className='c1'>
//                 <Pie data={chartData} />
//             </div>
//         </div>
//     );
// };

// export default PieChart;

// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
//     CategoryScale,
//     LinearScale,
// } from 'chart.js';

// // Register required components
// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

// const PieChart = ({ data }) => {
//     // Define chart data
//     const chartData = {
//         labels: data.labels || [], // Default to empty array if data.labels is undefined
//         datasets: [
//             {
//                 data: data.values || [], // Default to empty array if data.values is undefined
//                 backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//                 hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//             },
//         ],
//     };

//     return (
//         <div className="bg-gradient-to-r from-slate-300 to-indigo-500 p-6 rounded-lg shadow-md flex justify-center items-center w-full h-full mt-4">
//             <div className='w-full h-80 flex justify-center items-center'>
//                 <Pie data={chartData} />
//             </div>
//         </div>
//     );
// };

// export default PieChart;

import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
} from 'chart.js';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const PieChart = ({ data = {} }) => {
    // Ensure data has default values for labels and values
    const chartData = {
        labels: data.labels || [],
        datasets: [
            {
                data: data.values || [], // Default to empty array if data.values is undefined
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return (
        <div className="bg-gradient-to-r from-slate-300 to-indigo-500 p-6 rounded-lg shadow-md flex justify-center items-center w-full h-full mt-4">
          {data && data.labels && data.values ? (
            <div className='w-full h-80 flex justify-center items-center'>
              <Pie data={chartData} />
            </div>
          ) : (
            <p>No data available to display chart.</p>
          )}
        </div>
      );
};

export default PieChart;