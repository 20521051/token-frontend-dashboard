import React, { useEffect, useState } from 'react';
import { ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import faker from 'faker';

interface ChartProps {
  setTradingData: { price: number; quantity: number; time: Date }[];
}

const Chart: React.FC<ChartProps> = ({ setTradingData }: ChartProps) => {
  const [data, setData] = useState<{ name: Date; marketPrice: number; tokenVNSePrice: number; tradingValue: number }[]>(
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const newMarketPrice = faker.random.number({ min: 1.0, max: 10.0 });
      const newTokenVNSePrice = faker.random.number({ min: 100.0, max: 80.0 });
      const newTradingValue = faker.random.number({ min: 167.0, max: 175.0 }) / 100.0;

      const newData = [
        ...data.slice(Math.max(data.length - 8, 0)),
        {
          name: currentTime,
          marketPrice: newMarketPrice,
          tokenVNSePrice: newTokenVNSePrice,
          tradingValue: newTradingValue,
        },
      ];
      setData(newData);

      // Update trading data
      setTradingData((prevData) => [
        ...prevData.slice(Math.max(prevData.length - 4, 0)),
        {
          price: newMarketPrice,
          quantity: newTokenVNSePrice,
          time: currentTime,
        },
      ]);
    }, 1000); // Update every 10 minutes

    return () => clearInterval(interval);
  }, [data, setTradingData]);

  return (
    <div
      className='absolute w-full h-422.188 bg-gray-900 rounded-lg shadow-md left-0 top-0'
      style={{ width: '800.781px' }}
    >
      <h2 className='text-xl font-semibold mb-2 text-white'>Coin Market Price</h2>
      <div className='w-full h-40'>
        <ResponsiveContainer width='140%' height='180%'>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray='3 3' vertical={false} strokeOpacity={0.2} />
            <XAxis
              dataKey='name'
              tickFormatter={(value: Date) => value.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}
            />
            <YAxis yAxisId='left' domain={['auto', 'auto']} hide />
            <YAxis
              yAxisId='right'
              orientation='right'
              domain={[0, 10]}
              label={{ value: 'Trading Value', angle: -90, position: 'insideRight' }}
              tickFormatter={(value: number) => value.toFixed(2)}
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

export default Chart;
