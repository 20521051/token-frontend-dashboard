import { createContext, ReactNode, useContext, useState } from 'react';

declare let window: any;

interface VNSeContextData {
  checkIfWalletIsConnect: () => void;
  connectWallet: () => void;
  currentAccount: string | null;
}

export const VNSeContext = createContext<VNSeContextData | undefined>(undefined);

export const VNSeProvider = ({ children }: { children: ReactNode }) => {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);

  const checkIfWalletIsConnect = async () => {
    try {
      if (!window.ethereum) return alert('Please install MetaMask.');

      const accounts = await window.ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert('Please install MetaMask.');

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  };

  const contextValue: VNSeContextData = {
    checkIfWalletIsConnect,
    connectWallet,
    currentAccount,
  };

  return <VNSeContext.Provider value={contextValue}>{children}</VNSeContext.Provider>;
};
