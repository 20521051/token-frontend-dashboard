import { Chart, Filter, Header, Info, TradingMarket, Transfer } from './components';
import { VNSeProvider } from './context/VNSeContext';

function App() {
  /* vì chỉ có một trang nên dùng App làm home page */
  return (
    <VNSeProvider>
      <>
        <Header />
        <div className='flex'>
          <div>
            <Info price={172} change={2.38} max={173} min={168} numberOfTransfer={382183} />
            <Filter />
            <Chart />
          </div>
          <div>
            <Transfer balance={1000} />
            <TradingMarket />
          </div>
        </div>
      </>
      //
    </VNSeProvider>
  );
}

export default App;
