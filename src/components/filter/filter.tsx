import { clsx } from 'clsx';
import { useState } from 'react';

// interface FilterProps {
// }
enum FilterTime {
  '5m',
  '15m',
  '30m',
  '1h',
  '4h',
  '1D',
  '1W',
}
function Filter() {
  const [status, setStatus] = useState<FilterTime>(FilterTime['5m']);
  const [isDefault, setIsDefault] = useState<boolean>(true);
  const handleClick_5m = () => {
    setStatus(FilterTime['5m']);
  };
  const handleClick_15m = () => {
    setStatus(FilterTime['15m']);
  };
  const handleClick_30m = () => {
    setStatus(FilterTime['30m']);
  };
  const handleClick_1h = () => {
    setStatus(FilterTime['1h']);
  };
  const handleClick_4h = () => {
    setStatus(FilterTime['4h']);
  };
  const handleClick_1D = () => {
    setStatus(FilterTime['1D']);
  };
  const handleClick_1W = () => {
    setStatus(FilterTime['1W']);
  };
  const handleClick_default = () => {
    setIsDefault(true);
  };
  const handleClick_tradingView = () => {
    setIsDefault(false);
  };
  return (
    <div className='bg-[#141828] p-2 w-[920px] text-[14px] flex justify-between items-center border-[1px] border-black border-solid'>
      <div className='flex justify-between items-center'>
        <div className='text-gray-400 border-r-[1px] border-white border-solid px-3 flex justify-between w'>
          <button
            className={clsx('w-[35px] h-[25px] rounded-[5px]', {
              'text-white bg-[#303341] font-[20px]': status === FilterTime['5m'],
            })}
            onClick={handleClick_5m}
          >
            5m
          </button>
          <button
            className={clsx('w-[35px] h-[25px] rounded-[5px]', {
              'text-white bg-[#303341] font-[20px]': status === FilterTime['15m'],
            })}
            onClick={handleClick_15m}
          >
            15m
          </button>
          <button
            className={clsx('w-[40px] h-[25px] rounded-[5px]', {
              'text-white bg-[#303341] font-[20px]': status === FilterTime['30m'],
            })}
            onClick={handleClick_30m}
          >
            30m
          </button>
          <button
            className={clsx('w-[40px] h-[25px] rounded-[5px]', {
              'text-white bg-[#303341] font-[20px]': status === FilterTime['1h'],
            })}
            onClick={handleClick_1h}
          >
            1h
          </button>
          <button
            className={clsx('w-[40px] h-[25px] rounded-[5px]', {
              'text-white bg-[#303341] font-[20px]': status === FilterTime['4h'],
            })}
            onClick={handleClick_4h}
          >
            4h
          </button>
          <button
            className={clsx('w-[40px] h-[25px] rounded-[5px]', {
              'text-white bg-[#303341] font-[20px]': status === FilterTime['1D'],
            })}
            onClick={handleClick_1D}
          >
            1D
          </button>
          <button
            className={clsx('w-[35px] h-[25px] rounded-[5px]', {
              'text-white bg-[#303341] font-[20px]': status === FilterTime['1W'],
            })}
            onClick={handleClick_1W}
          >
            1W
          </button>
        </div>
        <div className='text-[20px]'>
          <button className='text-white mx-3'>▦</button>
          <button className='text-[#595c67] mx-1' disabled>
            ▧
          </button>
        </div>
      </div>
      <div className='rounded-[5px] w-[180px] h-[25px] text-[#595c67]'>
        <button
          className={clsx('w-[80px] h-[25px] rounded-tl-[5px] rounded-bl-[5px]', {
            'text-white bg-[#303341] font-[20px]': isDefault,
          })}
          onClick={handleClick_default}
        >
          Mặc định
        </button>
        <button
          className={clsx('w-[100px] h-[25px] rounded-tr-[5px] rounded-br-[5px]', {
            'text-white bg-[#303341] font-[20px]': !isDefault,
          })}
          onClick={handleClick_tradingView}
        >
          Trading View
        </button>
      </div>
    </div>
  );
}

export default Filter;
