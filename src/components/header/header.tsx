import { useContext, useEffect } from 'react';
import { shortenAddress, shortenBalance } from '@/utils/shortenAddress';
import { VNSeContext } from '@/context/VNSeContext';

function Header() {
  const context = useContext(VNSeContext);
  if (!context) {
    console.log(context);
    return null;
  }
  const { connectWallet, currentAccount, balance } = context;
  const handleClick = () => {
    connectWallet();
    console.log(currentAccount);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(currentAccount);
  }, [currentAccount]);
  return (
    <div className='border-b-[1px] border-black border-solid'>
      <header className='h-16 p-2 custom-header flex items-center justify-between bg-[#141828]'>
        <div className='ml-5 flex items-center space-x-4'>
          <h1>
            <img
              src='https://cdn-1.webcatalog.io/catalog/tiki-exchange/tiki-exchange-icon-filled-256.png?v=1675594321765'
              alt=''
              width={140}
            />
          </h1>
          <h1 className='text-xl font-bold text-[#E5D9CE]'>VNS</h1>
          <ul className='flex space-x-4'>
            <li>
              <a href='#' className='items-center hover:text-[#15275A] text-[#E5D9CE]'>
                VNS Rewards
              </a>
            </li>
            <li>
              <a href='#' className='items-center hover:text-[#15275A] text-[#E5D9CE]'>
                FQA
              </a>
            </li>
          </ul>
        </div>
        <nav>
          <ul className='flex ml-100 space-x-7 '>
            <div>
              {currentAccount ? (
                <div className='flex'>
                  <div className='p-2 items-center text-[#c9d9e0] flex border-r-[1px] border-gray-400 border-solid'>
                    <img
                      src='https://thumbs.dreamstime.com/z/crypto-currency-bitcoin-golden-symbol-coin-black-lackered-obverse-transparent-background-vector-illustration-use-87787782.jpg?w=768'
                      className='flex w-5 h-5 '
                    />{' '}
                    100
                  </div>
                  <div className='p-2 items-center text-[#c9d9e0] flex border-r-[1px] border-gray-400 border-solid '>
                    <img
                      src='https://previews.123rf.com/images/mingirov/mingirov1902/mingirov190200850/118483237-cryptocurrency-coin-ethereum-eth-icon-isolated-on-transparent-background-physical-bit-coin-digital.jpg'
                      className=' h-5 w-5 flex mr-2'
                    />
                    {balance ? shortenBalance(balance) : ' '} ETH
                  </div>
                  <div className='p-2 text-[#c9d9e0] flex items-center'>
                    <img
                      src='https://as1.ftcdn.net/v2/jpg/02/09/95/42/500_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg'
                      className=' h-5 w-5 mr-2 '
                    />
                    {currentAccount ? shortenAddress(currentAccount) : ' '}
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    type='button'
                    onClick={handleClick}
                    className='p-2.5 rounded-full bg-[#222940] hover:text-gray-400 text-[#E5D9CE] mr-20'
                  >
                    Đăng nhập
                  </button>
                </div>
              )}
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
