import React from 'react';

interface CoinTableProps {
  data: { price: number; quantity: number }[];
  latestPriceData: { latestPrice: number; totalQuantity: number }[];
}

const CoinTable: React.FC<CoinTableProps> = ({ data, latestPriceData }) => {
  return (
    <div className='bg-[#141828] max-w-[300px] p-4 h-[1000px]'>
      <div className='text-white text-lg font-bold mb-4'>Sổ lệnh</div>
      <div>
        <div className='w-full'>
          <div className=' text-gray-700 flex justify-between'>
            <p className=' bg-[#141828] text-[#E5D9CE] flex-1'>Giá, Xu</p>
            <p className='bg-[#141828] text-[#E5D9CE] flex justify-end flex-1'>Số lượng, Vnse</p>
          </div>
          <div className='bg-[#141828] text-gray-600 text-[#E5D9CE]'>
            {data.map((row, index) => (
              <div key={index} className='text-gray-700 flex justify-between'>
                <td className='bg-[#141828] text-[#E5D9CE] flex-1 ml-1'>{row.price}</td>
                <td className='bg-[#141828] text-[#E5D9CE] flex justify-end flex-1 mr-1'>{row.quantity}</td>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-2'>
        <div className='p-3 justify-center flex text-[#ffffff] border-b-[2px] border-white border-solid border-t-[2px]'>
          giá gần nhất
        </div>
        <div className='mt-2'>
          <div className='w-full bg-white'>
            <div className='bg-gray-200 text-gray-700'></div>
            <div className='bg-[#141828] text-gray-600 text-[#E5D9CE]'>
              {latestPriceData.map((row, index) => (
                <tr key={index} className='text-gray-700 flex justify-between'>
                  <td className='bg-[#141828] text-[#E5D9CE] flex-1 '>{row.latestPrice}</td>
                  <td className='bg-[#141828] text-[#E5D9CE] flex justify-end flex-1 mr-1'>{row.totalQuantity}</td>
                </tr>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinTable;
