import { clsx } from 'clsx';
import { useState } from 'react';

interface TransferProps {
  balance: number;
}

function Transfer({ ...props }: TransferProps) {
  const [isBuy, setIsBuy] = useState<boolean>(true);
  const [balance, setBalance] = useState<number>(props.balance || 10000);
  const handleChooseBuy = () => {
    setIsBuy(true);
  };
  const handleChooseSell = () => {
    setIsBuy(false);
  };
  const handleClickBuy = () => {
    setIsBuy(true);
  };
  const handleClickSell = () => {
    setBalance(balance);
  };
  return (
    <div className='bg-[#141828] w-[280px] h-[360px] px-[15px] py-[20px] flex flex-col justify-between items-center'>
      <div className='bg-[#222940] rounded-[8px] p-[5px] w-[240px] flex justify-between font-[30px] text-[16px]'>
        <button
          className={clsx('w-[110px] h-[35px] rounded-[5px]', {
            'text-[#449f73] bg-[#283e49]': isBuy,
            'text-white hover:bg-[#393f53]': !isBuy,
          })}
          onClick={handleChooseBuy}
        >
          Mua
        </button>
        <button
          className={clsx('w-[110px] h-[35px] rounded-[5px]', {
            'text-[#d44e67] bg-[#3d2f45]': !isBuy,
            'text-white hover:bg-[#393f53]': isBuy,
          })}
          onClick={handleChooseSell}
        >
          Bán
        </button>
      </div>
      <div className='h-full mt-3 flex flex-col justify-between'>
        <div className='text-white flex flex-col justify-between h-full py-5 text-[14px]'>
          <div className='flex justify-between'>
            <p className='text-[#77829b] font-thin'>{isBuy ? 'Giá mua VNSe' : 'Giá bán VNSe'}</p>
            <p>Thị trường</p>
          </div>
          <div>
            <p className='text-[#77829b] mb-1 font-thin'>Số lượng xu {isBuy ? 'sử dụng' : 'bán'}</p>
            <input
              type='text'
              className='bg-[#1a2033] border-[2px] border-[#142a48] text-[#77829b] text-sm rounded-lg block w-full pl-5 p-2.5'
              placeholder='0'
            />
          </div>
          <div className='flex justify-between'>
            <p className='text-[#77829b] font-thin'>Khả dụng</p>
            <p>
              {balance} Xu <span className='text-[#0b74e5]'>⊕</span>
            </p>
          </div>
          <p className='text-[#77829b] font-thin'>Phí giao dịch ©</p>
        </div>
        {isBuy ? (
          <button
            className='w-[240px] h-[35px] rounded-[5px] mt-2 text-[#449f73] bg-[#283e49]'
            onClick={handleClickBuy}
          >
            Mua
          </button>
        ) : (
          <button
            className='w-[240px] h-[35px] rounded-[5px] mt-2 text-[#d44e67] bg-[#3d2f45]'
            onClick={handleClickSell}
          >
            Bán
          </button>
        )}
      </div>
    </div>
  );
}

export default Transfer;