import { useEffect, useRef, useState } from "react";
import { BigNumber, Contract, providers, Signer } from "ethers";
import Web3Modal from "web3modal";
import Core from "web3modal";
import { config } from "../constants/config";
import { parseEther } from "ethers/lib/utils";

const Main = () => {
  const [ethPriceInUsd, setEthPriceInUsd] = useState<number>();

  const [amountToSend, setAmountToSend] = useState<number>();

  const [recipientAddress, setRecipientAddress] = useState<string>();

  // True if user has connected their wallet, false otherwise
  const [walletConnected, setWalletConnected] = useState(false);

  const web3ModalRef = useRef<Core>();

  // Helper function to connect wallet
  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Helper function to fetch a Provider/Signer instance from Metamask
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef!.current!.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 42) {
      window.alert("Please switch to the Kovan network!");
      throw new Error("Please switch to the Kovan network");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  // Helper function to return a provider/signer
  const getContractInstance = (
    providerOrSigner: providers.Provider | Signer
  ) => {
    return new Contract(
      config.contractAddress,
      config.contractAbi,
      providerOrSigner
    );
  };

  //  piece of code that runs everytime the wallet is connected/disconnected and/or the component refreshes
  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "kovan",
        providerOptions: {},
        disableInjectedProvider: false,
      });

      connectWallet().then(() => {});
      getEthPrice();
    }
  }, [walletConnected]);

  const getEthPrice = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const contract = getContractInstance(signer);
      const _ethPriceInUsd = await contract.getEthUsd();
      setEthPriceInUsd(
        parseInt(BigNumber.from(_ethPriceInUsd).toString()) / 100000000
      );
    } catch (error: any) {
      console.error(error);
      alert(error?.message);
    } finally {
    }
  };

  const sendEth = async () => {
    try {
      if (!amountToSend || !recipientAddress) {
        alert("please fill the form");
        console.log({ amountToSend, recipientAddress });
        return;
      }
      console.log({ amountToSend, recipientAddress });

      const ethToSend = amountToSend / ethPriceInUsd!;

      const signer = await getProviderOrSigner(true);
      const contract = getContractInstance(signer);
      const txn = await contract.sendEther(recipientAddress, {
        value: parseEther(ethToSend.toString()),
      });
      txn.wait();
      alert("txn sent");
      console.log({ txn });
    } catch (error: any) {
      console.error(error);
      alert(error?.message);
    }
  };

  return (
    <div>
      <h1 className="flex justify-center underline my-8">Send ETH in USD</h1>
      <div className="flex flex-col">
        <label className="my-2">
          Recipient:
          <input
            onChange={(event) => {
              setRecipientAddress(event.target.value);
            }}
            name="recipient"
            type={"text"}
          />
        </label>
        <label className="my-2 flex flex-col">
          Anount to send (in USD):
          <span className="text-xs mb-1">
            Current ETH price (in USD): {ethPriceInUsd}
          </span>
          <input
            onChange={(event) => {
              setAmountToSend(parseFloat(event.target.value));
            }}
            name={"amount"}
            step={"any"}
            type={"number"}
          />
        </label>
      </div>
      <span className="flex justify-center">
        <button
          disabled={
            ethPriceInUsd && recipientAddress && amountToSend ? false : true
          }
          className={`rounded-full border p-2 my-2 ${
            ethPriceInUsd && recipientAddress && amountToSend
              ? "bg-blue-500"
              : "bg-red-500"
          }`}
          onClick={async () => {
            await sendEth();
          }}
        >
          Send ETH
        </button>
      </span>
    </div>
  );
};

export default Main;
