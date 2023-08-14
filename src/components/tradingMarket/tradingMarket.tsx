import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TradingMarket: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
          headers: {
            CMC_PRO_API_KEY: '11372479-27ed-4573-9afd-2a0df25a8902',
          },
        });

        console.log('response:@@@', response);
        const data = response.data;
        console.log('Data:@@@', data);
        setData(data);
      } catch (error) {
        console.error('Error fetching crypto listings:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='bg-[#141828] p-4 border-[1px] border-black border-solid w-[560px] h-[282px]'>
      <h2 className='text-[18px] font-[20px] text-[#d2d6dd] mb-4'>Thị trường giao dịch</h2>
      <div>
        <div className='text-[#77829b] font-[16px] text-[16px] flex w-full mb-4'>
          <p className='flex-1'>Tên</p>
          <p className='flex-1'>Symbol</p>
          <p className='flex-1'>Giá</p>
          <p className='flex-1'>Thời Gian</p>
        </div>
        <div>
          {data.map((item, index) => (
            <div key={index} className='text-[#77829b] font-[16px] text-[14px] flex w-full mb-3'>
              <p className='text-[#3DB07C] flex-1'>{item.quote.USD.price}</p>
              <p className='text-[#d2d6dd] flex-1'>{item.name}</p>
              <p className='flex-1'>{item.quote.USD.last_updated}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingMarket;
