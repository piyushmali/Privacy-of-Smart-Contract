const hre = require("hardhat");

async function main() {
  const PrivacyPreservingTransaction = await hre.ethers.getContractFactory("PrivacyPreservingTransaction");
  const privacyPreservingTransaction = await PrivacyPreservingTransaction.deploy();

  await privacyPreservingTransaction.deployed();

  console.log("PrivacyPreservingTransaction deployed to:", privacyPreservingTransaction.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
