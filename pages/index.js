// import React, { useState, useEffect } from 'react';
// import TimeSelector from './components/TimeSelector';
// // import TimeSelector from '../components/TimeSelector';
// import StatisticsCard from './components/StatisticsCard';
// import PieChart from './components/PieChart';
// import LineChart from './components/LineChart';

// export default function Home() {
//   const [selectedTime, setSelectedTime] = useState('1 Week');
//   const [statistics, setStatistics] = useState({});
//   const [pieData, setPieData] = useState({});
//   const [lineData, setLineData] = useState({});

//   // useEffect(() => {
//   //   // Fetch dummy data based on selectedTime
//   //   const fetchData = async () => {
//   //     const data = await fetch('/api/dummy-stats').then(res => res.json());
//   //     setStatistics(data.stats);
//   //     setPieData(data.pieChart);
//   //     setLineData(data.lineChart);
//   //   };

//   //   fetchData();
//   // }, [selectedTime]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`/api/dummy-stats?timeWindow=${selectedTime}`);
//       const data = await response.json();
//       setStatistics(data.stats);
//       setPieData(data.pieChart);
//       setLineData(data.lineChart);
//     };

//     fetchData();
//   }, [selectedTime]);
//   return (
//     <div className="container mx-auto p-4 " >
//       <h1 className="text-3xl font-bold text-center mb-8">CRM Statistics</h1>
//       <TimeSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} />

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <StatisticsCard title="Total Sales" value={statistics.totalSales} />
//         <StatisticsCard title="New Customers" value={statistics.newCustomers} />
//         <StatisticsCard title="Churn Rate" value={statistics.churnRate} />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
//         <PieChart data={pieData} />
//         <LineChart data={lineData} />
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import TimeSelector from './components/TimeSelector';
import StatisticsCard from './components/StatisticsCard';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';

export default function Home() {
  const [selectedTime, setSelectedTime] = useState('1 Week');
  const [statistics, setStatistics] = useState({});
  const [pieData, setPieData] = useState({});
  const [lineData, setLineData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data for time window:', selectedTime);
        const response = await fetch(`/api/dummy-stats?timeWindow=${selectedTime}`);
        const data = await response.json();
        setStatistics(data.stats || {});
        setPieData(data.pieChart || {});
        setLineData(data.lineChart || {});
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedTime]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 hover:bg ">CRM Statistics</h1>
      <TimeSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} />

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4  justify-center items-center text-center  " >
        <StatisticsCard title="Total Sales" value={statistics.totalSales || 0} />
        <StatisticsCard title="New Customers" value={statistics.newCustomers || 0} />
        <StatisticsCard title="Churn Rate" value={statistics.churnRate || 0} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <PieChart data={pieData} />
        <LineChart data={lineData} />
      </div>
    </div>
  );
}git 