import React, { useState, useEffect } from 'react';

interface TradingItem {
  price: number;
  quantity: number;
  time: Date;
}

const TradingMarket: React.FC = () => {
  const [tradingData, setTradingData] = useState<TradingItem[]>([]);

  useEffect(() => {
    // Generate initial data
    const initialData: TradingItem[] = [];
    for (let i = 0; i < 5; i++) {
      initialData.push({
        price: Math.random() * (1000 - 10.0) + 10.0,
        quantity: Math.random() * (100 - 1.0) + 1.0,
        time: new Date(),
      });
    }
    setTradingData(initialData);

    // Update data every 5 seconds
    const interval = setInterval(() => {
      const currentTime = new Date();
      const newItem: TradingItem = {
        price: Math.random() * (1000 - 10.0) + 10.0,
        quantity: Math.random() * (100 - 1.0) + 1.0,
        time: currentTime,
      };
      setTradingData((prevData) => [...prevData.slice(-4), newItem]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-gray-800 p-4'>
      <h2 className='text-xl font-semibold text-white text-center mb-4'>Thị trường giao dịch</h2>
      <div className='overflow-x-auto'>
        <table className='table-auto w-full text-white'>
          <thead>
            <tr>
              <th className='px-4 py-2 text-gray-400 font-semibold'>Giá</th>
              <th className='px-4 py-2 text-gray-400 font-semibold'>Số Lượng</th>
              <th className='px-4 py-2 text-gray-400 font-semibold'>Thời Gian</th>
            </tr>
          </thead>
          <tbody>
            {tradingData.map((item, index) => (
              <tr key={index}>
                <td className='px-4 py-2 text-lg font-semibold' style={{ color: '#3DB07C' }}>
                  {item.price.toFixed(2)}
                </td>
                <td className='px-4 py-2 text-lg font-semibold text-white'>
                  {item.quantity.toFixed(2)}
                </td>
                <td className='px-4 py-2 text-lg font-semibold text-white'>
                  {item.time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradingMarket;
