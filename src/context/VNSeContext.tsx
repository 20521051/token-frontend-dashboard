import { createContext, ReactNode, useEffect, useState } from 'react';
import * as ethers from 'ethers';
import { ContractAbi, ContractAddr } from '@/utils/constants';

declare let window: any;

interface VNSeContextData {
  checkIfWalletIsConnect: () => void;
  connectWallet: () => void;
  buyTokens: (amount: ethers.BigNumberish | any) => void;
  transferTokens: (recipient: string, amount: ethers.BigNumberish | any) => void;
  currentAccount: string | null;
  balance: string | null;
}

export const VNSeContext = createContext<VNSeContextData | undefined>(undefined);

const createEthContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(ContractAddr, ContractAbi, signer);
  return transactionsContract;
};

//   const handleChange = (e: { target: { value: any; }; }, name: any) => {
//     setformData((prevState: any) => ({ ...prevState, [name]: e.target.value }));
//   };

export const VNSeProvider = ({ children }: { children: ReactNode }) => {
  const provider = new ethers.ethers.providers.Web3Provider(window.ethereum);
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const checkIfWalletIsConnect = async () => {
    try {
      if (!window.ethereum) return alert('Please install MetaMask.');

      const accounts = await window.ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        const balanceWei = await provider.getBalance(accounts[0]);
        const balanceEther = ethers.ethers.utils.formatEther(balanceWei);

        setBalance(balanceEther);
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

      await new Promise<void>((resolve) => {
        setCurrentAccount(accounts[0]);
        resolve();
      });
      const balanceWei = await provider.getBalance(accounts[0]);
      const balanceEther = ethers.ethers.utils.formatEther(balanceWei);
      setBalance(balanceEther);
      console.log('####### :', currentAccount);
      console.log('>>>>>>', accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  };

  const buyTokens = async (amount: ethers.BigNumberish | any) => {
    try {
      if (!window.ethereum || !currentAccount) {
        console.error('User is not connected');
        return;
      }
      const contract = createEthContract();
      const tx = await contract.buyTokensFromContract(amount);
      await tx.wait();
      console.log('Buy tokens successful');
    } catch (error) {
      console.error('Buy tokens failed:', error);
    }
  };
  const transferTokens = async (recipient: string, amount: ethers.BigNumberish | any) => {
    try {
      if (!window.ethereum || !currentAccount) {
        console.error('User is not connected');
        return;
      }
      const contract = createEthContract();
      const tx = await contract.transfer(recipient, amount);
      await tx.wait();
      console.log('Transfer tokens successful');
    } catch (error) {
      console.error('Transfer tokens failed:', error);
    }
  };
  useEffect(() => {}, [currentAccount, balance]);

  const contextValue: VNSeContextData = {
    checkIfWalletIsConnect,
    connectWallet,
    buyTokens,
    transferTokens,
    currentAccount,
    balance,
  };

  return <VNSeContext.Provider value={contextValue}>{children}</VNSeContext.Provider>;
};
