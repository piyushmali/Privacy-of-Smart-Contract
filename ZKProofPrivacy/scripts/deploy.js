async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const PrivacyOracle = await ethers.getContractFactory("PrivacyOracle");
    const privacyOracle = await PrivacyOracle.deploy();
    console.log("PrivacyOracle deployed to:", privacyOracle.address);
  
    const TrustOracle = await ethers.getContractFactory("TrustOracle");
    const trustOracle = await TrustOracle.deploy();
    console.log("TrustOracle deployed to:", trustOracle.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  