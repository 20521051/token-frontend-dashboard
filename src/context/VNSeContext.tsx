import { createContext, ReactNode, useState } from 'react';
import * as ethers from 'ethers';
import { ContractAbi, ContractAddr } from '@/utils/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;

interface VNSeContextData {
  checkIfWalletIsConnect: () => void;
  connectWallet: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  buyTokensFromContract: (amount: ethers.BigNumberish | any) => void;
  currentAccount: string | null;
  balance: string | null;
}

export const VNSeContext = createContext<VNSeContextData | undefined>(undefined);

const createEthContract = () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(ContractAbi, ContractAddr, signer);
  return transactionsContract;
};

//   const handleChange = (e: { target: { value: any; }; }, name: any) => {
//     setformData((prevState: any) => ({ ...prevState, [name]: e.target.value }));
//   };

export const VNSeProvider = ({ children }: { children: ReactNode }) => {
  const provider = new ethers.ethers.BrowserProvider(window.ethereum);
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const checkIfWalletIsConnect = async () => {
    try {
      if (!window.ethereum) return alert('Please install MetaMask.');

      const accounts = await window.ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        const balanceWei = await provider.getBalance(accounts[0]);
        const balanceEther = ethers.ethers.formatEther(balanceWei);
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

      setCurrentAccount(accounts[0]);
      const balanceWei = await provider.getBalance(accounts[0]);
      const balanceEther = ethers.ethers.formatEther(balanceWei);
      setBalance(balanceEther);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buyTokensFromContract = async (amount: ethers.BigNumberish | any) => {
    try {
      console.log(currentAccount);
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

  const contextValue: VNSeContextData = {
    checkIfWalletIsConnect,
    connectWallet,
    buyTokensFromContract,
    currentAccount,
    balance,
  };

  return <VNSeContext.Provider value={contextValue}>{children}</VNSeContext.Provider>;
};
