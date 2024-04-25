// // import React from 'react';
// // import { Grid, Paper, Typography } from "@mui/material";
// // import { motion } from 'framer-motion';
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

// // // const AnimatedPaper = motion.custom(Paper);

// // export const  Dashboard = () => {
// //   // Placeholder analytics data
// //   const analyticsData = [
// //     { name: 'Jan', orders: 30, revenue: 1500, rating: 4.2 },
// //     { name: 'Feb', orders: 40, revenue: 1800, rating: 4.5 },
// //     { name: 'Mar', orders: 50, revenue: 2100, rating: 4.7 },
// //     { name: 'Apr', orders: 60, revenue: 2400, rating: 4.9 },
// //     // Add more data for other months
// //   ];

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <Grid container spacing={3}>
// //         <Grid item xs={12}>
// //           <motion.Paper style={{ textAlign: 'center', backgroundColor: 'red', padding: '20px' }} animate={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
// //             <Typography variant="h5">Welcome to your Food Delivery Dashboard</Typography>
// //           </motion.Paper>
// //         </Grid>
// //         <Grid item xs={4}>
// //           <Paper style={{ padding: '20px' }}>
// //             <Typography variant="h6">Total Orders</Typography>
// //             <Typography variant="h4">{analyticsData.reduce((sum, data) => sum + data.orders, 0)}</Typography>
// //           </Paper>
// //         </Grid>
// //         <Grid item xs={4}>
// //           <Paper style={{ padding: '20px' }}>
// //             <Typography variant="h6">Total Revenue</Typography>
// //             <Typography variant="h4">${analyticsData.reduce((sum, data) => sum + data.revenue, 0)}</Typography>
// //           </Paper>
// //         </Grid>
// //         <Grid item xs={4}>
// //           <Paper style={{ padding: '20px' }}>
// //             <Typography variant="h6">Average Rating</Typography>
// //             <Typography variant="h4">
// //               {(
// //                 analyticsData.reduce((sum, data) => sum + data.rating, 0) /
// //                 analyticsData.length
// //               ).toFixed(1)}
// //             </Typography>
// //           </Paper>
// //         </Grid>
// //         <Grid item xs={6}>
// //           <Paper style={{ padding: '20px' }}>
// //             <Typography variant="h6">Orders Over Time</Typography>
// //             <LineChart width={500} height={300} data={analyticsData}>
// //               <XAxis dataKey="name" />
// //               <YAxis />
// //               <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
// //               <Tooltip />
// //               <Legend />
// //               <Line type="monotone" dataKey="orders" stroke="#8884d8" />
// //             </LineChart>
// //           </Paper>
// //         </Grid>
// //         <Grid item xs={6}>
// //           <Paper style={{ padding: '20px' }}>
// //             <Typography variant="h6">Revenue Over Time</Typography>
// //             <BarChart width={500} height={300} data={analyticsData}>
// //               <XAxis dataKey="name" />
// //               <YAxis />
// //               <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
// //               <Tooltip />
// //               <Legend />
// //               <Bar dataKey="revenue" fill="#82ca9d" />
// //             </BarChart>
// //           </Paper>
// //         </Grid>
// //       </Grid>
// //     </div>
// //   );
// // };

// // import React from 'react';
// // import { Grid, Paper, Typography } from "@mui/material";
// // import { motion } from 'framer-motion';
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

// // export const Dashboard = () => {
// //   // Placeholder analytics data
// //   const analyticsData = [
// //     { name: 'Jan', orders: 30, revenue: 1500, rating: 4.2 },
// //     { name: 'Feb', orders: 40, revenue: 1800, rating: 4.5 },
// //     { name: 'Mar', orders: 50, revenue: 2100, rating: 4.7 },
// //     { name: 'Apr', orders: 60, revenue: 2400, rating: 4.9 },
// //     // Add more data for other months
// //   ];

// //   return (
// //     <div style={{ padding: '20px', background: '#f5f5f5' }}>
// //       <Grid container spacing={3}>
// //         <Grid item xs={12}>
// //           <motion.Paper
// //             style={{
// //               textAlign: 'center',
// //               backgroundColor: '#3f51b5',
// //               padding: '20px',
// //               borderRadius: 8,
// //               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
// //             }}
// //             animate={{ scale: 1.1 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             <Typography variant="h5" style={{ color: '#fff' }}>
// //               Welcome to your Food Delivery Dashboard
// //             </Typography>
// //           </motion.Paper>
// //         </Grid>
// //         <Grid item xs={4}>
// //           <Paper
// //             style={{
// //               padding: '20px',
// //               borderRadius: 4, 
// //               boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
// //             }}
// //           >
// //             <Typography variant="h6">Total Orders</Typography>
// //             <Typography variant="h4">
// //               {analyticsData.reduce((sum, data) => sum + data.orders, 0)}
// //             </Typography>
// //           </Paper>
// //         </Grid>
// //         <Grid item xs={4}>
// //           <Paper
// //             style={{
// //               padding: '20px',
// //               borderRadius: 4,
// //               boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
// //             }}
// //           >
// //             <Typography variant="h6">Total Revenue</Typography>
// //             <Typography variant="h4">
// //               ${analyticsData.reduce((sum, data) => sum + data.revenue, 0)}
// //             </Typography>
// //           </Paper>
// //         </Grid>
// //         <Grid item xs={4}>
// //           <Paper
// //             style={{
// //               padding: '20px',
// //               borderRadius: 4,
// //               boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
// //             }}
// //           >
// //             <Typography variant="h6">Average Rating</Typography>
// //             <Typography variant="h4">
// //               {
// //                 (
// //                   analyticsData.reduce((sum, data) => sum + data.rating, 0) /
// //                   analyticsData.length
// //                 ).toFixed(1)
// //               }
// //             </Typography>
// //           </Paper>
// //         </Grid>
// //         <Grid item xs={6}>
// //           <Paper
// //             style={{
// //               padding: '20px',
// //               borderRadius: 4,
// //               boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
// //             }}
// //           >
// //             <Typography variant="h6">Orders Over Time</Typography>
// //             <LineChart width={500} height={300} data={analyticsData}>
// //   <XAxis dataKey="name" />
// //   <YAxis /> 
// //   <CartesianGrid stroke="#eee" strokeDasharray="5 5" /> 
// //   <Tooltip />          
// //   <Legend />
// //   <Line type="monotone"
// //         dataKey="orders"
// //         stroke="#8884d8"
// //         strokeWidth={2}
// //         dot={{ stroke: '#fff', strokeWidth: 2, r: 4 }}  
// //         animation={{         
// //           from: { opacity: 0 },
// //           to: { opacity: 1 },
// //           duration: 1.5,
// //         }}
// //   />
// // </LineChart>


// //         <Grid item xs={6}>
// //           <Paper style={{ padding: '20px', borderRadius: 4, boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
// //             <Typography variant="h6">Orders Over Time</Typography>
// //             <LineChart width={500} height={300} data={analyticsData}>
// //               <XAxis dataKey="name" />
// //               <YAxis />
// //               <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
// //               <Tooltip />
// //               <Legend />
// //               <Line type="monotone"
// //                     dataKey="orders"
// //                     stroke="#8884d8"
// //                     strokeWidth={2}
// //                     dot={{ stroke: '#fff', strokeWidth: 2, r: 4 }}
// //                     animation={{
// //                       from: { opacity: 0 },
// //                       to: { opacity: 1 },
// //                       duration: 1.5
// //                     }}
// //               />
// //             </LineChart>
// //           </Paper>
// //         </Grid>















// //         <Grid item xs={6}>
// //           <Paper
// //             style={{
// //               padding: '20px',
// //               borderRadius: 4,
// //               boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
// //             }}
// //           >
// //             <Typography variant="h6">Revenue Over Time</Typography>
// //             <BarChart width={500} height={300} data={analyticsData}>
// //               <XAxis dataKey="name" />
// //               <YAxis />
// //               <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
// //               <Tooltip />
// //               <Legend />
// //               <Bar
// //                 dataKey="revenue"
// //                 fill="#82ca9d"
// //                 barSize={50}
// //                 animation={{
// //                   from: { y: 300 },
// //                   to: { y: 0 },
// //                   duration: 1.5,
// //                 }}
// //               />
// //             </BarChart>
// //           </Paper>
// //         </Grid>
// //       </Grid>
// //     </div>
// //   );
// // };

// import React from 'react';
// import { Grid, Paper, Typography } from "@mui/material";
// import { motion } from 'framer-motion';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

// export const Dashboard = () => {
//   // Placeholder analytics data
//   const analyticsData = [
//     { name: 'Jan', orders: 30, revenue: 1500, rating: 4.2 },
//     { name: 'Feb', orders: 40, revenue: 1800, rating: 4.5 },
//     { name: 'Mar', orders: 50, revenue: 2100, rating: 4.7 },
//     { name: 'Apr', orders: 60, revenue: 2400, rating: 4.9 },
//     // Add more data for other months
//   ];

//   return (
//     <div style={{ padding: '20px', background: '#f5f5f5' }}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <motion.Paper
//             style={{
//               textAlign: 'center',
//               backgroundColor: '#3f51b5',
//               padding: '20px',
//               borderRadius: 8,
//               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
//             }}
//             animate={{ scale: 1.1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Typography variant="h5" style={{ color: '#fff' }}>
//               Welcome to your Food Delivery Dashboard
//             </Typography>
//           </motion.Paper>
//         </Grid>
//         <Grid item xs={4}>
//           <Paper
//             style={{
//               padding: '20px',
//               borderRadius: 4, 
//               boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <Typography variant="h6">Total Orders</Typography>
//             <Typography variant="h4">
//               {analyticsData.reduce((sum, data) => sum + data.orders, 0)}
//             </Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={4}>
//           <Paper
//             style={{
//               padding: '20px',
//               borderRadius: 4,
//               boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <Typography variant="h6">Total Revenue</Typography>
//             <Typography variant="h4">
//               ${analyticsData.reduce((sum, data) => sum + data.revenue, 0)}
//             </Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={4}>
//           <Paper
//             style={{
//               padding: '20px',
//               borderRadius: 4,
//               boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <Typography variant="h6">Average Rating</Typography>
//             <Typography variant="h4">
//               {
//                 (
//                   analyticsData.reduce((sum, data) => sum + data.rating, 0) /
//                   analyticsData.length
//                 ).toFixed(1)
//               }
//             </Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper
//             style={{
//               padding: '20px',
//               borderRadius: 4,
//               boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <Typography variant="h6">Orders Over Time</Typography>
//             <LineChart width={500} height={300} data={analyticsData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="orders"
//                 stroke="#8884d8"
//                 strokeWidth={2}
//                 dot={{ stroke: '#fff', strokeWidth: 2, r: 4 }}
//                 animation={{ from: { opacity: 0 }, to: { opacity: 1 }, duration: 1.5 }}
//               />
//             </LineChart>
//           </Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper
//             style={{
//               padding: '20px',
//               borderRadius: 4,
//               boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <Typography variant="h6">Revenue Over Time</Typography>
//             <BarChart width={500} height={300} data={analyticsData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//               <Tooltip />
//               <Legend />
//               <Bar
//                 dataKey="revenue"
//                 fill="#82ca9d"
//                 barSize={50}
//                 animation={{ from: { y: 300 }, to: { y: 0 }, duration: 1.5 }}
//               />
//             </BarChart>
//           </Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
// import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import SkeletonTotalGrowthBarChart from '../../../ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from '../../../ui-component/cards/MainCard';
  // drawerWidth = 260;
  // appDrawerWidth = 320;

// chart data
import chartData from './chart-data/total-growth-bar-chart';
//import { gridSpacing } from 'store/constant';

// theme constant
 const gridSpacing = 3;

const status = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'month',
    label: 'This Month'
  },
  {
    value: 'year',
    label: 'This Year'
  }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
  const [value, setValue] = useState('today');
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);

  // const { navType } = customization;
  const { primary } = "blue";
  const darkLight = "black";
  const grey200 = "grey";
  const grey500 = 'grey' ;

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  useEffect(() => {
    const newChartData = {
      ...chartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary]
          }
        }
      },
      grid: {
        borderColor: grey200
      },
      // tooltip: {
      //   theme: 'light'
      // },
      legend: {
        labels: {
          colors: grey500
        }
      }
    };

    // do not load chart when loading
    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    }
  }, [ primary200, primaryDark, secondaryMain, secondaryLight, primary, darkLight, grey200, isLoading, grey500]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Growth</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">$2,324.00</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField id="standard-select-currency" select value={value} onChange={(e) => setValue(e.target.value)}>
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Chart {...chartData} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
