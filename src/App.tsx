import { Chart, Filter, Header, Info, TradingMarket, Transfer, TaskResponse } from './components';
import CoinTable from './components/historyCost';
import { VNSeProvider } from './context/VNSeContext';
import { fakeData, latestPriceData } from './utils/fakeData';
function App() {
  /* vì chỉ có một trang nên dùng App làm home page */
  return (
    <VNSeProvider>
      <div className='bg-[#141828]'>
        <Header />
        <div className='flex'>
          <div>
            <Info price={172} change={2.38} max={173} min={168} numberOfTransfer={382183} />
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
