require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  defaultNetwork: "zkSync",
  networks: {
    zkSync: {
      url: "https://sepolia.era.zksync.dev",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 300,
    },
  },
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
