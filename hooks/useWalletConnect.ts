import { useState } from 'react';

const useWalletConnect = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [pubKey, setPubKey] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      // Replace this with your wallet connection logic
      const accounts = await window.dapp.request('aptos', {
        method: 'dapp:accounts',
      });

      if (accounts && accounts.aptos) {
        setAddress(accounts.aptos.address);
        setPubKey(accounts.aptos.pubKey);
        setIsConnected(true);
        console.log('Connected')
      }
    } catch (e) {
      setError('Failed to connect wallet');
    }
  };

  return { address, pubKey, isConnected, error, connectWallet };
};

export default useWalletConnect;
