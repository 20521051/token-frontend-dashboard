import { createContext, ReactNode, useState } from 'react';

declare let window: any;
interface VNSeContextData {
  checkIfWalletIsConnect: () => void;
  connectWallet: () => void;
  // getBalance: () => void;
  currentAccount: string | null;
  balance: string | null;
}

export const VNSeContext = createContext<VNSeContextData | undefined>(undefined);

export const VNSeProvider = ({ children }: { children: ReactNode }) => {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const checkIfWalletIsConnect = async () => {
    try {
      if (!window.ethereum) return alert('Please install MetaMask.');

      const accounts = await window.ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        const balanceWei = await window.ethereum.getBalance(currentAccount);
        const balanceEther = window.ethereum.utils.fromWei(balanceWei, 'ether');
        setBalance(balanceEther);
      } else {
        console.log('No accounts found');
      }
      console.log(currentAccount);
      console.log(balance);
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert('Please install MetaMask.');

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      setCurrentAccount(accounts[0]);
      const balanceWei = await window.ethereum.getBalance(currentAccount);
      const balanceEther = window.ethereum.utils.fromWei(balanceWei, 'ether');
      setBalance(balanceEther);
      console.log(currentAccount);
      console.log(balance);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue: VNSeContextData = {
    checkIfWalletIsConnect,
    connectWallet,
    // getBalance,
    currentAccount,
    balance,
  };

  return <VNSeContext.Provider value={contextValue}>{children}</VNSeContext.Provider>;
};
