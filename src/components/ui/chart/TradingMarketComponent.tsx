import React from 'react';

interface TradingMarketProps {
  tradingData: { price: number; quantity: number; time: Date }[];
}

const TradingMarketComponent: React.FC<TradingMarketProps> = ({ tradingData }) => {
  return (
    <div className="bg-gray-800 p-4">
      <h2 className="text-xl font-semibold text-white text-center mb-4">Thị trường giao dịch</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gray-400 font-semibold">Giá</th>
              <th className="px-4 py-2 text-gray-400 font-semibold">Số Lượng</th>
              <th className="px-4 py-2 text-gray-400 font-semibold">Thời Gian</th>
            </tr>
          </thead>
          <tbody>
            {tradingData.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-lg font-semibold text-white">{item.price.toFixed(2)}</td>
                <td className="px-4 py-2 text-lg font-semibold text-white">{item.quantity.toFixed(2)}</td>
                <td className="px-4 py-2 text-lg font-semibold text-white">
                  {item.time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradingMarketComponent;
