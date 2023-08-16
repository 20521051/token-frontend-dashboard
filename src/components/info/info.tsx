import { useState } from 'react';

interface InfoProps {
  price: number;
  change: number;
  max: number;
  min: number;
  numberOfTransfer: number;
}

function Info({ ...props }: InfoProps) {
  const [price] = useState<number>(props.price || 100);
  const [change] = useState<number>(props.change > 0 ? props.change : -props.change);
  const [max] = useState<number>(props.max || 100);
  const [min] = useState<number>(props.min || 100);
  const [numberOfTransfer] = useState<number>(props.numberOfTransfer || 100);
  const [isHigh] = useState<boolean>(props.change > 0);

  return (
    <div className='bg-[#141828] p-2 text-white flex w-[100%] border-[1px] border-black border-solid'>
      <div className='flex items-center w-[110px] border-r-[1px] border-white border-solid'>
        <img
          src='data:image/png;base64,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'
          alt='logo'
          className='w-[30px] h-[30px] mr-2'
        />
        <h2 className='text-[14px]'>VNSe</h2>
      </div>
      <div className='w-full pl-[30px] pr-[20%] text-[14px] font-thin'>
        <ul className='flex justify-between'>
          <li>
            <h3 className='text-gray-400 mb-2'>Giá Gần Nhất</h3>
            <p>{`${price} Xu`}</p>
          </li>
          <li>
            <h3 className='text-gray-400 mb-2'>Thay Đổi 24h</h3>
            <p className={isHigh ? `text-green-600` : `text-red-600`}>{`${change} %`}</p>
          </li>
          <li>
            <h3 className='text-gray-400 mb-2'>24h Cao</h3>
            <p>{`${max} Xu`}</p>
          </li>
          <li>
            <h3 className='text-gray-400 mb-2'>24h Thấp</h3>
            <p>{`${min} Xu`}</p>
          </li>
          <li>
            <h3 className='text-gray-400 mb-2'>KL giao dịch trong 24h</h3>
            <p>{`${numberOfTransfer} VNSe`}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
