// export default function handler(req, res) {
//     res.status(200).json({
//         stats: {
//             totalSales: '1500',
//             newCustomers: '120',
//             churnRate: '5%',
//         },
//         pieChart: {
//             labels: ['Product A', 'Product B', 'Product C'],
//             values: [300, 500, 700],
//         },
//         lineChart: {
//             labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
//             values: [50, 100, 150, 200],
//         },
//     });
// }

const mockData = {
    '1 Week': {
      stats: {
        totalSales: 5000,
        newCustomers: 50,
        churnRate: '5%',
      },
      pieChart: {
        labels: ['Product A', 'Product B', 'Product C'],
        values: [3000, 1500, 500],
      },
      lineChart: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        values: [500, 700, 600, 800, 700, 900, 1000],
      },
    },
    '1 Month': {
      stats: {
        totalSales: 20000,
        newCustomers: 200,
        churnRate: '6%',
      },
      pieChart: {
        labels: ['Product A', 'Product B', 'Product C'],
        values: [12000, 5000, 3000],
      },
      lineChart: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        values: [4000, 5000, 6000, 5000],
      },
    },
    '3 Months': {
      stats: {
        totalSales: 60000,
        newCustomers: 500,
        churnRate: '4%',
      },
      pieChart: {
        labels: ['Product A', 'Product B', 'Product C'],
        values: [36000, 18000, 6000],
      },
      lineChart: {
        labels: ['Month 1', 'Month 2', 'Month 3'],
        values: [20000, 22000, 18000],
      },
    },
  };
  
  export default function handler(req, res) {
    const { timeWindow } = req.query; // Get time window from query parameters
  
    // Fallback to '1 Week' if no valid time window is provided
    const data = mockData[timeWindow] || mockData['1 Week'];
  
    res.status(200).json(data);
  }