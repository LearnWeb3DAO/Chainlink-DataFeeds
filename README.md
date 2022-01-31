# Chainlink: Data Feeds

## Introduction

### Connect Your Smart Contracts to the Outside World

Chainlink Data Feeds are the quickest way to connect your smart contracts to the real-world market prices of assets. For example, one use for data feeds is to enable smart contracts to retrieve the latest pricing data of an asset in a single call.

### Use case

Often, smart contracts need to act upon prices of assets in real-time. This is especially true in DeFi.

For example, [Synthetix](https://www.synthetix.io) use Data Feeds to determine prices on their derivatives platform. Lending and Borrowing platforms like [AAVE](https://aave.com/) use Data Feeds to ensure the total value of the collateral.

The [Decentralized Data Model](https://docs.chain.link/docs/architecture-decentralized-model/) describes how Data Feeds are aggregated from many data sources and published on-chain.

## BUIDL IT

### What will we be building?

Sometimes people want to send the same worth of Ether as a specific amount of fiat currency for like payment.

Let’s say, you want to send $500 worth of Ether, then you realize you can’t set the amount of Ether which is worth of a specific amount of US dollar in Metamask.

![](https://i.imgur.com/8IXyIKy.png)

It shows what’s your Ether worth in US dollar, but like you cannot set $500 worth of Ether.

That’s where this dApp comes in. You can send the amount of Ether based on fiat currency.

### How will it work?

Well, the idea will be simple:

- You enter the value you want to send, in USD
- The dApp fetches the current prices for the ETH/USD pair
- Converts the USD amount into ETH according to the pair prices
- Sends that amount of Ether across

### Setup a new Hardhat project

We'll work on `web` later.
For now, switch inside the eth directory, and setup a new Hardhat boilerplate

```
cd eth
npm init --y
npx hardhat
```

This will ask you a few questions to setup the new project. You must be familiar to this by now.

I've chosen a basic Hardhat sample project.

### Writing the contract

Let's `cd` into `contracts` and start a new contract `SendEthInUsd.sol`:

```
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract SendEthInUsd {

}
```

To consume price data, your smart contract should reference [`AggregatorV3Interface`](https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol), which defines the external functions implemented by Data Feeds.

Thus, we'll start by importing this and initialise it in our contract:

Therefore, we'll `yarn add @chainlink/contracts` and then:

```
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract SendEthInUsd {

}
```

Now, initialise it:

```
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract SendEthInUsd {
   AggregatorV3Interface internal priceFeed;

    constructor(aggregatorAddress) {
        priceFeed = AggregatorV3Interface(aggregatorAddress);
    }

}
```

Let's see what's happening here:

- We first declared a new internal variable called `priceFeed` of the type `AggregatorV3Interface`: [https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol](https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol)
- Next, we'll call the aggregator interface with the exact contract address of the price feed we want. We can find different price feeds for different networks here: [https://docs.chain.link/docs/reference-contracts/](https://docs.chain.link/docs/reference-contracts/). This is the `aggregatorAddress` in code.
- We'll use the ETH/USD data feed on the Kovan network which has the address: `0x9326BFA02ADD2366b30bacB125260Af641031331`.

You can find the different price feeds for the Kovan network here: [https://docs.chain.link/docs/ethereum-addresses/#Kovan%20Testnet](https://docs.chain.link/docs/ethereum-addresses/#Kovan%20Testnet)

Once we have the `priceFeed` initialised, we can move forward to getting the latest price for this pair:

```
/**
 * Returns the latest price
*/
function getEthUsd() public view returns (int) {
 (
            uint80 roundID,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
}
```

Well, what are these new values and where did they come from?

Let's try to understand everything the (`AggregatorV3Interface.sol` interface)[https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol] has:

| Name            | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| Decimals        | The number of decimals in the response.                              |
| description     | The description of the aggregator that the proxy points to.          |
| getRoundData    | Get data from a specific round.                                      |
| latestRoundData | Get data from the latest round.                                      |
| version         | The version representing the type of aggregator the proxy points to. |

We're calling the `latestRoundData` function right now, which returns us:

- `uint80 roundId`: the round ID
- `int256 answer,`: the price
- `uint256 startedAt,`: timestamp of when the round started
- `uint256 updatedAt`: timestamp of when the round was updated
- `uint80 answeredInRound`: the round ID of the round in which the answer was computer

Seeing this, the return values should make a lot of sense.

The one we're interested in, for the scope of our dApp, is the `answer`, or the price.

Thus,

```
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract SendEthInUsd {
   AggregatorV3Interface internal priceFeed;

    constructor(aggregatorAddress) {
        priceFeed = AggregatorV3Interface(aggregatorAddress);
    }

    /**
    * Returns the latest price
    */
    function getEthUsd() public view returns (int) {
        (
            ,
            int price,
            ,
            ,

        ) = priceFeed.latestRoundData();
        return price;
    }
}
```

We can exclude abstracting values separated with commas.

Let's add the final function to allow sending Ether to a recipient

```
/**
* Sends the ether in msg.value across to the recipient
*/
function sendEther(address payable _to) public payable {
    // Call returns a boolean value indicating success or failure.
    // This is the current recommended method to use.
    (bool sent, bytes memory data) = _to.call{value: msg.value}("");
    require(sent, "Failed to send Ether");
}
```

There are multiple ways to send ether, the _best_ of which is by `call`. Refer to this for more details: [https://solidity-by-example.org/sending-ether/](https://solidity-by-example.org/sending-ether/)

**NOTE:** the Chainlink feed aggregators have 8 decimals of precision, you have to divide returned price by 10⁸ later when consuming this value on the frontend.

The contract, in entirety, should look like this now:

```
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract SendEthInUsd {
   AggregatorV3Interface internal priceFeed;

    constructor(address aggregatorAddress) {
        priceFeed = AggregatorV3Interface(aggregatorAddress);
    }

    /**
    * Returns the latest price
    */
    function getEthUsd() public view returns (int) {
        (
            ,
            int price,
            ,
            ,

        ) = priceFeed.latestRoundData();
        return price;
    }
    /**
    * Sends the ether in msg.value across to the recipient
    */
    function sendEther(address payable _to) public payable {
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }

}
```

Let's write the deploy script for this (`eth/scripts/deploy.js`), and get the contract address:

```
const hre = require("hardhat");
const config = require("../config");

async function main() {
  const SendEthInUsd = await hre.ethers.getContractFactory("SendEthInUsd");
  const contract = await SendEthInUsd.deploy(config.aggregatorAddress);
  console.log("deploying...");

  await contract.deployed();

  console.log("SendEthInUsd deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

```

Make sure to setup a config file/add the aggregator address to be fed in this deploy script.

That's it!! Let's start writing the web part for this now and integrate the contract:

### Integrating with the webapp

My weapons of choice for the webapp will be Next with TypeScript.

We are going to be making a very very simplistic vanilla looking UI for this. The real beauty lies in what's happening behind the scenes.

Let's start with going into the `web` directory and initing a new Next app:

```
cd ../web
npx create-next-app@latest --typescript
```

This should setup a boilerplate app for you.

Inside of `/pages`, create a new component called `Main.tsx`:

```
const Main = () => {

}

export default Main;
```

This will be our component that will be doing all the heavy-lifting. Let's render it inside `index.tsx`:

```
import type { NextPage } from "next";
import Main from "./Main";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Send ETH in USD</title>
        <meta name="description" content="Send ETH in USD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Main />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by LW3DAO
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
```

Now that this is done, let's go back to `Main.tsx` and code it up:

First, we need to ensure wallet connections. Let's use ethers.js and web3modal:
`yarn add ethers web3modal`

Add this function:

```
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
```

This runs everytime the wallet is connected/disconnected and/or the component refreshes.

What is this `connectWallet`?

```
  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (error) {
      console.error(error);
    }
  };
```

Let's also fetch our provider/signer helper:

```
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
```

Now that our wallet connection is good, let's jump to the good part.

Fetch the contract instance:

```
  const getContractInstance = (
    providerOrSigner: providers.Provider | Signer
  ) => {
    return new Contract(
      config.contractAddress,
      config.contractAbi,
      providerOrSigner
    );
  };
```

Let's start with initialising a few state variables:

```
  const [ethPriceInUsd, setEthPriceInUsd] = useState<number>();

  const [amountToSend, setAmountToSend] = useState<number>();

  const [recipientAddress, setRecipientAddress] = useState<string>();

  // True if user has connected their wallet, false otherwise
  const [walletConnected, setWalletConnected] = useState(false);

  const web3ModalRef = useRef<Core>();
```

If you're thinking about the `getEthPrice` function in the `useEffect`, we call the contract to fetch the latest ETH price that we'll use to convert our USD value => Ether

```
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
```

Remember: we divide the gotten ETH price by 10^8 because of the decimal precision we previously discussed.

Let's now bootstrap a quick form that will be responsible for taking in inputs:

```
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
```

**I've used TailwindCSS for styling**: you don't need to know TailwindCSS for working on this project. You can write vanilla CSS too :)

The state variables used were defined in the start, and they change values based on various functions we've written.

Let's now work on the main `sendEth` function that'll be responsible of calling the payable function in the contract:

```
const sendEth = async () => {
    try {
      if (!amountToSend || !recipientAddress) {
        alert("please fill the form");
        console.log({ amountToSend, recipientAddress });
        return;
      }

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
```

Here, we first check the form validity.

If everything's good, we calculate the Ether format of the USD price entered by the user (Amount of Ether to send = Amount to send in USD / Price of 1 ETH in USD)

Once that's done, we send the transaction adding the recipient address and `msg.value` :rocket:

Before going further to test it out, make sure to have your `config` and `ABI` setup:

You can choose how you want to structure it for yourself. The way I've done it is:

It lives in `./constants/` of my root directory.
![](https://i.imgur.com/HOooxtd.png)

And my `config.ts` looks like:

```
export const config = {
  contractAddress: "0xFd6c3404D9eCb450fe9361FB9CD36A0265Ea74De",
  contractAbi: require("./ABI/SendEthInUsd.json"),
};
```

where `contractAddress` is the address of my earlier deployed contract.

That's about it. :rocket:

This is what our `Main.tsx` looks like, at the end:

```
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
```

Congratulations! Your own dApp which can take in a USD amount of ETH and transfer it to a recipient is now active! :rocket:

## Testing

- Connect your wallet on Kovan
- Enter the recipient address you want to send the Ether to, and the amount in USD
- This should now open the Metamask prompt to send the transaction. Make sure your account is well funded.
- We send the transaction, and then we wait.
- If everything goes well, you should see the transaction gotten mined and the Ether transfered!

## Push to Github

Make sure to push all this code to Github before proceeding to the next step.

## Website Deployment

What good is a website if you cannot share it with others? Let's work on deploying your dApp to the world so you can share it with all your LearnWeb3DAO frens.

- Go to [Vercel Dashboard](https://vercel.com) and sign in with your GitHub account.
- Click on the `New Project` button and select your `Chainlink-DataFeeds` repo.
- When configuring your new project, Vercel will allow you to customize your `Root Directory`
- Since our Next.js application is within a subfolder of the repo, we need to modify it.
- Click `Edit` next to `Root Directory` and set it to `my-app`.
- Select the framework as `Next.js`
- Click `Deploy`
- Now you can see your deployed website by going to your Vercel Dashboard, selecting your project, and copying the domain from there!

## CONGRATULATIONS! You're all done!

Hopefully you enjoyed this tutorial.
Feel free to go artistic on the frontend and add animations or whatever! :D
Don't forget
