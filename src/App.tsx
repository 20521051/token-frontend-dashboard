import { Chart, Filter, Header, Info, TradingMarket, Transfer } from './components';

function App() {
  /* vì chỉ có một trang nên dùng App làm home page */
  return (
    <>
      <Header />
      <div className='flex'>
        <div>
          <Info price={172} change={2.38} max={173} min={168} numberOfTransfer={382183} />
          <Filter />
          <Chart setTradingData={[]} />
        </div>
        <div>
          <Transfer balance={1000} />
          <TradingMarket tradingData={[]} />
        </div>
      </div>
    </>
  );
}

export default App;
