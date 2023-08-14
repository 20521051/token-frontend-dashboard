import React, { useEffect, useState } from 'react';
import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CombinedChartComponent: React.FC = () => {
  const [data, setData] = useState<{ name: Date; marketPrice: number; tokenVNSePrice: number; tradingValue: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const newData = [
        ...data.slice(Math.max(data.length - 8, 0)),
        {
          name: currentTime,
          marketPrice: Math.random() * (10.000 - 1.000) + 1.000,
          tokenVNSePrice: Math.random() * (10.0 - 8.0) + 8.0, // Adjusted range for smaller values
          tradingValue: Math.random() * (175.00 - 167.00) + 167.00,
        },
      ];
      setData(newData);
    }, 1000); // Update every 10 minutes

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className='w-[920px] p-4 h-[330px] bg-[#141828] border-[1px] border-black border-solid'>
      <h2 className='text-sm font-semibold mb-1 text-white'>Coin Market Price</h2>

      <div className='w-full h-40'>
        <ResponsiveContainer width='100%' height='180%'>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray='3 3' vertical={false} strokeOpacity={0.2} />
            <XAxis
              dataKey='name'
              tickFormatter={(value) =>
                (value as Date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })
              }
            />
            <YAxis yAxisId='left' domain={['auto', 'auto']} hide />
            <YAxis
              yAxisId='right'
              orientation='right'
              domain={[167, 175]}
              label={{ value: 'Trading Value', angle: -90, position: 'insideRight' }}
              tickFormatter={(value) => value.toFixed(2)}
            />
            <Tooltip />
            <Legend verticalAlign='top' height={36} />
            <Area
              type='monotone'
              dataKey='marketPrice'
              stroke='#113962'
              fill='#113962'
              fillOpacity={0.6}
              yAxisId='left'
              animationDuration={500}
            />
            <Bar dataKey='tokenVNSePrice' barSize={10} fill='#14406E' yAxisId='right' animationDuration={500} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CombinedChartComponent;
