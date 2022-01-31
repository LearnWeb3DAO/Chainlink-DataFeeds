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
