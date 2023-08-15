import { useEffect, useState } from 'react';
import { Chart, Filter, Header, Info, TradingMarket, Transfer, TaskResponse } from './components';
import CoinTable from './components/historyCost';
import { VNSeProvider } from './context/VNSeContext';
import { fakeData, latestPriceData } from './utils/fakeData';
import coin from '@/api/bitcoin.json';
interface InfoProps {
  price: number;
  change: number;
  max: number;
  min: number;
  numberOfTransfer: number;
}

function App() {
  const [data] = useState<InfoProps>({
    price: 21323,
    change: coin.market_data.price_change_percentage_24h,
    max: coin.market_data.high_24h.eth,
    min: coin.market_data.low_24h.eth,
    numberOfTransfer: 123412132412,
  });
  useEffect(() => {}, []);
  return (
    <VNSeProvider>
      <div className='bg-[#141828]'>
        <Header />
        <div className='flex'>
          <div>
            <Info price={data.price} change={data.change} max={data.max} min={data.min} numberOfTransfer={data.numberOfTransfer} />
            <Filter />
            <Chart />
            <TaskResponse />
          </div>
          <div>
            <div className='flex'>
              <CoinTable data={fakeData} latestPriceData={latestPriceData} />
              <Transfer balance={1000} />
            </div>
            <TradingMarket />
          </div>
        </div>
      </div>
    </VNSeProvider>
  );
}

export default App;
