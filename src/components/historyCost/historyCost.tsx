import React from 'react';

interface CoinTableProps {
  data: { price: number; quantity: number }[];
  latestPriceData: { latestPrice: number; totalQuantity: number }[];
}

const CoinTable: React.FC<CoinTableProps> = ({ data, latestPriceData }) => {
  return (
    <div className='bg-[#141828] pt-4 border-[1px] border-black border-solid w-[50%] h-[360px]'>
      <h2 className='text-[16px] font-[20px] text-[#d2d6dd] mb-4 px-4'>Sổ lệnh</h2>
      <div>
        <div className='w-full px-4'>
          <div className='text-[#77829b] font-[16px] text-[14px] flex w-full mb-4'>
            <p className='flex-1'>Giá, Xu</p>
            <p className='flex-1 flex justify-end'>Số lượng, Vnse</p>
          </div>
          <div>
            {data.map((row, index) => (
              <div key={index} className='text-[#77829b] font-[16px] text-[14px] flex w-full mb-3'>
                <p className='flex-1 text-[#c34961]'>{row.price}</p>
                <p className='flex justify-end flex-1 text-white'>{row.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-2 px-4'>
        <div className='p-3 justify-center flex items-end text-[#ffffff] border-b-[1px] border-[#2c364f] border-solid border-t-[1px]'>
          Giá gần nhất
          <span className='ml-2 text-[20px] text-[#41996e]'>190</span>
        </div>
        <div className='mt-4'>
          <div className='w-full bg-white'>
            <div className='bg-gray-200 text-gray-700'></div>
            <div className='bg-[#141828] text-[#E5D9CE]'>
              {latestPriceData.map((row, index) => (
                <div key={index} className='text-[#77829b] font-[16px] text-[14px] flex w-full mb-3'>
                  <p className='text-[#41996e] flex-1 '>{row.latestPrice}</p>
                  <p className='flex justify-end flex-1 text-white'>{row.totalQuantity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinTable;
