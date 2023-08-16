import React, { useEffect, useState } from 'react';
import { ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CombinedChartComponent: React.FC = () => {
  const initialPrice = 0.004; // Initial price in dollars
  const data = [
    { name: 'Market Price', price: initialPrice },
    { name: 'Token VNSe Price', price: initialPrice - 0.001 },
    { name: 'Trading Value', price: initialPrice - 0.002 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const newMarketPrice = initialPrice - (Math.random() * 0.001); // Adjust the range to your preference
      const newTokenVNSePrice = initialPrice - (Math.random() * 0.001); // Adjust the range to your preference
      const newTradingValue = initialPrice - (Math.random() * 0.001); // Adjust the range to your preference
      const newData = [
        { name: 'Market Price', price: newMarketPrice },
        { name: 'Token VNSe Price', price: newTokenVNSePrice },
        { name: 'Trading Value', price: newTradingValue },
      ];
      setData(newData);
    }, 3600000); // Update every hour (1 hour = 3600000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-[100%] p-4 h-[330px] bg-[#141828] border-[1px] border-black border-solid'>
      <h2 className='text-lg font-semibold mb-4 text-white'>Bitcoin Price Chart</h2>

      <div className='w-full h-56'>
        <ResponsiveContainer width='100%' height='100%'>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray='3 3' stroke='#2b3945' vertical={false} />
            <XAxis dataKey='name' tick={{ fontSize: 12, fill: '#b0bec5' }} />
            <YAxis
              yAxisId='left'
              tick={{ fontSize: 12, fill: '#b0bec5' }}
              tickFormatter={(value) => `$${value.toFixed(4)}`} // Format to show more decimal places
            />
            <Tooltip
              contentStyle={{ background: '#2b3945', border: '1px solid #394b59' }}
              labelStyle={{ color: '#b0bec5' }}
              itemStyle={{ color: '#b0bec5' }}
            />
            <Area
              type='monotone'
              dataKey='price'
              stroke='#1890ff'
              fill='#1890ff'
              fillOpacity={0.3}
              yAxisId='left'
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CombinedChartComponent;
