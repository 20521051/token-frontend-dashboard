import { createContext, ReactNode, useContext, useState } from 'react';
import { ethers } from 'ethers';

declare let window: any;

interface VNSeContextData {
  checkIfWalletIsConnect: () => void;
  connectWallet: () => void;
  currentAccount: string | null;
}

export const VNSeContext = createContext<VNSeContextData | undefined>(undefined);

export const VNSeProvider = ({ children }: { children: ReactNode }) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

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
  const getBalanceFromMetaMask = async () => {
    if (typeof window.ethereum === 'undefined') {
      console.log('Vui lòng cài đặt MetaMask để sử dụng tính năng này.');
      return null;
    }

    try {
      if (currentAccount) {
        const balanceWei = await provider.getBalance(currentAccount);
        const balanceEther = ethers.utils.formatEther(balanceWei);
        setBalance(balanceEther); 
      }
    } catch (error) {
      console.error('Lỗi khi lấy số dư từ MetaMask:', error);
    }
  };

  const contextValue: VNSeContextData = {
    checkIfWalletIsConnect,
    connectWallet,
    currentAccount,
  };

  return <VNSeContext.Provider value={contextValue}>{children}</VNSeContext.Provider>;
};
