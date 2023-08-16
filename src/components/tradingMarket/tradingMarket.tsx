import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dataJson from '@/api/data.json';
import moment from 'moment';
import { formatNumber } from '@/utils/shortenAddress';


const TradingMarket: React.FC = () => {
  const [data, setData] = useState<IData[]>(dataJson.data as IData[]);

  useEffect(() => {
    // Lỗi CORS mên chưa get được data.
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
          headers: {
            CMC_PRO_API_KEY: '11372479-27ed-4573-9afd-2a0df25a8902',
            'Content-Type': 'application/json',
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
    <div className='bg-[#141828] p-4 border-[1px] border-black border-solid w-[100%] h-[282px]'>
      <h2 className='text-[18px] font-[20px] text-[#d2d6dd] mb-4'>Thị trường giao dịch</h2>
      <div>
        <div className='text-[#77829b] font-[16px] text-[16px] flex w-full mb-4'>
          <p className='flex-1'>Tên</p>
          <p className='flex-1'>Symbol</p>
          <p className='flex-1'>Giá</p>
          <p className='flex-1'>Thời Gian</p>
        </div>
        <div className='h-[198px] overflow-y-scroll'>
          {data.map((item, index) => (
            <div key={index} className='text-[#77829b] font-[16px] text-[14px] flex w-full mb-3'>
              <p className='text-[#3DB07C] flex-1'>{item.name}</p>
              <p className='text-[#e6aa04] flex-1'>{item.symbol}</p>
              <p className='flex-1'>
                {formatNumber(item.quote.USD.price.toString())}
                <span className='text-[#e6aa04]'> $</span>
              </p>
              <p className='flex-1'>{moment(item.quote.USD.last_updated).format('L')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingMarket;
