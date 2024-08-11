# ZKProofPrivacy - Privacy and Trust Mechanisms in Smart Contracts

This project implements mechanisms to maintain the privacy of data feeds using Zero-Knowledge Proofs (ZKP) and identifies trustworthy data feeds in smart contracts. The project is deployed on the zkSync Era Sepolia Testnet.

## Project Structure

```
ZKProofPrivacy/
├── contracts/
│   ├── PrivacyOracle.sol
│   └── TrustOracle.sol
├── scripts/
│   ├── deploy.js
│   └── interact.js
├── test/
│   ├── PrivacyOracle.test.js
│   └── TrustOracle.test.js
├── .env
├── hardhat.config.js
└── package.json
```

## Technologies Used

- **Solidity**: Smart contract programming language.
- **Hardhat**: Ethereum development environment for compiling, deploying, testing, and debugging.
- **zkSync**: Layer 2 scaling solution for Ethereum, used for deploying smart contracts on the zkSync Era Sepolia Testnet.
- **Zero-Knowledge Proofs (ZKP)**: Cryptographic technique used to ensure privacy in data feeds.
- **Oracles**: Mechanisms for aggregating and verifying data from multiple sources to determine trustworthiness.

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/piyushmali/Privacy-of-Smart-Contract.git
   cd Privacy-of-Smart-Contract/ZKProofPrivacy
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your private key:

   ```plaintext
   PRIVATE_KEY=your_private_key_here
   ```

## Hardhat Configuration

Your `hardhat.config.js` should be set up as follows:

```javascript
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
```

## Commands for Execution

1. **Compile Smart Contracts:**

   Compile the smart contracts to ensure everything is set up correctly:

   ```bash
   npx hardhat compile
   ```

2. **Deploy Smart Contracts:**

   Deploy the `PrivacyOracle` and `TrustOracle` contracts to the zkSync Era Sepolia Testnet:

   ```bash
   npx hardhat run scripts/deploy.js --network zkSync
   ```

   **Expected Output:**
   ```plaintext
   Deploying contracts with the account: 0xYourAccountAddress
   PrivacyOracle deployed to: 0xPrivacyOracleAddress
   TrustOracle deployed to: 0xTrustOracleAddress
   ```

3. **Interact with Deployed Contracts:**

   Use the interaction script to verify data and compute trust scores:

   ```bash
   npx hardhat run scripts/interact.js --network zkSync
   ```

   **Expected Output:**
   ```plaintext
   Data verified: true
   Trust score: 1
   ```

4. **Run Unit Tests:**

   Execute the tests to ensure the smart contracts are functioning as expected:

   ```bash
   npx hardhat test
   ```

   **Expected Output:**
   ```plaintext
     PrivacyOracle
       ✓ Should verify data with valid zkProof (70ms)

     TrustOracle
       ✓ Should aggregate data trust scores (55ms)
   ```

## License

This project is licensed under the MIT License.
