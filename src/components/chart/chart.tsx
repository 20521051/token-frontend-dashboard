import React, { useEffect, useState } from 'react';
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  timestamp: number;
  marketPrice: number;
  tokenVNSePrice: number;
  tradingValue: number;
}

const CombinedChartComponent: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const generateRandomData = () => {
      const now = Date.now();
      const newData: DataPoint[] = [];

      for (let i = 0; i < 20; i++) {
        const timestamp = now - i * 3600000;
        const marketPrice = Math.random() * 1000;
        const tokenVNSePrice = Math.random() * 1000;
        const tradingValue = Math.random() * 1000;
        newData.push({ timestamp, marketPrice, tokenVNSePrice, tradingValue });
      }

      return newData.reverse();
    };

    const interval = setInterval(() => {
      const newData = generateRandomData();
      setData(prevData => [...prevData.slice(0, prevData.length - 1), newData[newData.length - 1]]);
    }, 10000);

    // Tạo dữ liệu ban đầu khi trang tải lần đầu
    setData(generateRandomData());

    return () => clearInterval(interval);
  }, []);

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  return (
    <div className='w-[100%] p-4 h-[330px] bg-[#141828] border-[1px] border-black border-solid'>
      <h2 className='text-lg font-semibold mb-4 text-white'>VNSToken Price Chart</h2>

      <div className='w-full h-56'>
        <ResponsiveContainer width='100%' height='100%'>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray='3 3' stroke='#2b3945' vertical={false} />
            <XAxis dataKey='timestamp' tick={{ fontSize: 12, fill: '#b0bec5' }} tickFormatter={formatTimestamp} />
            <YAxis
              yAxisId='left'
              tick={{ fontSize: 12, fill: '#b0bec5' }}
              tickFormatter={formatCurrency}
            />
            <Tooltip
              contentStyle={{ background: '#2b3945', border: '1px solid #394b59' }}
              labelStyle={{ color: '#b0bec5' }}
              itemStyle={{ color: '#b0bec5' }}
              formatter={(value) => formatCurrency(Number(value))}
            />
            <Area type='monotone' dataKey='marketPrice' stroke='#1772C4' fill='#1772C4' fillOpacity={0.3} yAxisId='left' />
            <Area type='monotone' dataKey='tokenVNSePrice' stroke='#154578' fill='#154578' fillOpacity={0.3} yAxisId='left' />
            <Area type='monotone' dataKey='tradingValue' stroke='#11385F' fill='#11385F' fillOpacity={0.3} yAxisId='left' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CombinedChartComponent;
