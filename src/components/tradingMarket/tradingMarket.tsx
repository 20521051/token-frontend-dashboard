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
    <div className='bg-[#141828] p-4 border-[1px] border-black border-solid w-[280px] h-[282px]'>
      <h2 className='text-[18px] font-[20px] text-[#d2d6dd] mb-4'>Thị trường giao dịch</h2>
      <div>
        <div className='text-[#77829b] font-[16px] text-[16px] flex w-full mb-4'>
          <p className='flex-1'>Giá</p>
          <p className='flex-1 flex justify-center'>Số Lượng</p>
          <p className='flex-1 flex justify-end'>Thời Gian</p>
        </div>
        <div>
          {tradingData.map((item, index) => (
            <div key={index} className='text-[#77829b] font-[16px] text-[14px] flex w-full mb-3'>
              <p className='text-[#3DB07C] flex-1'>{item.price.toFixed(2)}</p>
              <p className='text-[#d2d6dd] flex-1 flex justify-center'>{item.quantity.toFixed(2)}</p>
              <p className='flex-1 flex justify-end'>
                {item.time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingMarket;
