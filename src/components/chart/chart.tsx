import React, { useEffect, useState } from 'react';
import { ComposedChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CombinedChartComponent: React.FC = () => {
  const [data, setData] = useState<{
    name: Date;
    marketPrice: number;
    tokenVNSePrice: number;
    tradingValue: number;
  }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const newData = [
        ...data.slice(Math.max(data.length - 8, 0)),
        {
          name: currentTime,
          marketPrice: Math.random() * (10.000 - 1.000) + 1.000,
          tokenVNSePrice: Math.random() * (10.0 - 8.0) + 8.0,
          tradingValue: Math.random() * (175.00 - 167.00) + 167.00,
        },
      ];
      setData(newData);
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className='w-[920px] p-4 h-[330px] bg-[#141828] border-[1px] border-black border-solid'>
      <h2 className='text-lg font-semibold mb-4 text-white'>Bitcoin Price Chart</h2>

      <div className='w-full h-56'>
        <ResponsiveContainer width='100%' height='100%'>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray='3 3' stroke='#2b3945' vertical={false} />
            <XAxis dataKey='name' tick={{ fontSize: 12, fill: '#b0bec5' }} />
            <YAxis
              yAxisId='left'
              tick={{ fontSize: 12, fill: '#b0bec5' }}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
            />
            <Tooltip
              contentStyle={{ background: '#2b3945', border: '1px solid #394b59' }}
              labelStyle={{ color: '#b0bec5' }}
              itemStyle={{ color: '#b0bec5' }}
            />
            <Area
              type='monotone'
              dataKey='marketPrice'
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
